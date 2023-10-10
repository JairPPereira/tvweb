import re

# Lista m3u
lista_m3u = """
#EXTINF:-1 tvg-id="" tvg-name="A Cura (2017)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bwkxGDgPNtArXB7tuaKX08qH0tU.jpg" group-title="FILMES - TERROR",A Cura (2017)
http://connecttvapp.xyz:80/movie/homeondemand/vR5jZPUJSWCY/2117.mp4
#EXTINF:-1 tvg-id="" tvg-name="A Câmara do Medo (2018)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/trtIbNNY72gR1S8Ds2pPppdQ92y.jpg" group-title="FILMES - FICÇÃO",A Câmara do Medo (2018)
http://connecttvapp.xyz:80/movie/homeondemand/vR5jZPUJSWCY/19482.mp4
#EXTINF:-1 tvg-id="" tvg-name="A Dama do Silêncio: La Mataviejitas (2023)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2//fd5B1I6riT7oze7FntN51RvTPyn.jpg" group-title="FILMES - 2023",A Dama do Silêncio: La Mataviejitas (2023)
http://connecttvapp.xyz:80/movie/homeondemand/vR5jZPUJSWCY/214797.mp4
#EXTINF:-1 tvg-id="" tvg-name="A Dama e o Vagabundo (1955)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qKBA03V9LvfpvcNfUgAwdydRSA1.jpg" group-title="FILMES - INFANTIL",A Dama e o Vagabundo (1955)
http://connecttvapp.xyz:80/movie/homeondemand/vR5jZPUJSWCY/1771.mp4
#EXTINF:-1 tvg-id="" tvg-name="A Dama e o Vagabundo (2019)" tvg-logo="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vnBl7huZPEPsxD2ZmqZqRBI3efr.jpg" group-title="FILMES - AVENTURA",A Dama e o Vagabundo (2019)
http://connecttvapp.xyz:80/movie/homeondemand/vR5jZPUJSWCY/1179.mp4
"""

# Encontrar e imprimir linhas com group-title="FILMES - 2023"
pattern = r'#EXTINF:-1 tvg-id="" tvg-name=".+?" tvg-logo=".+?" group-title="FILMES - 2023",.+?http:.+?\.mp4'
matches = re.findall(pattern, lista_m3u, re.DOTALL)
for match in matches:
    print(match)
