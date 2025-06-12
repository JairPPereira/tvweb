arquivo = r"D:\github\tvweb\jpiptv\playtv.m3u"  # note o r antes da string, que trata \ como literal

with open(arquivo, "r", encoding="utf-8") as f:
    linhas = f.readlines()

print("Linhas vazias ou apenas comentadas (exceto #EXTINF):")
for i, linha in enumerate(linhas, start=1):
    linha_strip = linha.strip()
    if not linha_strip or (linha_strip.startswith("#") and not linha_strip.startswith("#EXTINF")):
        print(f"Linha {i}: {repr(linha_strip)}")
