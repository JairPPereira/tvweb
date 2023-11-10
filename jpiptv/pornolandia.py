import requests
from bs4 import BeautifulSoup

# URL da página
url = "https://www.pornolandia.xxx/video/52571/mulher-nua-caseira-dando-na-cama-do-ex-marido"

# Fazendo a solicitação HTTP
response = requests.get(url)

# Parseando o conteúdo da página com BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Encontrando o título e o URL do vídeo e do poster
titulo = soup.find("meta", {"itemprop": "name"})["content"]
poster_url = soup.find("video")["poster"]
video_url = soup.find("source")["src"]

# Imprimindo o resultado no formato desejado
print(f'#EXTINF:-1 tvg-id="" tvg-name="Amador" tvg-logo="{poster_url}" group-title="Amador",{titulo}')
print(video_url)
