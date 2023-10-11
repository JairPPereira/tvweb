# Sua lista de texto
lista_texto = """
15:45	Wales x Gibraltar | https://sportsonline.so/channels/bra/br3.php
15:45   Handball: Kiel x Kielce | https://sportsonline.so/channels/pt/sporttv3.php
16:30   Basketball: Benfica x Oliveirense | https://sportsonline.so/channels/pt/btv.php
17:00	Atlético Nacional W x Palmeiras W | https://sportsonline.so/channels/bra/br2.php
19:00   Flamengo U17 x São Paulo U17 | https://sportsonline.so/channels/bra/br1.php
19:30	Universidad De Chile W x Santa Fe W | https://sportsonline.so/channels/bra/br2.php
20:00   NHL: Toronto Maple Leaf @ Montreal Canadiens | https://sportsonline.so/channels/pt/sporttv1.php
21:30   Vila Nova x Botafogo SP | https://sportsonline.so/channels/bra/br1.php
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
