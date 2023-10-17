# Sua lista de texto
lista_texto = """
09:00   ATP World Tour 250: Stockholm | https://sportsonline.so/channels/pt/sporttv3.php
09:00   ATP World Tour 250: Antwerp | https://sportsonline.so/channels/pt/sporttv5.php
13:00   Euro Cup Basketball: Prometey x London Lions | https://sportsonline.so/channels/pt/sporttv1.php
13:30	Sparta Praha W x Eintracht Frankfurt W | https://sportsonline.so/channels/hd/hd11.php
15:00   Euro League Basketball: Red Star x Monaco | https://sportsonline.so/channels/pt/sporttv1.php
15:30	Benfica W x Apollon Limassol W | https://sportsonline.so/channels/pt/btv.php
15:30	Benfica W x Apollon Limassol W | https://sportsonline.so/channels/pt/eleven1.php
15:45   Basketball: PSG x Aalborg | https://sportsonline.so/channels/pt/sporttv2.php
17:00	Cerro Largo x La Luz | https://sportsonline.so/channels/hd/hd9.php
19:00	Grêmio x Athletico-PR | https://sportsonline.so/channels/bra/br1.php
20:00	América Mineiro x Botafogo | https://sportsonline.so/channels/bra/br2.php
20:00	Coritiba x Cuiabá | https://sportsonline.so/channels/hd/hd11.php
21:00	Inter Miami x Charlotte | https://sportsonline.so/channels/hd/hd2.php
21:30	Vasco da Gama x Fortaleza | https://sportsonline.so/channels/bra/br1.php
21:30	Goiás x São Paulo | https://sportsonline.so/channels/bra/br3.php
21:30	Bahia x Internacional | https://sportsonline.so/channels/bra/br4.php
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
