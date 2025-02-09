import re
import datetime
import pytz

def calcular_expiracao(link):
    # Expressão regular para encontrar o timestamp após 'expire/'
    match = re.search(r"expire/(\d+)", link)
    if not match:
        return "Nenhum timestamp de expiração encontrado no link."

    # Extrair o timestamp e converter para inteiro
    expire_timestamp = int(match.group(1))

    # Converter para horário UTC usando a abordagem recomendada
    expire_utc = datetime.datetime.fromtimestamp(expire_timestamp, datetime.UTC)

    # Ajustar para o fuso horário de Brasília (UTC-3)
    fuso_brasilia = pytz.timezone("America/Sao_Paulo")
    expire_brasilia = expire_utc.astimezone(fuso_brasilia)

    return expire_brasilia.strftime("%d/%m/%Y %H:%M:%S")

# Exemplo de link com o timestamp no formato correto
link = "https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1739135911/ei/R8eoZ_6gD6yL1d8Pq7bKgQY/ip/45.14.71.23/id/YxsUI7_w1A8.1/source/yt_live_broadcast/requiressl/yes/xpc/EgVo2aDSNQ%3D%3D/hfr/1/playlist_duration/30/manifest_duration/30/maxh/4320/maudio/1/siu/1/bui/AUWDL3yOMionvzFUXdF-uhC2xzbkTwObSmALbQGlpI875yE8kM4CkbYbHRKINTe445MfJacH2Q/spc/RjZbSQrit8aD-3_tB68b4_W4aqDKMn0bLOgunH5ZrBuBxeNO33Ithom14YHVA4-L5g/vprv/1/go/1/rqh/5/pacing/0/nvgoi/1/keepalive/yes/fexp/51326932%2C51355912/dover/11/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Chfr%2Cplaylist_duration%2Cmanifest_duration%2Cmaxh%2Cmaudio%2Csiu%2Cbui%2Cspc%2Cvprv%2Cgo%2Crqh%2Citag%2Cplaylist_type/sig/AJfQdSswRQIhAP6D0kg50TBToNhzlG6rD-e3wee4lMEKgSww0w_XPGalAiAQnL3hJylZ1-GN975lHRlH72IbZoS6NVP61Qh7e6ttGQ%3D%3D/file/index.m3u8"

# Exibir a data de expiração no horário de Brasília
print("Expira em:", calcular_expiracao(link))
