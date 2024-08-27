import random
import string

def gerar_senha(tamanho=12, incluir_maiusculas=True, incluir_minusculas=True, incluir_numeros=True, incluir_simbolos=True):
    caracteres = ''
    if incluir_maiusculas:
        caracteres += string.ascii_uppercase
    if incluir_minusculas:
        caracteres += string.ascii_lowercase
    if incluir_numeros:
        caracteres += string.digits
    if incluir_simbolos:
        caracteres += string.punctuation
    
    if not caracteres:
        raise ValueError("Pelo menos um tipo de caractere deve ser selecionado.")

    senha = ''.join(random.choice(caracteres) for _ in range(tamanho))
    return senha

# Exemplo de uso
tamanho = 12
senha_gerada = gerar_senha(tamanho=tamanho, incluir_simbolos=False, incluir_maiusculas=False)  # Gerar senha de 16 caracteres sem símbolos
print(f'Senha gerada: {senha_gerada}')
