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
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Crepusculo 1 2008
https://content.jwplatform.com/videos/KnIteJsi-BvF3GI2K.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Crepusculo 2 Lua Nova  2009
https://content.jwplatform.com/videos/ksvlGpEj-BvF3GI2K.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Crepusculo 3 Eclipse  2010
https://content.jwplatform.com/videos/MpxOFyDe-BvF3GI2K.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Crepusculo 4 Amanhecer PT.1 2011
https://content.jwplatform.com/videos/PuaZAywT-BvF3GI2K.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Crepusculo 5 Amanhecer PT.2 2012
https://content.jwplatform.com/videos/t5DB2JVf-BvF3GI2K.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Meu Amigo O Dragão 2016
https://content.jwplatform.com/videos/H0CXSFxK-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Alice No País Das Maravilhas 2010
https://content.jwplatform.com/videos/Q7kPaBMm-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES | AVENTURA",Alice Através Do Espelho 2016
https://content.jwplatform.com/videos/NrtBiolg-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3wTiaa6" group-title="FILMES | AVENTURA",Alice E Peter Onde Nascem Os Sonhos 2020
https://content.jwplatform.com/videos/EsFrvNr0-N4rrC46a.mp4?JPFILMES
"""

output_text = reformat_m3u(input_text)
print(output_text)
