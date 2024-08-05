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
#EXTINF:-1 tvg-logo="https://bit.ly/3i9HG5w" group-title="FILMES - GUERRA",Espada De Deus A Ultima Cruzada 2020
https://content.jwplatform.com/videos/syjhkuW5-EiPiTsLT.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="O Melhor Dos Trapalhões",Os Trapalhões 1
https://content.jwplatform.com/videos/09MQxdyj-jWmiXxhn.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="O Melhor Dos Trapalhões",Os Trapalhões 2
https://content.jwplatform.com/videos/mnyW61FA-jWmiXxhn.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="O Melhor Dos Trapalhões",Os Trapalhões 3
https://content.jwplatform.com/videos/sArPuIum-jWmiXxhn.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="O Melhor Dos Trapalhões",Os Trapalhões 4
https://content.jwplatform.com/videos/B08kintI-jWmiXxhn.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Footloose Ritmo Louco 1984
https://content.jwplatform.com/videos/ROPct20p-F3o6hEvP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Ela Dança Eu Danço 1 2006
https://content.jwplatform.com/videos/TStpJb7b-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Ela Dança Eu Danço 2 2007
https://content.jwplatform.com/videos/nvNM5lVI-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Ela Dança Eu Danço 3 2010
https://content.jwplatform.com/videos/jyMMxfJ5-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Ela Dança Eu Danço 4 2012
https://content.jwplatform.com/videos/9JeZfZJV-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Ela Dança Eu Danço 5 2015
https://content.jwplatform.com/videos/ea4c6gIB-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Ela Danca Eu Danco 6 2019
https://content.jwplatform.com/videos/qwrfT9hj-UQsvBE6L.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Entre Nesta Dança 1
https://content.jwplatform.com/videos/ZXJuALl9-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Footloose Ritmo Contagiante 2011
https://content.jwplatform.com/videos/lD80ZwWG-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Honey 1 No Ritmo Dos Seus Sonhos 2003
https://content.jwplatform.com/videos/UeaICxpc-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Honey 2 No Ritmo Dos Sonhos 2011
https://content.jwplatform.com/videos/BQ5Ts2PA-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="DANCA",Honey 3 No Ritmo Do Amor 2016
https://content.jwplatform.com/videos/PCzPpD5J-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - RELIGIOSOS",Mais Que Vencedores 2019
https://content.jwplatform.com/videos/5ZqgiVZY-7P6b20I9.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - RELIGIOSOS",Noé 2014
https://content.jwplatform.com/videos/dlwfgMuS-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - RELIGIOSOS",Uma Questão De Fé 2018
https://content.jwplatform.com/videos/azlk86dn-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - RELIGIOSOS",Um Olhar Do Paraíso 2009
https://content.jwplatform.com/videos/h7bxgbwU-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - RELIGIOSOS",O Peregrino 2008
https://content.jwplatform.com/videos/udRGHeW8-PZV8T1Op.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - RELIGIOSOS",Desafiando Gigantes 2006
https://content.jwplatform.com/videos/aftYk46W-cYl17PlW.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - RELIGIOSOS",Corajosos 2011
https://content.jwplatform.com/videos/tkC3mNZQ-cYl17PlW.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",Rei Urso Polar 1991
https://cdn.jwplayer.com/videos/GbsTNcWO-FwFnERHM.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",De Volta Para O Futuro 1 1985
https://content.jwplatform.com/videos/0m4Q4BLY-F3o6hEvP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",De Volta Para O Futuro 2 1989
https://content.jwplatform.com/videos/oRHmk2LP-F3o6hEvP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",De Volta Para O Futuro 3 1990
https://content.jwplatform.com/videos/22UbOzDj-F3o6hEvP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",Edward MAos De Tesoura 1990
https://content.jwplatform.com/videos/cYsQCZOp-E2vY9Ubx.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",O Rapto do Menino Dourado 1986
https://content.jwplatform.com/videos/UFLshbYx-QUlYAaNZ.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",Um Tira No Jardim Da Infancia 1 1990
https://content.jwplatform.com/videos/nZSgvboA-EiPiTsLT.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",Um Tira no Jardim de Infancia 2 2016
https://content.jwplatform.com/videos/2dtaU37B-2wXnJILV.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",Um Príncipe em Nova York 1988
https://content.jwplatform.com/videos/65kCBflu-2wXnJILV.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",Curtindo A Vida Adoidado 1986
https://content.jwplatform.com/videos/y4Ohwu5i-oXtn2fcS.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",O Natal De Dennis O Pimentinha 2007
https://content.jwplatform.com/videos/wTXUah9U-bWtniFnP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",Bom Dia Vietnã 1987
https://content.jwplatform.com/videos/1UdKUjVW-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",A Família Addams 1 1991
https://content.jwplatform.com/videos/BGlqxyCe-bWtniFnP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",A Família Addams 2 1993
https://content.jwplatform.com/videos/8Mql3DW2-bWtniFnP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/classicos.png" group-title="CLASSICO",O Filho De Rambow 2007
https://content.jwplatform.com/videos/v6izPkza-bWtniFnP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="Filmes dog",Um Amor De Filhote 2018
https://content.jwplatform.com/videos/GSPbUB9a-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="Filmes dog",Max 2015
https://content.jwplatform.com/videos/MOn2xTt1-XP4H4gai.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="Filmes dog",Spot Um Cão Da Pesada 2001
https://content.jwplatform.com/videos/TlYNlBmS-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="Filmes dog",Lassie 2015
https://content.jwplatform.com/videos/oNJHg2WD-gLkW43OB.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3wCJIQU" group-title="FILMES - FAROESTE",A Verdadeira Historia De Ned Kelly 2020
https://content.jwplatform.com/videos/VOZ25B1H-g3YmY7OO.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",A Balada Do Pistoleiro 1995
https://content.jwplatform.com/videos/BsjCSEd5-UQsvBE6L.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",8 Segundos 1994
https://content.jwplatform.com/videos/Jhue72Y7-UQsvBE6L.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Era uma vez no méxico 2003
https://content.jwplatform.com/videos/UHbv7rcx-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Django O Bastardo 1969
https://content.jwplatform.com/videos/ujeoZweI-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Mar De Fogo 2004
https://content.jwplatform.com/videos/JAkMxyfj-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Hatfields & Mccoys Parte 1 2012
https://content.jwplatform.com/videos/HJyTpLEN-1M9prxLc.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Hatfields & Mccoys Parte 2 2013
https://content.jwplatform.com/videos/jcZ6z4hy-1M9prxLc.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Hatfields & Mccoys Parte 3 2013
https://content.jwplatform.com/videos/mHT52LSg-1M9prxLc.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Inferno No Faroeste 2013
https://content.jwplatform.com/videos/doo4qNHV-CQCt9Pxj.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",da lhe duro trinity 1972
https://content.jwplatform.com/videos/lqoif9xc-TTKdHX4c.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Big Kill A Cidade Do Medo 2019
https://content.jwplatform.com/videos/7KJv279e-tmrR3xm7.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="FILMES - FAROESTE",Jonah hex 2010
https://content.jwplatform.com/videos/0YsR8Tdu-XP4H4gai.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="EPCO",O Homem Da Máscara De Ferro 1998
https://content.jwplatform.com/videos/Rlt0lZLe-BG6rhfSt.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="EPCO",Redbad A Invasao Dos Francos 2018
https://content.jwplatform.com/videos/iTj3ETbq-jG69wtrL.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="EPCO",Deuses Do Egito 2016
https://content.jwplatform.com/videos/3PUDLi5W-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="EPCO",Rei Arthur A Lenda Da Espada 2017
https://content.jwplatform.com/videos/RRcp4jOb-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="EPCO",Hercules 2013
https://content.jwplatform.com/videos/xjTvy17s-Gml01jdk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="EPCO",47 Ronins 2013
https://content.jwplatform.com/videos/t3Vx13gg-cYl17PlW.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="jackie chan",Volta Ao Mundo Em 80 Dias 2004
https://content.jwplatform.com/videos/jGSW9PiC-GOJLNWjk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="jackie chan",O Mestre Invencível 2 1994
https://content.jwplatform.com/videos/eSEeQrMD-GOJLNWjk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/filmes.png" group-title="jackie chan",O Medalhão 2003
https://content.jwplatform.com/videos/0NMj8K9q-s8dD2pdu.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3ehNkSe" group-title="LUTA",Submissao 2019
https://content.jwplatform.com/videos/6ySfryml-IOzF5le7.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Bodyguard Resgate De Risco 2017
https://content.jwplatform.com/videos/y16Wo98I-gLkW43OB.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Kung Fu Mortal 2015
https://content.jwplatform.com/videos/TCwrgT8s-gLkW43OB.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",A Hora Do Rush 1 1998
https://content.jwplatform.com/videos/LaiSfOBI-su2i4fvY.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",A Hora Do Rush 2 2001
https://content.jwplatform.com/videos/htZAsaEs-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",A Hora Do Rush 3 2007
https://content.jwplatform.com/videos/cbA437dR-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Massacre No Bairro Japones 1991
https://content.jwplatform.com/videos/1dyy2rPr-mZ0sNlzq.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",O Grande Mestre 3 2016
https://content.jwplatform.com/videos/V4vi3mL1-5tdF2dfr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Dragonball Evolução 2009
https://content.jwplatform.com/videos/hI5Bqwlw-OVIkRnb1.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Mortal Kombat 1995
https://content.jwplatform.com/videos/Z0HHAJhS-GOJLNWjk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Mortal Kombat Aniquilação 1997
https://content.jwplatform.com/videos/zyYkENiU-GOJLNWjk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",O Rei Dos Kickboxers 1990
https://content.jwplatform.com/videos/LKIIEkpW-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Karate Kid 1 1984
https://content.jwplatform.com/videos/tCWlMSaU-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Karatê Kid 2 1986
https://content.jwplatform.com/videos/weH3pru8-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Karatê Kid 3 1989
https://content.jwplatform.com/videos/0cC9PWNm-5tdF2dfr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="LUTA",Karate Kid 2010
https://content.jwplatform.com/videos/hsR2QXVI-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3BmpAbx" group-title="Van Damme",Osso Duro 2015
https://content.jwplatform.com/videos/5XTQL18c-vDkfZDL4.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3D6ol1a" group-title="Van Damme",Duplo Impacto 1991
https://content.jwplatform.com/videos/sTvpgnRx-NfA09Gih.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3QrlIKx" group-title="Van Damme",Cyborg O Dragão Do Futuro 1989
https://content.jwplatform.com/videos/xNcFmD3d-NfA09Gih.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3TUhpKz" group-title="Van Damme",Agente Biologico 2002
https://content.jwplatform.com/videos/4sXeVrmu-swIproSA.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3D5xFCw" group-title="Van Damme",Desafio Mortal 1996
https://content.jwplatform.com/videos/UJIIxzI5-wiYi4aRp.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",Nosso Amor 2020
https://content.jwplatform.com/videos/KB6GIVZy-q6DicNGI.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",O Diario De Bridget Jones 2001
https://content.jwplatform.com/videos/bao65jC1-jG69wtrL.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",Bridget Jones No Limite Da Razao 2004
https://content.jwplatform.com/videos/m4bL3ojq-yNtZ8ayZ.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",O Bebê De Bridget Jones 2016
https://content.jwplatform.com/videos/fC5rIHEt-jG69wtrL.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",O Amor Nao Tira Ferias 2006
https://content.jwplatform.com/videos/7v7iZdcj-jG69wtrL.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",Casa Comigo 2010
https://content.jwplatform.com/videos/ER05SJ7O-yNtZ8ayZ.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",Apenas Amigos 2006
https://content.jwplatform.com/videos/YMQ7GYIY-jG69wtrL.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",Uma Linda Mulher 1990
https://content.jwplatform.com/videos/VtLZw3xu-NfA09Gih.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",Paixão Sem Limites 2010
https://content.jwplatform.com/videos/8dQMgMYT-NfA09Gih.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://lhmtv.tech/logo/bonus.png" group-title="FILMES - DRAMA",Amor Sem Limites 2011
https://content.jwplatform.com/videos/x3nUF75U-PZCB13Wn.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3efStdo" group-title="FILMES - DRAMA",Ray 2004
https://cdn.jwplayer.com/videos/c7rtidBH-ZlnU31uA.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3r5Qfmd" group-title="FILMES - DRAMA",Safety 2020
https://content.jwplatform.com/videos/ZQviRElz-E2vY9Ubx.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3wBrQpB" group-title="FILMES - DRAMA",Uma Invenção De Natal 2020
https://content.jwplatform.com/videos/Keo6KWIz-g3YmY7OO.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3rfxyfW" group-title="FILMES - DRAMA",365 Days 2020
https://content.jwplatform.com/videos/UXEK79OF-EiPiTsLT.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Meu Amigo Robo 2020
https://content.jwplatform.com/videos/MmTGS8rL-QUlYAaNZ.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",A Lenda De Thor 2020
https://content.jwplatform.com/videos/x7l6HpXZ-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",O Invencível 2006
https://content.jwplatform.com/videos/lmo9BeAf-asoh1qjX.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Maria E Joao O Conto Das Bruxas 2020
https://content.jwplatform.com/videos/haeBwthW-EEpxgbJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",O Milagre Na Cela 7 2019
https://content.jwplatform.com/videos/aFnWYBtw-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",A 5ª Onda 2016
https://content.jwplatform.com/videos/iUCxwy1v-NSkcn7Cl.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",O Grande Truque 2018
https://content.jwplatform.com/videos/8QBTnOR6-NSkcn7Cl.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Ritmo De Um Sonho 2005
https://content.jwplatform.com/videos/gfUqxM8S-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Uma Familia De Dois 2016
https://content.jwplatform.com/videos/IdgYDpcT-yNtZ8ayZ.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Scooby Doo O Misterio Começa 2009
https://content.jwplatform.com/videos/esojC7Z8-LElI8svP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Sierra Burgess é um perdedor 2018
https://content.jwplatform.com/videos/cZoeha57-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",A Nova Cinderela 2011
https://content.jwplatform.com/videos/iqgwEuH3-TTKdHX4c.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",O Diabo Veste Prada 2006
https://content.jwplatform.com/videos/evJG6mJO-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Emma 2020
https://content.jwplatform.com/videos/xdARcwW9-jWmiXxhn.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Quase 18 2017
https://content.jwplatform.com/videos/Thq75987-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",Para Todos Os Garotos Que Ja Amei 2018
https://content.jwplatform.com/videos/SkHAesFh-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",A Nova Cinderela 2004
https://content.jwplatform.com/videos/cY0Nofd3-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="FILMES - DRAMA",A Garota Perfeita 2018
https://content.jwplatform.com/videos/fobGoksq-7qlVbwrC.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Dragões A Origem Das Corridas De Dragão 2014
https://cdn.jwplayer.com/videos/Ji4es067-zCTAkQjr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Como Treinar O Seu Dragão 1 2010
https://cdn.jwplayer.com/videos/w0sHsjtE-zCTAkQjr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Como Treinar O Seu Dragão 2 2014
https://cdn.jwplayer.com/videos/LfxG3Xcl-zCTAkQjr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Hotel Transilvânia 1 2012
https://cdn.jwplayer.com/videos/R3zEVjWj-zCTAkQjr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Hotel Transylvania 2 2015
https://cdn.jwplayer.com/videos/PCpseY3M-zCTAkQjr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Meu Malvado Favorito 1 2010
https://content.jwplatform.com/videos/ElqEszqw-NfA09Gih.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Meu Malvado Favorito 3 2017
https://cdn.jwplayer.com/videos/Mmeo3ekp-zCTAkQjr.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3hIexjb" group-title="DESENHO",Vombate Ao Combate 2020
https://content.jwplatform.com/videos/pqbi5pjR-IOzF5le7.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3xDeF97" group-title="DESENHO",Lego Star Wars Especial De Festas 2020
https://content.jwplatform.com/videos/7oH7qSom-IOzF5le7.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3kf7C2r" group-title="DESENHO",Era Uma Vez Um Boneco De Neve 2020
https://content.jwplatform.com/videos/vb3KnloA-IOzF5le7.mp4?JPFILMES
#EXTINF:-1 tvg-logo="https://bit.ly/3i9erQf" group-title="DESENHO",Bob Esponja O Incrivel Resgate 2020
https://content.jwplatform.com/videos/Xx8vb48C-EiPiTsLT.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 1 1988
https://content.jwplatform.com/videos/NJqG7YQf-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 2 1994
https://content.jwplatform.com/videos/jbxYnOkV-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 3 1995
https://content.jwplatform.com/videos/hgn7YJUy-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 4 1996
https://content.jwplatform.com/videos/ahAqpzl2-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 5 1997
https://content.jwplatform.com/videos/Sryp16uq-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 6 1998
https://content.jwplatform.com/videos/SJxMUHC3-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 7 2000
https://content.jwplatform.com/videos/9D3KPOK2-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 8 2001
https://content.jwplatform.com/videos/d6x3GeBw-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 9 2002
https://content.jwplatform.com/videos/hjxd9L1M-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 10 2003
https://content.jwplatform.com/videos/Css8Ddjx-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 11 2005
https://content.jwplatform.com/videos/6eD2rzGU-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 12 2006
https://content.jwplatform.com/videos/LBTpfByp-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Em Busca Do Vale Encantado 13 2007
https://content.jwplatform.com/videos/nenwVTyM-bFOPvu3e.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Incríveis 1 2004
https://content.jwplatform.com/videos/LND8mTTJ-XBx3ClyT.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Incríveis 2 2018
https://content.jwplatform.com/videos/pYjPBZTl-XBx3ClyT.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Exterminador Cavaleiros E Dragoes 2020
https://content.jwplatform.com/videos/fbuHg8PQ-vwWkUh9I.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Um Lobo Em Pele De Cordeiro 2 2020
https://content.jwplatform.com/videos/guhUtr3G-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Sargento Stubby 2018
https://content.jwplatform.com/videos/CDAXMaVL-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Tina E Teo A Pedra Encantada 2019
https://content.jwplatform.com/videos/fInbc9kl-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Pets Unidos 2020
https://content.jwplatform.com/videos/6LvvodA6-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",O Heroi Cuco 2019
https://content.jwplatform.com/videos/JL2kLfST-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Irmaos Sisters 2018
https://content.jwplatform.com/videos/tneYp1Y0-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Mortal Kombat A Vinganca De Scorpion 2020
https://content.jwplatform.com/videos/vGsVHVoT-vwWkUh9I.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Marnie E Os Amigos 2019
https://content.jwplatform.com/videos/NA48FNfh-1n7nscrk.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Scooby Doo Ilha Dos Zumbis 1998
https://content.jwplatform.com/videos/nFs3KznO-3FTJ2dtp.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Scooby Doo De Volta A Ilha Dos Zumbis 2019
https://content.jwplatform.com/videos/gEkqwqWx-3FTJ2dtp.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Devil May Cry
https://content.jwplatform.com/videos/e8IDTSCx-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Art Of Fighter O Filme 1993
https://content.jwplatform.com/videos/kW1hmShl-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Kubo E As Cordas Mágicas 2017
https://content.jwplatform.com/videos/sY0VStbl-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Moana 2017
https://content.jwplatform.com/videos/n1lTM0hb-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",O Reino Gelado 1 2012
https://content.jwplatform.com/videos/VSssnRVK-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",O Reino Gelado 2 2016
https://content.jwplatform.com/videos/8amwom0T-haVWzqYQ.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",O Reino Gelado 3 2017
https://content.jwplatform.com/videos/rzVUVz6d-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Smurfs 1 2011
https://content.jwplatform.com/videos/fKlUdlFI-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Smurfs 2 2013
https://content.jwplatform.com/videos/deR5RBGX-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Smurfs 3 2017
https://content.jwplatform.com/videos/vXEEmgbi-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Kingsglaive Final Fantasy Xv 2016
https://content.jwplatform.com/videos/qNpSQi7e-xljqIFJg.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Fatal Fury 1 1992
https://content.jwplatform.com/videos/fzjdwItO-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Fatal Fury 2 1993
https://content.jwplatform.com/videos/U0xbWkSH-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Fatal Fury 3 1994
https://content.jwplatform.com/videos/gtd9LOWj-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Street Fighter 2 O Filme 1996
https://content.jwplatform.com/videos/AQukNTAB-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Samurai X Filme 1997
https://content.jwplatform.com/videos/KaMoZfra-haVWzqYQ.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",The King Of Fighters
https://content.jwplatform.com/videos/iJowquqN-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Mulher Maravilha 2019
https://content.jwplatform.com/videos/KRz8sRUF-QZ4M1d3x.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Mulher Maravilha 2009
https://content.jwplatform.com/videos/46atClYT-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça Vs Jovens Titãs 2016
https://content.jwplatform.com/videos/B3OslnNA-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça Crise Em Duas Terras 2010
https://content.jwplatform.com/videos/tRNsaXnV-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça A Legião Do Mal 2012
https://content.jwplatform.com/videos/kjIxLLE8-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça Sombria 2017
https://content.jwplatform.com/videos/t4ARbdEw-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça Guerra 2014
https://content.jwplatform.com/videos/16CBzsVb-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça A Nova Fronteira 2008
https://content.jwplatform.com/videos/meo2VnKl-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justica Deuses E Monstros 2015
https://content.jwplatform.com/videos/OqfJFS3t-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça Trono De Atlântida 2015
https://content.jwplatform.com/videos/od2i0SGM-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça Armadilha Do Tempo 2014
https://content.jwplatform.com/videos/HysZL0vx-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Lanterna Verde Primeiro Voo 2009
https://content.jwplatform.com/videos/nAE6mnEG-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Laterna Verde Cavaleiros Esmeralda 2011
https://content.jwplatform.com/videos/IFct6Iet-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Liga Da Justiça Ponto De Ignição 2013
https://content.jwplatform.com/videos/3XqLodgl-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Jovens Titãs O Contrato De Judas 2017
https://content.jwplatform.com/videos/74Nxwfvt-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Esquadrao Suicida Acerto De Contas 2018
https://content.jwplatform.com/videos/nxjx7E6r-nqYyIEVP.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Coragem O Cão Covarde
https://content.jwplatform.com/videos/LHJsEIpX-R5JUFnZ2.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Tom E Jeeey Vol.1
https://content.jwplatform.com/videos/Iyf49lH4-SwStdQGY.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Tom E Jeeey Vol.2
https://content.jwplatform.com/videos/Ql9AMIzH-NtbRVC3C.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Monica Vol.1
https://content.jwplatform.com/videos/Xsy7wGae-NtbRVC3C.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Monica Vol.2
https://content.jwplatform.com/videos/DF2giCe5-NtbRVC3C.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Jumanji Vol.4
https://content.jwplatform.com/videos/d97ARbFG-vaBozUXR.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Pica Pau Vol.2
https://content.jwplatform.com/videos/NckJRwz9-jWmiXxhn.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Pica Pau Vol.5
https://content.jwplatform.com/videos/zhLdzji1-vaBozUXR.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Simpsons Vol.1
https://content.jwplatform.com/videos/H5mcBMpp-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Simpsons Vol.2
https://content.jwplatform.com/videos/Uf2LH44a-su2i4fvY.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Simpsons Vol.3
https://content.jwplatform.com/videos/xpAERgAc-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Os Simpsons Vol.4
https://content.jwplatform.com/videos/K3Q0jMH2-QOmQDbYo.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Dolls 2019
https://content.jwplatform.com/videos/FeKcR2mL-LFARyhm1.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Pets 2 2019
https://content.jwplatform.com/videos/ZSbZkBCl-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",O Parque Dos Sonhos 2019
https://content.jwplatform.com/videos/aSI50qO2-M33kuJwh.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Patrulha Canina Super Filhotes 2019
https://content.jwplatform.com/videos/Gig5eDFg-YoIU0Miv.mp4?JPFILMES
#EXTINF:-1 tvg-logo="http://stream.lhmtv.cf/logo/filmes.png" group-title="DESENHO",Minions 2015
https://content.jwplatform.com/videos/OIijLqw6-M33kuJwh.mp4?JPFILMES
"""

output_text = reformat_m3u(input_text)
print(output_text)
