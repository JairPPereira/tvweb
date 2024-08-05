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
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Serra Pelada 2014
https://content.jwplatform.com/videos/KDufJyzk-eS6GsxaU.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",CARANDIRU
https://content.jwplatform.com/videos/lZIsSakL-EiPiTsLT.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",ÚLtima Parada 174 2008
https://content.jwplatform.com/videos/t12xnVD5-ABgby8qa.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Minha Mae e Uma Peca 3 2020
https://content.jwplatform.com/videos/dtoFY70K-bWtniFnP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Vestido Pra Casar 2014
https://content.jwplatform.com/videos/aIxNxYXY-LElI8svP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Uma Quase Dupla 2018
https://content.jwplatform.com/videos/yb5YiAg3-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Um Suburbano Sortudo 2016
https://content.jwplatform.com/videos/qrTM4Jle-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Cinderela Pop 2019
https://content.jwplatform.com/videos/mTZM66qi-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Crô Em Família 2018
https://content.jwplatform.com/videos/6l6PSmww-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Coracao De Cowboy 2018
https://content.jwplatform.com/videos/Bl1AoX8S-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Vai Que Cola 2015
https://content.jwplatform.com/videos/8qAHGQZO-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Se Beber Nao Ceie 2018
https://content.jwplatform.com/videos/eJqlL4n6-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Tô Ryca 2016
https://content.jwplatform.com/videos/R27dy7ZB-LElI8svP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES | NACIONAL",Tungstenio 2018
https://content.jwplatform.com/videos/OvgULsfC-0LVEQQrw.mp4?JPFILMES
"""

output_text = reformat_m3u(input_text)
print(output_text)
