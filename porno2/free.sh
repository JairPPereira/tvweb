#!/bin/bash

#O FFmpeg está configurado para apagar os arquivos de .ts não utilizados automaticamente. 
#Porém mesmo com essa configuração ainda fica algum lixo.
#FFmpeg is configured to automatically delete unused .ts files. 
#However, even with this configuration there is still some garbage.
cd $1

mkdir tmp

cat master.m3u8 | grep ts | xargs -I {} cp {} tmp/
rm -rf *.ts
cp tmp/* ./

rm -rf tmp