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
link = "https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1738940706/ei/wsylZ47kErSgobIPlfCyoA0/ip/206.84.35.228/id/9ULjl_9o5sU.1/source/yt_live_broadcast/requiressl/yes/xpc/EgVo2aDSNQ%3D%3D/hfr/1/playlist_duration/30/manifest_duration/30/maxh/4320/maudio/1/siu/1/bui/AUWDL3zi-KOutjVrGshNoaYtRL6ACPPwy--z_zo8UE7ALogN_kAudiXM4FPxx-RJyO-sqgd1kQ/spc/RjZbSdGRtGPDxNSEtu65b-08RgoNsV8uR-XS7PshSwg4i4KflOagrBrcKE5hRm6Nog/vprv/1/go/1/rqh/5/pacing/0/nvgoi/1/keepalive/yes/fexp/51326932%2C51355912/dover/11/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Chfr%2Cplaylist_duration%2Cmanifest_duration%2Cmaxh%2Cmaudio%2Csiu%2Cbui%2Cspc%2Cvprv%2Cgo%2Crqh%2Citag%2Cplaylist_type/sig/AJfQdSswRQIhAP8nbj9djwFtsaQZUoCJvjLp1AToZn1uAda_yXolOX7OAiABUJE-yRvBNY-ng1Yk5PChPoqMRPy1UhziQ-Fmwc3e-Q%3D%3D/file/index.m3u8"

# Exibir a data de expiração no horário de Brasília
print("Expira em:", calcular_expiracao(link))
