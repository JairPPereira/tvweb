# Sua lista de texto
lista_texto = """
12:00	Al Nassr x Abha |  https://sportsonline.so/channels/bra/br1.php
13:00   F1: Qatar Qualifying | https://sportsonline.so/channels/bra/br3.php
13:30	Empoli x Udinese | https://sportsonline.so/channels/pt/sporttv2.php
13:30	Kaiserslautern x Hannover 96 | https://sportsonline.so/channels/pt/eleven1.php
15:00	Al Ittihad x Al Ahli | https://sportsonline.so/channels/bra/br3.php
15:30	Borussia M gladbach x Mainz 05 | https://sportsonline.so/channels/bra/br2.php
15:30   Basketball Euro League: Baskonia Vitoria-Gasteiz x Real Madrid | https://sportsonline.so/channels/pt/sporttv5.php
15:45	Lecce x Sassuolo | https://sportsonline.so/channels/pt/sporttv2.php
15:45   Rugby World Cup: France x Italy | https://sportsonline.so/channels/pt/sporttv3.php
16:00	Strasbourg x Nantes | https://sportsonline.so/channels/pt/eleven3.php
16:00	Athletic Club x Almería | https://sportsonline.so/channels/bra/br4.php
16:15	Moreirense x Boavista | https://sportsonline.so/channels/pt/sporttv1.php
17:00	Nacional W x Internacional RS W | https://sportsonline.so/channels/bra/br3.php
19:30	Corinthians W x Colo-colo W | https://sportsonline.so/channels/bra/br3.php
21:00   One Fight Championship | https://sportsonline.so/channels/pt/sporttv3.php
21:30	CRB x Ceará | https://sportsonline.so/channels/bra/br1.php
21:30	Atlético Goianiense x Ituano | https://sportsonline.so/channels/bra/br2.php
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
