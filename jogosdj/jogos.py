# Sua lista de texto
lista_texto = """
09:00	RB Leipzig U19 x Manchester City U19 | https://sportsonline.so/channels/pt/eleven1.php
11:00	Newcastle United U19 x PSG U19 | https://sportsonline.so/channels/pt/eleven3.php
11:00	Porto U19 x Barcelona U19 | https://sportsonline.so/channels/pt/eleven1.php
11:00	Famalicão U19 x Midtjylland U19 | https://sportsonline.so/channels/pt/eleven2.php
13:45	Atlético Madrid x Feyenoord | https://sportsonline.so/channels/bra/br1.php
13:45	Antwerp x Shakhtar Donetsk | https://sportsonline.so/channels/bra/br2.php
16:00	RB Leipzig x Manchester City | https://sportsonline.so/channels/bra/br2.php
16:00	Newcastle United x PSG | https://sportsonline.so/channels/bra/br4.php
16:00	Borussia Dortmund x Milan | https://sportsonline.so/channels/bra/br3.php
16:00	Porto x Barcelona | https://sportsonline.so/channels/bra/br1.php
16:00	Celtic x Lazio | https://sportsonline.so/channels/pt/sporttv5.php
16:00	Crvena Zvezda x Young Boys | https://sportsonline.so/channels/pt/sporttv3.php
19:00	Defensa y Justicia x LDU Quito | https://sportsonline.so/channels/pt/sporttv1.php
21:30	Internacional x Fluminense | https://sportsonline.so/channels/bra/br1.php
21:30	Internacional x Fluminense | https://sportsonline.so/channels/bra/br2.php

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
