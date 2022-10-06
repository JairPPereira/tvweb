#!/bin/bash

on_die () {
  pkill -KILL -P $$
  rm -Rf "$HLS_OUT_PATH"
}
trap 'on_die' TERM

SH_PATH='/var/nginx/scripts'
HLS_OUT_PATH="/var/nginx/www/$2"
FFMPEG_LOG_OUTPUT='var/nginx/logs/fflog.txt'

mkdir -p $HLS_OUT_PATH/p360
mkdir -p $HLS_OUT_PATH/p720
cp /var/nginx/scripts/index.html $HLS_OUT_PATH/index.html
cp /var/nginx/scripts/master.m3u8 $HLS_OUT_PATH/master.m3u8

#O comando entrega duas resolucoes. Uma 360p e outra 720p.
#O objetivo e entregar um video continuo e que atenda
#a banda de internet do seu publico.
#The command delivers two resolutions. One 360p and one 720p.
#The goal is to deliver a continuous video that meets
#the internet band of your audience.
ffmpeg -re -i rtmp://localhost:1935/$1/$2 -async 1 -vsync -1 \
    -filter_complex "[v:0]split=2[360p][720p];[360p]scale=w=640:h=360[p360];[720p]scale=w=1280:h=720[p720]" \
    -map [p360] -map 0:a -preset veryfast -c:v libx264 -x264opts keyint=48:no-scenecut -sws_flags bilinear -pix_fmt yuv420p -tune zerolatency -c:a aac \
    -r 24 -crf 23 -profile:v main -b:v 800K -b:a 64k -ar 44100 -maxrate 864k \
    -f hls -hls_time 4 -start_number 0 -hls_list_size 10 -hls_flags delete_segments \
    -hls_segment_filename $HLS_OUT_PATH/p360/segment_%03d.ts $HLS_OUT_PATH/p360/master.m3u8 \
    -map [p720] -map 0:a -preset veryfast -c:v libx264 -x264opts keyint=48:no-scenecut -sws_flags bilinear -pix_fmt yuv420p -tune zerolatency -c:a aac \
    -r 24 -crf 23 -profile:v main -b:v 1500k -b:a 96k -ar 44100 -maxrate 1596k  \
    -f hls -hls_time 4 -start_number 0 -hls_list_size 10 -hls_flags delete_segments \
    -hls_segment_filename $HLS_OUT_PATH/p720/segment_%03d.ts $HLS_OUT_PATH/p720/master.m3u8 2> $FFMPEG_LOG_OUTPUT &
wait