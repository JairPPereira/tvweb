# Sua lista de texto
lista_texto = """
09:00	Cádiz x Girona | https://sportsonline.so/channels/pt/eleven2.php
09:30   F1: Qatar Sprint Shootout | https://sportsonline.so/channels/pt/sporttv4.php
09:45   Rugby World Cup: Wales x Georgia | https://sportsonline.so/channels/pt/sporttv3.php
11:00	Internazionale x Bologna | https://sportsonline.so/channels/bra/br2.php
11:00	Manchester United x Brentford | https://sportsonline.so/channels/bra/br1.php
11:00	Burnley x Chelsea | https://sportsonline.so/channels/bra/br3.php
11:00	Fulham x Sheffield United | https://sportsonline.so/channels/pt/eleven3.php
11:00   Ouriense W x Benfica W | https://sportsonline.so/channels/pt/sporttv5.php
11:15	Real Madrid x Osasuna | https://sportsonline.so/channels/bra/br4.php
11:30	Chaves x Gil Vicente | https://sportsonline.so/channels/pt/sporttv1.php
11:30	Farense x Vizela | https://sportsonline.so/channels/pt/sporttv4.php
12:00	Al Akhdoud x Al Hilal | https://sportsonline.so/channels/bra/br2.php
12:30   Rugby World Cup: England x Samoa | https://sportsonline.so/channels/pt/sporttv3.php
13:00	Juventus x Torino | https://sportsonline.so/channels/bra/br3.php
13:30	Mallorca x Valencia | https://sportsonline.so/channels/pt/eleven2.php
13:30	Crystal Palace x Nottingham Forest | https://sportsonline.so/channels/bra/br4.php 
13:30	Werder Bremen x Hoffenheim | https://sportsonline.so/channels/bra/br1.php
13:30   F1: Qatar Sprint | https://sportsonline.so/channels/pt/sporttv4.php
14:00	Sporting Braga x Rio Ave | https://sportsonline.so/channels/pt/sporttv1.php
14:00	Paços de Ferreira x Vilaverdense | https://sportsonline.so/channels/pt/sporttv5.php
13:30	Tombense x Juventude | https://sportsonline.so/channels/bra/br3.php
13:45	Genoa x Milan | https://sportsonline.so/channels/bra/br4.php
13:45   Rugby World Cup: Ireland x Scotland | https://sportsonline.so/channels/pt/sporttv3.php
16:00	Sevilla x Rayo Vallecano | https://sportsonline.so/channels/pt/eleven1.php
16:00	Reims x Monaco | https://sportsonline.so/channels/pt/eleven2.php
16:00	Goiás x Bahia | https://sportsonline.so/channels/bra/br2.php
16:30	Estoril x Benfica | https://sportsonline.so/channels/pt/sporttv1.php
16:30	San Lorenzo x Newell's Old Boys | https://sportsonline.so/channels/pt/sporttv5.php
16:30   NASCAR Xfinity Series: Drive For The Cure 250 - Charlotte Motor Speedway Roval | https://sportsonline.so/channels/pt/sporttv4.php
18:00	Guarani x Vila Nova | https://sportsonline.so/channels/bra/br3.php
18:00   UFC Fight Night: Prelims | https://sportsonline.so/channels/bra/br4.php
18:30	Vasco da Gama x São Paulo | https://sportsonline.so/channels/bra/br1.php
18:30	Vasco da Gama x São Paulo | https://sportsonline.so/channels/bra/br2.php
20:00   UFC Fight Night: Grant Dawson vs Bobby Green | https://sportsonline.so/channels/bra/br4.php
20:15   Supercars Championship: Bathurst | https://sportsonline.so/channels/pt/sporttv5.php
21:00	Corinthians x Flamengo | https://sportsonline.so/channels/bra/br1.php
21:00	Corinthians x Flamengo | https://sportsonline.so/channels/bra/br2.php
"""

# Divide as linhas em uma lista
linhas = lista_texto.strip().split('\n')

# Loop através das linhas e gere o formato desejado
for linha in linhas:
    partes = linha.split('|')
    horario_equipe = partes[0].strip()
    link = partes[1].strip()

    # Imprima o formato desejado
    print(f'<button style="width: 95%; margin: 10px; font-size: 20px; font-weight: bold;" class="waves-effect waves-light btn-large" onclick="openMovie(\'{horario_equipe}\', \'{link}\')">{horario_equipe}</button>')
