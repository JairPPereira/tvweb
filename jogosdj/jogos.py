# Sua lista de texto
lista_texto = """
13:55   EuroCup Basketball: Besiktas x Prometey | https://sportsonline.so/channels/pt/sporttv3.php
15:45   NBA Pre-Season: Real Madrid @ Dallas Mavericks | https://sportsonline.so/channels/pt/sporttv1.php
19:00   Corinthians U17 x Palmeiras U17 | https://sportsonline.so/channels/bra/br1.php
20:00	Belgrano x Boca Juniors | https://sportsonline.so/channels/bra/br2.php
21:30	ABC x Mirassol | https://sportsonline.so/channels/bra/br1.php
33:00   NHL: Seattle Kraken @ Vegas Golden Knights | https://sportsonline.so/channels/pt/sporttv3.php
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
