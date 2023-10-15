# Sua lista de texto
lista_texto = """
08:00   ATP World Tour 250: Stockholm | https://sportsonline.so/channels/pt/sporttv3.php
09:00   ATP World Tour 250: Antwerp | https://sportsonline.so/channels/pt/sporttv5.php
13:00	Finland x Kazakhstan | https://sportsonline.so/channels/bra/br4.php
13:00	Estonia x Thailand | https://sportsonline.so/channels/bra/br2.php
13:30   Basketball: AEK x MHP Riesen | https://sportsonline.so/channels/pt/sporttv2.php
15:45	England x Italy | https://sportsonline.so/channels/bra/br1.php
15:45	England x Italy | https://sportsonline.so/channels/bra/br3.php
15:45	Northern Ireland x Slovenia | https://sportsonline.so/channels/pt/sporttv2.php
15:45	Lithuania x Hungary | https://sportsonline.so/channels/pt/sporttv5.php
15:45	Serbia x Montenegro | https://sportsonline.so/channels/bra/br4.php
16:00	France x Scotland | https://sportsonline.so/channels/bra/br2.php
18:00	Venezuela x Chile | https://sportsonline.so/channels/bra/br1.php
18:00	Venezuela x Chile | https://sportsonline.so/channels/bra/br3.php
19:30	Paraguay x Bolivia | https://sportsonline.so/channels/bra/br2.php
20:30	Ecuador x Colombia | https://sportsonline.so/channels/pt/sporttv3.php
21:00	Uruguay x Brazil | https://sportsonline.so/channels/bra/br1.php
21:00	Uruguay x Brazil | https://sportsonline.so/channels/bra/br3.php
21:00	Uruguay x Brazil | https://sportsonline.so/channels/bra/br4.php
23:00	Peru x Argentina | https://sportsonline.so/channels/bra/br1.php
23:00	Peru x Argentina | https://sportsonline.so/channels/bra/br3.php
23:00   ATP World Tour 500: Tokyo | https://sportsonline.so/channels/pt/sporttv2.php
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
