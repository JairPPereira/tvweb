#!/bin/bash

FFMPEG_VERSION="4.2.2"

apt install -y libx264-dev
cd /tmp

wget http://ffmpeg.org/releases/ffmpeg-$FFMPEG_VERSION.tar.gz
tar -zxvf ffmpeg-$FFMPEG_VERSION.tar.gz

cd ffmpeg-$FFMPEG_VERSION
./configure --disable-x86asm --enable-gpl --enable-libx264
make && make install && make distclean