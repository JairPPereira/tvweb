import re

# Lista M3U fornecida
m3u_content = """
#EXTM3U
#EXT-X-SESSION-DATA:DATA-ID="com.xui.1_5_5r2"
#EXTINF:-1 tvg-id="" tvg-name="#EVENTOS 01" tvg-logo="http://p6.vc/VLP" group-title="Canais | Jogos & Eventos",#EVENTOS 01
http://pfsv.io:80/francisco.cavedon/9489458/33377.ts
#EXTINF:-1 tvg-id="" tvg-name="#EVENTOS 02" tvg-logo="http://p6.vc/VLQ" group-title="Canais | Jogos & Eventos",#EVENTOS 02
http://pfsv.io:80/francisco.cavedon/9489458/33399.ts
#EXTINF:-1 tvg-id="" tvg-name="#EVENTOS 03" tvg-logo="http://p6.vc/VLR" group-title="Canais | Jogos & Eventos",#EVENTOS 03
http://pfsv.io:80/francisco.cavedon/9489458/33400.ts
#EXTINF:-1 tvg-id="" tvg-name="#EVENTOS 04" tvg-logo="http://p6.vc/VLS" group-title="Canais | Jogos & Eventos",#EVENTOS 04
http://pfsv.io:80/francisco.cavedon/9489458/33401.ts
#EXTINF:-1 tvg-id="" tvg-name="#EVENTOS 05" tvg-logo="http://p6.vc/VLT" group-title="Canais | Jogos & Eventos",#EVENTOS 05
http://pfsv.io:80/francisco.cavedon/9489458/33402.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 15 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 15 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161818.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 2 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 2 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161810.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 3 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 3 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161811.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 4[Alter]  FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 4[Alter]  FHD
http://pfsv.io:80/francisco.cavedon/9489458/161812.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 5 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 5 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161813.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 6 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 6 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161814.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 7 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 7 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161815.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 8 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 8 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161816.ts
#EXTINF:-1 tvg-id="" tvg-name="A Fazenda 9 [Alter] FHD" tvg-logo="" group-title="Canais | A Fazenda 15",A Fazenda 9 [Alter] FHD
http://pfsv.io:80/francisco.cavedon/9489458/161817.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA CAM 1 [Alter2]" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA CAM 1 [Alter2]
http://pfsv.io:80/francisco.cavedon/9489458/161819.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA CAM 2 [Alter2]" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA CAM 2 [Alter2]
http://pfsv.io:80/francisco.cavedon/9489458/161820.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA CAM 3 [Alter2]" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA CAM 3 [Alter2]
http://pfsv.io:80/francisco.cavedon/9489458/161821.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA CAM 4 [Alter2]" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA CAM 4 [Alter2]
http://pfsv.io:80/francisco.cavedon/9489458/161822.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA CAM 5 [Alter2]" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA CAM 5 [Alter2]
http://pfsv.io:80/francisco.cavedon/9489458/161823.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA CAM 6 [Alter2]" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA CAM 6 [Alter2]
http://pfsv.io:80/francisco.cavedon/9489458/161824.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 1" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 1
http://pfsv.io:80/francisco.cavedon/9489458/161381.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 2" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 2
http://pfsv.io:80/francisco.cavedon/9489458/161380.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 3" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 3
http://pfsv.io:80/francisco.cavedon/9489458/161379.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 4" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 4
http://pfsv.io:80/francisco.cavedon/9489458/161378.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 5" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 5
http://pfsv.io:80/francisco.cavedon/9489458/161377.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 6" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 6
http://pfsv.io:80/francisco.cavedon/9489458/161376.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 7" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 7
http://pfsv.io:80/francisco.cavedon/9489458/161375.ts
#EXTINF:-1 tvg-id="" tvg-name="A FAZENDA SINAL 8" tvg-logo="" group-title="Canais | A Fazenda 15",A FAZENDA SINAL 8
http://pfsv.io:80/francisco.cavedon/9489458/161374.ts
#EXTINF:-1 tvg-id="BR - A&E" tvg-name="A&E FHD" tvg-logo="http://p6.vc/APQ" group-title="Canais | Filmes e Séries",A&E FHD
http://pfsv.io:80/francisco.cavedon/9489458/293.ts
#EXTINF:-1 tvg-id="BR - A&E" tvg-name="A&E FHD [H265]" tvg-logo="http://p6.vc/WHI" group-title="Canais | Filmes e Séries",A&E FHD [H265]
http://pfsv.io:80/francisco.cavedon/9489458/30227.ts
#EXTINF:-1 tvg-id="BR - A&E" tvg-name="A&E HD" tvg-logo="http://p6.vc/APV" group-title="Canais | Filmes e Séries",A&E HD
http://pfsv.io:80/francisco.cavedon/9489458/299.ts
#EXTINF:-1 tvg-id="BR - A&E" tvg-name="A&E SD" tvg-logo="http://p6.vc/APV" group-title="Canais | Filmes e Séries",A&E SD
http://pfsv.io:80/francisco.cavedon/9489458/324.ts
#EXTINF:-1 tvg-id="Agro+" tvg-name="AgroMais FHD" tvg-logo="http://p6.vc/VRH" group-title="Canais | Variedades",AgroMais FHD
http://pfsv.io:80/francisco.cavedon/9489458/109512.ts
#EXTINF:-1 tvg-id="AMC.br" tvg-name="AMC FHD" tvg-logo="http://p6.vc/WGS" group-title="Canais | Filmes e Séries",AMC FHD
http://pfsv.io:80/francisco.cavedon/9489458/294.ts
#EXTINF:-1 tvg-id="BR - AMC Brasil" tvg-name="AMC FHD [H265]" tvg-logo="http://p6.vc/WHJ" group-title="Canais | Filmes e Séries",AMC FHD [H265]
http://pfsv.io:80/francisco.cavedon/9489458/30228.ts
#EXTINF:-1 tvg-id="BR - AMC Brasil" tvg-name="AMC HD" tvg-logo="http://p6.vc/APW" group-title="Canais | Filmes e Séries",AMC HD
http://pfsv.io:80/francisco.cavedon/9489458/300.ts
#EXTINF:-1 tvg-id="BR - AMC Brasil" tvg-name="AMC SD" tvg-logo="http://p6.vc/AQS" group-title="Canais | Filmes e Séries",AMC SD
http://pfsv.io:80/francisco.cavedon/9489458/325.ts
#EXTINF:-1 tvg-id="BR - Animal Planet" tvg-name="Animal Planet FHD" tvg-logo="http://p6.vc/AKY" group-title="Canais | Documentários",Animal Planet FHD
http://pfsv.io:80/francisco.cavedon/9489458/164.ts
#EXTINF:-1 tvg-id="BR - Animal Planet" tvg-name="Animal Planet FHD [H265]" tvg-logo="http://p6.vc/WHO" group-title="Canais | Documentários",Animal Planet FHD [H265]
http://pfsv.io:80/francisco.cavedon/9489458/30248.ts
#EXTINF:-1 tvg-id="BR - Animal Planet" tvg-name="Animal Planet HD" tvg-logo="http://p6.vc/ALM" group-title="Canais | Documentários",Animal Planet HD
http://pfsv.io:80/francisco.cavedon/9489458/179.ts
#EXTINF:-1 tvg-id="BR - Animal Planet" tvg-name="Animal Planet SD" tvg-logo="http://p6.vc/AMA" group-title="Canais | Documentários",Animal Planet SD
http://pfsv.io:80/francisco.cavedon/9489458/194.ts
#EXTINF:-1 tvg-id="animalplanet.br" tvg-name="Animal Planet [4K]" tvg-logo="http://p6.vc/bb" group-title="Canais | 4K",Animal Planet [4K]
http://pfsv.io:80/francisco.cavedon/9489458/588.ts
#EXTINF:-1 tvg-id="BR - Arte 1" tvg-name="Arte 1 FHD" tvg-logo="http://p6.vc/AKZ" group-title="Canais | Documentários",Arte 1 FHD
http://pfsv.io:80/francisco.cavedon/9489458/165.ts
#EXTINF:-1 tvg-id="BR - Arte 1" tvg-name="Arte 1 FHD [H265]" tvg-logo="http://p6.vc/WHP" group-title="Canais | Documentários",Arte 1 FHD [H265]
http://pfsv.io:80/francisco.cavedon/9489458/30249.ts
#EXTINF:-1 tvg-id="BR - Arte 1" tvg-name="Arte 1 HD" tvg-logo="http://p6.vc/ALN" group-title="Canais | Documentários",Arte 1 HD
http://pfsv.io:80/francisco.cavedon/9489458/180.ts
#EXTINF:-1 tvg-id="BR - Arte 1" tvg-name="Arte 1 SD" tvg-logo="http://p6.vc/AMB" group-title="Canais | Documentários",Arte 1 SD
http://pfsv.io:80/francisco.cavedon/9489458/195.ts
#EXTINF:-1 tvg-id="" tvg-name="Athletico Furacao TV" tvg-logo="http://p6.vc/ONX" group-title="Canais | Campeonatos Estaduais",Athletico Furacao TV
http://pfsv.io:80/francisco.cavedon/9489458/116350.ts
#EXTINF:-1 tvg-id="" tvg-name="Athletico Furacao TV HD [ALTER2]" tvg-logo="http://p6.vc/ONX" group-title="Canais | Campeonatos Estaduais",Athletico Furacao TV HD [ALTER2]
http://pfsv.io:80/francisco.cavedon/9489458/132251.ts
#EXTINF:-1 tvg-id="" tvg-name="Athletico Furacao TV SD [ALTER2]" tvg-logo="http://p6.vc/ONX" group-title="Canais | Campeonatos Estaduais",Athletico Furacao TV SD [ALTER2]
http://pfsv.io:80/francisco.cavedon/9489458/132252.ts
#EXTINF:-1 tvg-id="" tvg-name="Athletico Furacao TV [ALTER]" tvg-logo="http://p6.vc/ONX" group-title="Canais | Campeonatos Estaduais",Athletico Furacao TV [ALTER]
http://pfsv.io:80/francisco.cavedon/9489458/49109.ts
#EXTINF:-1 tvg-id="BR - AXN" tvg-name="AXN FHD" tvg-logo="http://p6.vc/APR" group-title="Canais | Filmes e Séries",AXN FHD
http://pfsv.io:80/francisco.cavedon/9489458/295.ts
#EXTINF:-1 tvg-id="BR - AXN" tvg-name="AXN FHD LEG" tvg-logo="http://p6.vc/WID" group-title="Canais | Legendados",AXN FHD LEG
http://pfsv.io:80/francisco.cavedon/9489458/122939.ts
#EXTINF:-1 tvg-id="BR - AXN" tvg-name="AXN FHD[H265]" tvg-logo="http://p6.vc/WGX" group-title="Canais | Filmes e Séries",AXN FHD[H265]
http://pfsv.io:80/francisco.cavedon/9489458/30206.ts
#EXTINF:-1 tvg-id="BR - AXN" tvg-name="AXN HD" tvg-logo="http://p6.vc/APX" group-title="Canais | Filmes e Séries",AXN HD
http://pfsv.io:80/francisco.cavedon/9489458/301.ts
#EXTINF:-1 tvg-id="BR - AXN" tvg-name="AXN HD LEG" tvg-logo="http://p6.vc/WIB" group-title="Canais | Legendados",AXN HD LEG
http://pfsv.io:80/francisco.cavedon/9489458/122933.ts
#EXTINF:-1 tvg-id="BR - AXN" tvg-name="AXN SD" tvg-logo="http://p6.vc/AQT" group-title="Canais | Filmes e Séries",AXN SD
http://pfsv.io:80/francisco.cavedon/9489458/326.ts
#EXTINF:-1 tvg-id="BR - AXN" tvg-name="AXN SD LEG" tvg-logo="http://p6.vc/WIC" group-title="Canais | Legendados",AXN SD LEG
http://pfsv.io:80/francisco.cavedon/9489458/122934.ts
#EXTINF:-1 tvg-id="axn.br" tvg-name="AXN [4K]" tvg-logo="http://p6.vc/H" group-title="Canais | 4K",AXN [4K]
http://pfsv.io:80/francisco.cavedon/9489458/50863.ts
"""

# Expressão regular para encontrar itens com group-title="Canais | Legendados"
pattern = r'(#EXTINF:-1 .* group-title="Canais \| Jogos & Eventos".*?\nhttps?://\S+)'

# Encontrar e imprimir os itens correspondentes ao padrão
matches = re.findall(pattern, m3u_content)
for match in matches:
    print(match)
