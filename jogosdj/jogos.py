# Sua lista de texto
lista_texto = """
04:30   ATP World Tour 1000: Shangai | https://sportsonline.so/channels/pt/sporttv2.php
09:00   DP World Tour: Open España - D1 | https://sportsonline.so/channels/pt/sporttv3.php
13:00	Latvia x Armenia | https://sportsonline.so/channels/bra/br4.php
13:00	Georgia x Thailand | https://sportsonline.so/channels/bra/br3.php
14:30   EuroLeague Basketball: Anadolu Efes Istambul x Real Madrid | https://sportsonline.so/channels/pt/sporttv4.php
15:45	Spain x Scotland | https://sportsonline.so/channels/bra/br2.php
15:45	Croatia x Turkey | https://sportsonline.so/channels/bra/br3.php
15:45	Cyprus x Norway | https://sportsonline.so/channels/pt/sporttv2.php 
15:45	Faroe Islands x Poland | https://sportsonline.so/channels/pt/sporttv5.php
16:00   Basketball: Benfica W x Belfius Namur Capitale W | https://sportsonline.so/channels/pt/btv.php 
17:00	Libertad Limpeño W x Corinthians W | https://sportsonline.so/channels/bra/br4.php
17:30	Colombia x Uruguay | https://sportsonline.so/channels/bra/br1.php
19:30	Internacional RS W x Boca Juniors W | https://sportsonline.so/channels/bra/br3.php
21:00	Argentina x Paraguay | https://sportsonline.so/channels/bra/br4.php
21:30	Brazil x Venezuela | https://sportsonline.so/channels/bra/br1.php
21:30	Brazil x Venezuela | https://sportsonline.so/channels/bra/br2.php
21:30	Brazil x Venezuela | https://sportsonline.so/channels/bra/br3.php
22:00   MotoGP: Indonesia FP1 | https://sportsonline.so/channels/pt/sporttv4.php 
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
