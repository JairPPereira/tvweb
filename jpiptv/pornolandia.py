import requests
import re

# URL da página
url = "https://www.pornolandia.xxx/video/52571/mulher-nua-caseira-dando-na-cama-do-ex-marido"

# Fazendo a solicitação HTTP
response = requests.get(url)
response.encoding = 'utf-8'  # Definir a codificação explicitamente para UTF-8

# Verificar se a solicitação foi bem-sucedida (código 200)
if response.status_code == 200:
    # Encontrando os dados usando expressões regulares
    titulo_match = re.search(r'<meta property="og:title" content="(.*?)"', response.text)
    poster_match = re.search(r'<meta property="og:image" content="(.*?)"', response.text)
    video_match = re.search(r'<source src="(.*?)" type="video/mp4">', response.text)

    # Verificando se todas as correspondências foram bem-sucedidas
    if titulo_match and poster_match and video_match:
        # Extraindo os dados correspondentes
        titulo = titulo_match.group(1)
        poster_url = poster_match.group(1)
        video_url = video_match.group(1)

        # Imprimindo o resultado no formato desejado
        print(f'#EXTINF:-1 tvg-id="" tvg-name="Amador" tvg-logo="{poster_url}" group-title="Amador",{titulo}')
        print(video_url)
    else:
        print("Um ou mais elementos não foram encontrados")
else:
    print(f"A solicitação falhou com o código de status {response.status_code}")
