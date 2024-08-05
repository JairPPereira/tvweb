import re

def reformat_m3u(input_text):
    # Expressão regular para encontrar as linhas de metadados
    extinf_pattern = re.compile(r'#EXTINF:-1 tvg-logo="(.*?)" group-title="(.*?)",(.*?)\n(https://.*?)\n')

    # Lista para armazenar as linhas reformatadas
    reformatted_lines = []

    # Encontra todas as ocorrências que correspondem ao padrão
    matches = extinf_pattern.findall(input_text)

    for match in matches:
        logo_url, group_title, tvg_name, stream_url = match

        # Cria as novas linhas reformatadas
        extinf_line = f'#EXTINF:-1 tvg-id="{tvg_name}" tvg-name="{tvg_name}" tvg-logo="{logo_url}" group-title="{group_title}",{tvg_name}'
        reformatted_lines.append(extinf_line)
        reformatted_lines.append(stream_url)

    # Retorna as linhas reformatadas como uma string
    return '\n'.join(reformatted_lines)

# Exemplo de uso
input_text = """
#EXTINF:-1 tvg-logo="https://bit.ly/3Ig7OaN" group-title="FILMES | CORRIDA",Táxi 5 2020 
https://content.jwplatform.com/videos/wARYiP2N-l5r3qFf5.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3Ic0jSo" group-title="FILMES | CORRIDA",Taxi 1 1998
https://content.jwplatform.com/videos/9W8Tlq0y-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3LRSUKa" group-title="FILMES | CORRIDA",Taxi 5 2004
https://content.jwplatform.com/videos/miyo8U6Y-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/33IFDlZ" group-title="FILMES | CORRIDA",Taxi 4 2007
https://content.jwplatform.com/videos/FFMGYKE6-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3t7i4vU" group-title="FILMES | CORRIDA",Taxi 3 2003
https://content.jwplatform.com/videos/OpUA9AHr-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3IfvvzY" group-title="FILMES | CORRIDA",Taxi 2 2000
https://content.jwplatform.com/videos/UniNqwW8-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3LVlKsY" group-title="FILMES | CORRIDA",Corrida Mortal 1 2008
https://content.jwplatform.com/videos/tie3Yw82-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3haePxT" group-title="FILMES | CORRIDA",Corrida Mortal 2 2010
https://content.jwplatform.com/videos/qBMnCc8j-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/35dBXcd" group-title="FILMES | CORRIDA",Corrida Mortal 3 2012
https://content.jwplatform.com/videos/cPTMeXjt-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3It5Lk1" group-title="FILMES | CORRIDA",Resgate Em Alta Velocidade 2013
https://content.jwplatform.com/videos/I9qFgAF2-cYl17PlW.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3JMvJix" group-title="FILMES | CORRIDA",Em Ritmo De Fuga 2017
https://content.jwplatform.com/videos/uYNHofDj-cYl17PlW.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3m3KxAP" group-title="FILMES | CORRIDA",Velozes e Furiosos 9 2021
https://cdn.jwplayer.com/videos/6QvMGqYS-4z58n6ov.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/35jbSs6" group-title="FILMES | CORRIDA",Velozes e furIosos Hobbs Shaw 2019
https://content.jwplatform.com/videos/fgMJ4nmO-l5r3qFf5.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/34ZeQ5q" group-title="FILMES | CORRIDA",2oo Mph 2011
https://content.jwplatform.com/videos/HFZgeEll-rJHXHDfu.mp4?JPFILMES
"""

output_text = reformat_m3u(input_text)
print(output_text)
