#!/bin/bash

rm /var/nginx/scripts/free.sh
rm /var/nginx/scripts/live.sh
rm /var/nginx/www/hls/master.m3u8
rm /var/nginx/www/index.html
rm -Rf /var/nginx/www/hls

chmod +x live.sh

cp live.sh /var/nginx/scripts/live.sh
cp master.m3u8 /var/nginx/scripts/master.m3u8
cp index.html /var/nginx/scripts/index.html

chown nginx:nginx -R /var/nginx/*