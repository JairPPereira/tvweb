# Sua lista de texto
lista_texto = """
04:30   ATP World Tour 500: Final | https://v2.sportsonline.so/channels/pt/sporttv2.php
04:40   MLMC: Portugal | https://v2.sportsonline.so/channels/pt/sporttv4.php
07:15   Utrecht x Ajax | https://v2.sportsonline.so/channels/pt/sporttv1.php
07:30   Roma x Monza | https://v2.sportsonline.so/channels/bra/br4.php
08:00   Lorient x Rennes | https://v2.sportsonline.so/channels/pt/eleven1.php
08:00   DP World Tour: Andalucia Masters - D4 | https://v2.sportsonline.so/channels/pt/sporttv3.php
08:30   Nürnberg x Hertha BSC | https://v2.sportsonline.so/channels/pt/eleven2.php
09:00   Las Palmas x Rayo Vallecano | https://v2.sportsonline.so/channels/pt/eleven3.php
10:00   Salernitana x Cagliari | https://v2.sportsonline.so/channels/pt/sporttv2.php
10:00   Lille x Brest | https://v2.sportsonline.so/channels/pt/eleven1.php
10:15   Hearts x Celtic | https://v2.sportsonline.so/channels/pt/sporttv1.php
10:30   Köln x Borussia M'gladbach | https://v2.sportsonline.so/channels/pt/eleven2.php
11:15   Girona x Almería | https://v2.sportsonline.so/channels/pt/eleven3.php
12:05   Monaco x Metz | https://v2.sportsonline.so/channels/bra/br3.php
12:30   Aston Villa x West Ham United | https://v2.sportsonline.so/channels/bra/br4.php
12:30   Heidenheim x Augsburg | https://v2.sportsonline.so/channels/pt/eleven2.php
13:00   Atalanta x Genoa | https://v2.sportsonline.so/channels/bra/br5.php
13:00   Fenerbahçe x Hatayspor | https://v2.sportsonline.so/channels/pt/sporttv2.php
13:30   Villarreal x Deportivo Alavés | https://v2.sportsonline.so/channels/pt/eleven3.php
15:30   NASCAR Cup Series: Homestead - Miami Speedway | https://v2.sportsonline.so/channels/pt/sporttv5.php
15:45   Olympique Lyonnais x Clermont | https://v2.sportsonline.so/channels/pt/eleven2.php
15:45   Milan x Juventus | https://v2.sportsonline.so/channels/bra/br5.php
16:00   Barcelona x Athletic Club | https://v2.sportsonline.so/channels/bra/br4.php
16:00   UD Oliveirense x Boavista | https://v2.sportsonline.so/channels/pt/sporttv1.php
16:00   Flamengo x Vasco da Gama | https://v2.sportsonline.so/channels/bra/br1.php
16:00   Atlético Mineiro x Cruzeiro | https://v2.sportsonline.so/channels/bra/br2.php
16:00   Internacional x Santos | https://v2.sportsonline.so/channels/bra/br3.php
16:00   F1: USA Grand Prix | https://v2.sportsonline.so/channels/pt/sporttv4.php
17:25   NFL: Los Angeles Chargers @ Kansas City Chiefs | https://v2.sportsonline.so/channels/pt/eleven3.php
18:00   Avaí x Ceará | https://v2.sportsonline.so/channels/bra/br4.php
18:00   Sport x Chapecoense | https://v2.sportsonline.so/channels/bra/br5.php
18:30   Corinthians x América Mineiro | https://v2.sportsonline.so/channels/bra/br1.php
18:30   Coritiba x Palmeiras | https://v2.sportsonline.so/channels/bra/br2.php
18:30   RB Bragantino x Fluminense | https://v2.sportsonline.so/channels/bra/br3.php
21:20   NFL: Miami Dolphins @ Philadelphia Eagles | https://v2.sportsonline.so/channels/bra/br5.php
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
