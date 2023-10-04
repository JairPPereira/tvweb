# Sua lista de texto
lista_texto = """
13:20   Volleyball: Benfica x Fonte Bastardo | https://sportsonline.so/channels/pt/sporttv3.php
13:45	Olympique Marseille x Brighton & Hove Albion | https://sportsonline.so/channels/bra/br4.php
13:45	Freiburg x West Ham United | https://sportsonline.so/channels/bra/br2.php
13:45	AEK Athens x Ajax | https://sportsonline.so/channels/bra/br3.php
13:45	Real Betis x Sparta Praha | https://sportsonline.so/channels/pt/sporttv4.php
13:45	KÍ x Lille | https://sportsonline.so/channels/pt/sporttv5.php
13:45	Sporting CP x Atalanta | https://sportsonline.so/channels/bra/br1.php
14:00	Andorra x Real Zaragoza | https://sportsonline.so/channels/pt/eleven1.php
15:45   Rugby World Cup: New Zealand x Uruguay | https://sportsonline.so/channels/pt/sporttv3.php
16:00	Liverpool x Union Saint-Gilloise | https://sportsonline.so/channels/bra/br1.php
16:00	Roma x Servette | https://sportsonline.so/channels/bra/br4.php
16:00	Villarreal x Rennes | https://sportsonline.so/channels/bra/br3.php
16:00	Molde x Bayer Leverkusen | https://sportsonline.so/channels/bra/br2.php
16:30	Cartagena x Espanyol | https://sportsonline.so/channels/pt/eleven1.php
19:15	Chapecoense x ABC | https://sportsonline.so/channels/bra/br3.php
21:15   NFL: Chicago Bears @ Washington Commanders | https://sportsonline.so/channels/pt/eleven1.php
21:30	Palmeiras x Boca Juniors | https://sportsonline.so/channels/bra/br1.php
21:30	Palmeiras x Boca Juniors | https://sportsonline.so/channels/bra/br2.php
21:30	Palmeiras x Boca Juniors | https://sportsonline.so/channels/bra/br4.php

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
