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
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/meiRE7aScXd75IV2hmv9hZG03VW.jpg" group-title="FILMES - Coleção Jerry Lewis",A Barbada do Biruta (1953)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/A.Barbada.do.Biruta.(1953).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/83pJPArXu4sfkeaq9qpsGWt3JcK.jpg" group-title="FILMES - Coleção Jerry Lewis",A Canoa Furou (1959)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/A.Canoa.Furou.(1959).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/9ERKsl3znHr8wSdyL2SiqtFTsbG.jpg" group-title="FILMES - Coleção Jerry Lewis",A Família Fuleira (1965)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/A.Familia.Fuleira.(1965).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/71E707SujTFdJqiTfglbjVhrEVh.jpg" group-title="FILMES - Coleção Jerry Lewis",A Farra dos Malandros (1954)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/A.Farra.dos.Malandros.(1954).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/9voPq8dH2UhBvFQV86eVVzowZvV.jpg" group-title="FILMES - Coleção Jerry Lewis",As loucuras de Jerry Lewis (1983)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/As.loucuras.de.J.L.(1983).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/e0k9MvNCoR3wf1HCjwEGzgSg3mj.jpg" group-title="FILMES - Coleção Jerry Lewis",Artistas e Modelos (1955)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Artistas.e.Modelos.(1955).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/ugPBXv2QnwVopFv0Mc97uAZuoDB.jpg" group-title="FILMES - Coleção Jerry Lewis",Bancando a Ama Seca (1958)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Bancando.a.Ama.Seca.(1958).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/bS6za8lDFVcd7W2qiCArIS7pBcU.jpg" group-title="FILMES - Coleção Jerry Lewis",Boeing Boeing (1965)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Boeing.Boeing.(1965).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/o3YcBuBmPsOyHmBPaxVcqpeU9hO.jpg" group-title="FILMES - Coleção Jerry Lewis",Delinquente Delicado (1957)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Delinquente.Delicado.(1957).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/yp2AqBOBhtF1Pq1fd50of04oskO.jpg" group-title="FILMES - Coleção Jerry Lewis",Morrendo de Medo (1953)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Morrendo.de.Medo.(1953).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/gNmG2ciOtxPmBXJNZmCbzxPT4Hg.jpg" group-title="FILMES - Coleção Jerry Lewis",O Bagunceiro Arrumadinho (1964)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Bagunceiro.Arrumadinho.(1964).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/t33vQHg7hqtxtbCmthsYpVyIu8z.jpg" group-title="FILMES - Coleção Jerry Lewis",O Bamba do Regimento (1957)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Bamba.do.Regimento.(1957).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/xmPgAUbvEcdlB7KfvInk1FNXCMD.jpg" group-title="FILMES - Coleção Jerry Lewis",O Fofoqueiro (1967)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Fofoqueiro.(1967).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/jLtx30tHvslCuci0MC2ND7PNSBe.jpg" group-title="FILMES - Coleção Jerry Lewis",O Meninão (1955)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Meninao.(1955).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/mRDVZ9ZWCakjDa8luUxa04cIHvv.jpg" group-title="FILMES - Coleção Jerry Lewis",O Mocinho Encrenqueiro (1961)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Mocinho.Encrenqueiro.(1961).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/rjd7ruysWcOiEskGy0h9hnyKNTv.jpg" group-title="FILMES - Coleção Jerry Lewis",O Otario (1964)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Otario.(1964).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/zDsCV3BpZnfkQADdFlWCuKPQpSn.jpg" group-title="FILMES - Coleção Jerry Lewis",O Rei do Circo (1954)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Rei.do.Circo.(1954).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/2ImRuh0jikgcISBSOHsFBFgbHNb.jpg" group-title="FILMES - Coleção Jerry Lewis",O Rei da comedia (1982)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Rei.da.comedia.(1982).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/oM09jCTGXVHxstRG6xIflRHp8Gk.jpg" group-title="FILMES - Coleção Jerry Lewis",O Rei Do Laço (1956)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Rei.Do.Laso.(1956).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/AkbD04yIkYo1sudzLHVlaZ9lAMe.jpg" group-title="FILMES - Coleção Jerry Lewis",O Rei dos Mágicos (1958)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Rei.dos.Magicos.(1958).mp4
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/wgFJlGH4xz5RtXFihndDYz3faeJ.jpg" group-title="FILMES - Coleção Jerry Lewis",O Terror das Mulheres (1961)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/O.Terror.das.Mulheres.(1961).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/dhrDOmrWeSe3IQEVasWWMY8HpwI.jpg" group-title="FILMES - Coleção Jerry Lewis",Ou Vai ou Racha (1956)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Ou.Vai.ou.Racha.(1956).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/9s3zaI2B98vnG68yDFC89vkWz8e.jpg" group-title="FILMES - Coleção Jerry Lewis",Rabo de Foguete (1960)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Rabo.de.Foguete.(1960).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/fZcd5xPryuMltJB66K0lFZNyc0F.jpg" group-title="FILMES - Coleção Jerry Lewis",Rir é Viver (1995)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Rir.e.Viver.(1995).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/G98ez7ryJt7F64O1vqyHBySUgQ.jpg" group-title="FILMES - Coleção Jerry Lewis",Sofrendo da Bola (1953)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Sofrendo.da.Bola.(1953).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/x9cKsPi1pcwoZj2NJoa5295UWWt.jpg" group-title="FILMES - Coleção Jerry Lewis",Três em um Sofá (1966)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Tres.em.um.Sofa.(1966).mkv
#EXTINF:-1 tvg-logo="https://image.tmdb.org/t/p/original/gLCAvmmhEMtgN8oAdxtcGqAKGG9.jpg" group-title="FILMES - Coleção Jerry Lewis",Um Golpe das Arábias (1967)
https://luminart.ls.lsnew.workers.dev/1:/FLMS/4CMD-CL/Jerry.Lewis/Um.Golpe.das.Arabias.(1967).mkv
"""

output_text = reformat_m3u(input_text)
print(output_text)
