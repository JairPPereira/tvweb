# Sua lista de texto
lista_texto = """
14:30   Real Zaragoza x Huesca | https://v2.sportsonline.so/channels/pt/eleven2.php
16:45   Germany x Turkey | https://v2.sportsonline.so/channels/pt/sporttv5.php
16:45   Netherlands x Ireland Republic | https://v2.sportsonline.so/channels/pt/sporttv2.php
16:45   France x Gibraltar | https://v2.sportsonline.so/channels/pt/sporttv1.php
16:45   Switzerland x Kosovo | https://v2.sportsonline.so/channels/pt/sporttv4.php 
17:00   Vitória x Sport Recife | https://v2.sportsonline.so/channels/bra/br1.php
17:00   Criciúma x Botafogo SP | https://v2.sportsonline.so/channels/bra/br2.php
17:00   Juventude x Ponte Preta | https://v2.sportsonline.so/channels/bra/br3.php
17:00   Mirassol x Atlético Goianiense | https://v2.sportsonline.so/channels/bra/br4.php
17:00   ATP World Tour Finals | https://v2.sportsonline.so/channels/pt/sporttv3.php
18:30   Fortaleza x Cruzeiro | https://v2.sportsonline.so/channels/bra/br5.php
19:00   UFC Fight Night: Brendan Allen vs Paul Craig | https://v2.sportsonline.so/channels/bra/br3.php
19:00   WRC: Japan - Super Special 17 | https://v2.sportsonline.so/channels/pt/sporttv4.php
20:00   WRC: Japan - Super Special 18 & 19 | https://v2.sportsonline.so/channels/pt/sporttv4.php
22:00   NBA: Miami Heat @ Chicago Bulls | https://v2.sportsonline.so/channels/pt/sporttv3.php 
23:00   Boxing: Jonathan Lopez x Edward Ceballos | https://v2.sportsonline.so/channels/bra/br2.php
02:55   F1: Las Vegas Grand Prix | https://v2.sportsonline.so/channels/bra/br5.php
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
