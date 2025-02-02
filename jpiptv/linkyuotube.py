import subprocess
import json

def get_m3u8_link(youtube_url):
    try:
        # Comando para obter informações do vídeo ao vivo usando yt-dlp
        command = [
            "yt-dlp", 
            "--dump-json", 
            "-f", "best",  # Pega o melhor formato disponível
            youtube_url
        ]
        # Executa o comando e captura a saída
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        # Verifica se houve erro
        if result.returncode != 0:
            raise Exception(f"Erro ao executar yt-dlp: {result.stderr}")

        # Converte a saída JSON para um dicionário Python
        video_info = json.loads(result.stdout)

        # Busca o link M3U8 no JSON retornado
        m3u8_url = video_info.get("url")
        if not m3u8_url:
            raise Exception("Não foi possível encontrar o link M3U8.")
        
        return m3u8_url

    except Exception as e:
        return f"Erro: {str(e)}"

# Exemplo de uso
youtube_link = "https://www.youtube.com/live/fwJlRiWT8Ic?si=M5w-sSTQUIpn85GZ"
m3u8_link = get_m3u8_link(youtube_link)
print("Link M3U8:", m3u8_link)
