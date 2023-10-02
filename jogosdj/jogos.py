# Sua lista de texto
lista_texto = """
07:00	Internazionale U19 x Benfica U19 | https://sportsonline.so/channels/pt/eleven1.php
09:00	Napoli U19 x Real Madrid U19 | https://sportsonline.so/channels/pt/eleven1.php
11:00	PSV U19 x Sevilla U19 | https://sportsonline.so/channels/pt/eleven1.php
13:45	Union Berlin x Sporting Braga | https://sportsonline.so/channels/bra/br1.php
13:45	Salzburg x Real Sociedad | https://sportsonline.so/channels/bra/br2.php
16:00	Napoli x Real Madrid | https://sportsonline.so/channels/bra/br1.php
16:00	Internazionale x Benfica | https://sportsonline.so/channels/bra/br4.php
16:00	Manchester United x Galatasaray | https://sportsonline.so/channels/bra/br3.php
16:00	Lens x Arsenal | https://sportsonline.so/channels/bra/br2.php
19:30	Mirassol x Londrina | https://sportsonline.so/channels/bra/br2.php
21:30	Fortaleza x Corinthians | https://sportsonline.so/channels/bra/br1.php
21:30	Fortaleza x Corinthians | https://sportsonline.so/channels/bra/br3.php
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
