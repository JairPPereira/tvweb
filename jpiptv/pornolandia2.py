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
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Pau na perereca meladinha",
    "description": "Pau na perereca meladinha com a calcinha de ladinho socando forte. Morena deliciosa gosta de pau na perereca e senta até ganhar gozada quente e farta.",
    "thumbnailUrl": ["https://www.pornolandia.xxx/media/videos/tmb/53180/default.jpg", "https://www.pornolandia.xxx/media/videos/tmb/53180/1.jpg"],
    "uploadDate": "2023-06-09T10:38:41-03:00",
    "duration": "PT02M01S",
    "contentUrl": "https://videos.pornolandia.xxx/media/videos/flv/53180.mp4",
    "encodingFormat": "mp4",
    "author": "xvideos",
    "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WatchAction",
        "userInteractionCount": "267349"
    }
}
'''

extinf = convert_json_to_extinf(json_data)
print(extinf)
