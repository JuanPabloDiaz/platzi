# Un palíndromo es una palabra o frase que se lee igual en un sentido que en otro (por ejemplo; Ana, Anna, Otto

from imaplib import ParseFlags
from operator import truediv


def palindromo(palabra):
	palabra = palabra.replace(' ', '')
	palabra = palabra.lower()
	palabra_invertida = palabra[::-1]
	if palabra == palabra_invertida:
		return True
	else:
		return False


def run():
	palabra = input('Escribe una palabra: ')
	es_palindromo = palindromo(palabra)
	if es_palindromo == True:
		print('Es palindromo')
	else:
		print('No es palindromo')


if __name__ == '__main__':
	run()


# -------------------------------------



### Una forma de resolver esto en 2 lineas ya que Python es tan flexible al momento de escribir su codigo seria esta:


# palabra = input('Ingrese una palabra: ').lower().replace(' ', '')
# print(f'La palabra {""if palabra == palabra[::-1] else "no "}es un palíndromo')
