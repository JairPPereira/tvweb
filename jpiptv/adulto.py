import requests
from bs4 import BeautifulSoup

url = "https://www.pornolandia.xxx/video/53581/anya-olsen-pornstar-cavalgando-forte-no-pau"

# Faz a requisição HTTP para o site
response = requests.get(url)

# Analisa o conteúdo da página usando BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Encontra os elementos desejados
title = soup.find("meta", {"itemprop": "name"})["content"]
grupo = soup.find("a", {"title": "Filmes Porno"}).text.strip()
logo = soup.find("video")["poster"]
video_src = soup.find("source")["src"]

# Imprime os resultados no formato desejado
print(f'#EXTINF:-1 tvg-id="" tvg-name="{grupo}" tvg-logo="{logo}" group-title="{grupo}",{title}')
print(video_src)
