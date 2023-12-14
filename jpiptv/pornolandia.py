import re

def processar_url(url):
    # Padronizar o URL para garantir que seja correspondido corretamente
    padrao_url = re.compile(r'https://www.pornolandia.xxx/video/(\d+)/(.*?)/?$')

    # Extrair os termos do URL
    correspondencia = padrao_url.match(url)

    if correspondencia:
        # Extrair os grupos correspondentes
        numero_video = correspondencia.group(1)
        descricao_video = correspondencia.group(2)

        # Formatar a saída desejada
        resultado = f'#EXTINF:-1 tvg-id="" tvg-name="Amador" tvg-logo="https://www.pornolandia.xxx/media/videos/tmb/{numero_video}/default.jpg" group-title="Amador",{descricao_video.capitalize()}\n'
        resultado += f'https://videos.pornolandia.xxx/media/videos/flv/{numero_video}.mp4'

        return resultado
    else:
        return 'URL não corresponde ao padrão esperado.'

# Exemplo de uso
url_input = "https://www.pornolandia.xxx/video/52258/Esposa pedindo pra dar o cu pag.5"
saida_formatada = processar_url(url_input)
print(saida_formatada)
