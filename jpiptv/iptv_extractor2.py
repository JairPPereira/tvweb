# -*- coding: utf-8 -*-
# ============================================
# JP_Scanner - Scanner de listas Xtream Codes
#
# Aceita links:
# - http://dominio/live/usuario/senha/canal.ts
# - http://dominio/movie/usuario/senha/video.mp4
# - http://dominio/get.php?username=usuario&password=senha&type=m3u_plus
# ============================================
import http.client
from urllib.parse import urlparse, parse_qs
import json as json_
from datetime import datetime

class HTTP(object):
    def __init__(self, url, headers=None):
        self.url = url
        self.headers = headers if headers else {'User-Agent': 'Mozilla/5.0'}
        self.text = ''
        self.content = b''
        self.status_code = 0

    def send_request(self, method, url, headers=None, max_redirects=5):
        if headers is None:
            headers = {}
        parsed_url = urlparse(url)
        host = parsed_url.hostname
        path = parsed_url.path or '/'
        port = parsed_url.port
        if parsed_url.query:
            path += '?' + parsed_url.query
        try:
            if parsed_url.scheme == 'https':
                conn = http.client.HTTPSConnection(host, timeout=5)
            else:
                conn = http.client.HTTPConnection(host, port=port or 80, timeout=5)
            conn.request(method, path, headers=headers)
            response = conn.getresponse()
            self.status_code = response.status
            if 300 <= response.status < 400 and response.getheader('Location') and max_redirects > 0:
                return self.send_request(method, response.getheader('Location'), headers, max_redirects - 1)
            self.content = response.read()
            self.text = self.content.decode(errors='ignore')
            conn.close()
        except:
            pass
        return self

    def json(self):
        try:
            return json_.loads(self.content)
        except:
            return {}

    @staticmethod
    def get(url, headers=None):
        return HTTP(url, headers).send_request('GET', url, headers)


def get_info_iptv(host, username, password):
    parsed_url = urlparse(host)
    base = f"{parsed_url.scheme}://{parsed_url.hostname}" + (f":{parsed_url.port}" if parsed_url.port else "")
    api = f'{base}/player_api.php?username={username}&password={password}'
    m3u = f'{base}/get.php?username={username}&password={password}&type=m3u_plus&output=ts'

    data = HTTP.get(api).json()
    if data and 'user_info' in data:
        try:
            info = data['user_info']
            status_raw = info.get('status', '').capitalize()
            status = 'Ativo' if status_raw == 'Active' else ('Teste' if status_raw == 'Trial' else 'Inativo')

            result = {
                'host': base,
                'usuario': username,
                'senha': password,
                'status': status,
                'criado_em': datetime.fromtimestamp(int(info['created_at'])).strftime('%d/%m/%Y - %H:%M') if info.get('created_at') else '',
                'vencimento': 'Ilimitado' if not info.get('exp_date') else datetime.fromtimestamp(int(info['exp_date'])).strftime('%d/%m/%Y - %H:%M'),
                'conexoes_permitidas': info.get('max_connections') or 'Ilimitado',
                'conexoes_ativas': str(info.get('active_cons', '0')),
                'm3u': m3u
            }

            print("######### JP_Scanner #########")
            for k, v in result.items():
                print(f"{k}: {v}")
            print("############# FIM #############")
        except:
            print("Erro ao processar os dados.")
    else:
        print("Nenhuma informação encontrada ou login inválido.")


def extrair_dados(url):
    parsed = urlparse(url)
    path_parts = parsed.path.strip('/').split('/')
    # Links do tipo .ts ou .mp4 → /live/user/pass/... ou /movie/user/pass/...
    if any(x in parsed.path for x in ['/live/', '/movie/']):
        if len(path_parts) >= 3:
            username = path_parts[1]
            password = path_parts[2]
            host = f"{parsed.scheme}://{parsed.hostname}" + (f":{parsed.port}" if parsed.port else "")
            return host, username, password
    # Links do tipo get.php → ?username=user&password=pass
    elif 'get.php' in parsed.path:
        qs = parse_qs(parsed.query)
        username = qs.get('username', [None])[0]
        password = qs.get('password', [None])[0]
        if username and password:
            host = f"{parsed.scheme}://{parsed.hostname}" + (f":{parsed.port}" if parsed.port else "")
            return host, username, password
    return None, None, None


if __name__ == "__main__":
    link = input("Cole o link (.ts, .mp4 ou .m3u): ").strip()
    host, user, passwd = extrair_dados(link)
    if host and user and passwd:
        get_info_iptv(host, user, passwd)
    else:
        print("Link inválido ou mal formatado.")
