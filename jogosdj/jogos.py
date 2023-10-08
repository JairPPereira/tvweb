# Sua lista de texto
lista_texto = """
01:30   ATP World Tour 1000: Shangai | https://sportsonline.so/channels/pt/sporttv2.php
16:00	Villarreal B x Espanyol | https://sportsonline.so/channels/pt/eleven1.php
16:15	AVS x Penafiel | https://sportsonline.so/channels/pt/sporttv1.php
17:00   Cruzeiro U20 x Fluminense U20 | https://sportsonline.so/channels/bra/br1.php
19:30	Corinthians W x Always Ready W | https://sportsonline.so/channels/bra/br3.php
19:30   América de Cali W x Internacional W | https://sportsonline.so/channels/bra/br4.php
20:00	Sport Recife x Ponte Preta | https://sportsonline.so/channels/bra/br1.php
21:20   NFL: Green Bay Packers v Las Vegas Raiders | https://sportsonline.so/channels/bra/br2.php
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
