# Sua lista de texto
lista_texto = """
07:00	Mafra x União de Leiria | https://sportsonline.so/channels/pt/sporttv1.php
07:45   Rugby World Cup: Japan x Argentina |https://sportsonline.so/channels/pt/sporttv3.php
08:00	Olympique Marseille x Le Havre | https://sportsonline.so/channels/bra/br1.php
08:00	St. Mirren x Rangers | https://sportsonline.so/channels/pt/sporttv2.php
09:30	Ajax x AZ | https://sportsonline.so/channels/pt/sporttv1.php
10:00	Brighton & Hove Albion x Liverpool | https://sportsonline.so/channels/bra/br4.php
10:00	West Ham United x Newcastle United | https://sportsonline.so/channels/bra/br3.php
10:00	Wolverhampton Wanderers x Aston Villa | https://sportsonline.so/channels/pt/eleven2.php
10:00	Lazio x Atalanta | https://sportsonline.so/channels/pt/sporttv2.php
10:30   NFL: Jaguars @ Bills | https://sportsonline.so/channels/pt/eleven3.php
11:00   Liga Pro Skate: Porto | https://sportsonline.so/channels/pt/sporttv4.php
11:15	Atlético Madrid x Real Sociedad | https://sportsonline.so/channels/bra/br1.php
11:30	Famalicão x Vitória Guimarães | https://sportsonline.so/channels/pt/sporttv1.php
11:30	Casa Pia x Estrela | https://sportsonline.so/channels/pt/sporttv3.php
12:30	Arsenal x Manchester City | https://sportsonline.so/channels/bra/br3.php
12:30	Bayern München x Freiburg | https://sportsonline.so/channels/bra/br2.php
12:30   Rugby World Cup: Tonga x Romania | https://sportsonline.so/channels/pt/sporttv5.php
13:30	Deportivo Alavés x Real Betis | https://sportsonline.so/channels/pt/eleven2.php
14:00	Porto x Portimonense | https://sportsonline.so/channels/pt/sporttv2.php
14:00   Formula 1: Qatar Grand Prix | https://sportsonline.so/channels/bra/br4.php
14:30	Eintracht Frankfurt x Heidenheim | https://sportsonline.so/channels/pt/eleven3.php
15:00   NASCAR Cup Series: Bank of America Roval 400 - Charlotte | https://sportsonline.so/channels/pt/sporttv5.php
15:45	Rennes x PSG | https://sportsonline.so/channels/pt/eleven2.php
16:00   Rugby World Cup: Fiji x Portugal | https://sportsonline.so/channels/pt/sporttv3.php
16:00	Granada x Barcelona | https://sportsonline.so/channels/bra/br4.php
16:00	Internacional x Grêmio | https://sportsonline.so/channels/bra/br1.php
16:00	Palmeiras x Santos | https://sportsonline.so/channels/bra/br2.php
16:00	Fluminense x Botafogo | https://sportsonline.so/channels/bra/br3.php
16:30	Sporting CP x Arouca | https://sportsonline.so/channels/pt/sporttv1.php
17:00   NFL: Eagles @ Rams | https://sportsonline.so/channels/pt/eleven3.php
18:30	Cuiabá x Cruzeiro | https://sportsonline.so/channels/bra/br1.php
18:30	Fortaleza x América Mineiro | https://sportsonline.so/channels/bra/br2.php
18:30	Atlético Mineiro x Coritiba | https://sportsonline.so/channels/bra/br3.php
18:30	Athletico-PR x RB Bragantino | https://sportsonline.so/channels/bra/br4.php
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
