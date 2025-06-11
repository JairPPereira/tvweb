# -*- coding: utf-8 -*-
# ============================================
# JP_Scanner - Scanner de listas Xtream Codes
#
# Como usar:
# python nome_do_arquivo.py -U "URL do stream .ts"
#
# Exemplo:
# execute no terminal

# python iptv_extractor.py

# Cole um link como:

# http://sinalprivado.info:80/live/632035/GqGcFV4ntu/18148.ts
#
# O script irá extrair o host, usuário e senha da URL
# e consultar a API Xtream Codes para retornar os dados:
# - Status
# - Data de criação
# - Vencimento
# - Conexões ativas e permitidas
# - Link da lista M3U
# ============================================
import http.client
from urllib.parse import urlparse
import json as json_
from datetime import datetime
import os

class HTTP(object):
    def __init__(self, url, headers=None):
        self.url = url
        self.headers = headers if headers else {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0'}
        self.text = ''
        self.content = b''
        self.status_code = 0

    def send_request(self, method, url, headers=None, max_redirects=5):
        if headers is None:
            headers = {}

        parsed_url = urlparse(url)
        host = parsed_url.hostname
        path = parsed_url.path
        port = parsed_url.port
        if not path:
            path = '/'
        gets = parsed_url.query
        if gets:
            path = path + '?' + gets
        conn = None
        try:
            if parsed_url.scheme == 'https':
                conn = http.client.HTTPSConnection(host, timeout=5)
            else:
                if port:
                    conn = http.client.HTTPConnection(host, port=port, timeout=5)
                else:
                    conn = http.client.HTTPConnection(host, timeout=5)

            conn.request(method, path, headers=headers)
            response = conn.getresponse()
            self.status_code = response.status

            if 300 <= response.status < 400 and 'Location' in response.getheaders() and max_redirects > 0:
                new_location = response.getheader('Location')
                conn.close()
                return self.send_request(method, new_location, headers, max_redirects - 1)

            self.content = response.read()
            self.text = self.content.decode(errors='ignore')
            conn.close()
        except Exception as e:
            pass

        return self

    def json(self):
        try:
            return json_.loads(self.content)
        except:
            return {}

    @staticmethod
    def get(url, headers=None):
        instance = HTTP(url, headers)
        instance.send_request('GET', instance.url, instance.headers)
        return instance


def get_info_iptv(host, username, password):
    parsed_url = urlparse(host)
    protocolo = parsed_url.scheme
    host = parsed_url.hostname
    porta = parsed_url.port
    result = {}

    if porta:
        host_ = f'{protocolo}://{host}:{porta}'
        api = f'{host_}/player_api.php?username={username}&password={password}'
        m3u = f'{host_}/get.php?username={username}&password={password}&type=m3u_plus&output=ts'
    else:
        host_ = f'{protocolo}://{host}'
        api = f'{host_}/player_api.php?username={username}&password={password}'
        m3u = f'{host_}/get.php?username={username}&password={password}&type=m3u_plus&output=ts'

    d = HTTP.get(api).json()
    if d:
        try:
            status = d['user_info']['status']
            if status == 'Active':
                status = 'Ativo'
                ok = True
            elif status == 'Trial':
                status = 'Teste'
                ok = False
            else:
                ok = False
            if ok:
                result['host'] = host_
                result['usuario'] = username
                result['senha'] = password
                result['status'] = status
            expiry = d['user_info']['exp_date']
            try:
                created = d['user_info']['created_at']
                created = datetime.fromtimestamp(int(created)).strftime('%d/%m/%Y - %H:%M')
            except:
                created = ''
            if ok:
                result['criado_em'] = created
                result['vencimento'] = 'Ilimitado' if not expiry else datetime.fromtimestamp(int(expiry)).strftime('%d/%m/%Y - %H:%M')
            max_connection = str(d['user_info']['max_connections'])
            if max_connection == 'None':
                max_connection = 'Ilimitado'
            if ok:
                result['conexoes_permitidas'] = max_connection
                result['conexoes_ativas'] = str(d['user_info']['active_cons'])
                result['m3u'] = m3u
        except:
            pass

    if result:
        final = '#########JP_Scanner##########\n'
        for chave, valor in result.items():
            final += f'{chave}: {valor}\n'
        final += '#############FIM#############\n'
        print(final)
    else:
        print("Nenhuma informação encontrada ou login inválido.")


def extrair_dados_do_link_ts(url):
    try:
        parsed = urlparse(url)
        path_parts = parsed.path.strip('/').split('/')
        if len(path_parts) >= 3:
            username = path_parts[1]
            password = path_parts[2]
            host = f"{parsed.scheme}://{parsed.hostname}:{parsed.port}" if parsed.port else f"{parsed.scheme}://{parsed.hostname}"
            return host, username, password
    except:
        pass
    return None, None, None


if __name__ == "__main__":
    link_ts = input("Cole o link .ts: ").strip()
    host, user, passwd = extrair_dados_do_link_ts(link_ts)
    if host and user and passwd:
        get_info_iptv(host, user, passwd)
    else:
        print("Link inválido ou mal formatado.")
