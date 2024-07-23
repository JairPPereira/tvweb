import json

def convert_json_to_extinf(json_data):
    # Parse o JSON
    data = json.loads(json_data)
    
    # Extrair os dados necessários
    name = data.get("name")
    thumbnail_url = data.get("thumbnailUrl")[0]  # Pega o primeiro thumbnail
    content_url = data.get("contentUrl")
    
    # Formatar a string no formato EXTINF
    extinf = f'#EXTINF:-1 tvg-logo="{thumbnail_url}" group-title="Amador",{name}\n{content_url}'
    
    return extinf

# Exemplo de uso
json_data = '''
{
    "@context":"https://schema.org",
    "@type":"VideoObject",
    "name":"Brasileirinha dando o cu de 4",
    "description":"Brasileirinha dando o cu de 4 e abrindo a bunda pra mostrar o rabo todo aberto e melado de porra. Brasileira morena do cu gostoso transando e gemendo safada.",
    "thumbnailUrl":["https://www.pornolandia.xxx/media/videos/tmb/53663/default.jpg", "https://www.pornolandia.xxx/media/videos/tmb/53663/1.jpg"],
    "uploadDate":"2023-12-02T10:38:13-03:00",
    "duration":"PT09M31S",
    "contentUrl":"https://videos.pornolandia.xxx/media/videos/flv/53663.mp4",
	"encodingFormat": "mp4",
	"author" : "xHamster",
	"interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/WatchAction",
    "userInteractionCount": "96993"
   }
}
'''

extinf = convert_json_to_extinf(json_data)
print(extinf)
