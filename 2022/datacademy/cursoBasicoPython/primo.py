## 	Numero Primo

# Metodo matematico con factorial para saber si un numero es primo:
# Sí, el teorema de Wilson:
# Un número n es primo si y solo si (n-1)! + 1 es múltiplo de n
# Ejemplo:
# ¿Es 7 primo?
# 7 es primo si (7-1)! + 1 es múltiplo de 7
# (7-1)! + 1 = 6! + 1 = (6·5·4·3·2·1)+1 = 721
# ¿721 es múltiplo de 7?
# 721 : 7 = 103 (división exacta)
# 721 sí es múltiplo de 7 por tanto 7 es un número primo.



def factorial(n):
    fact = 1
    if n < 0:
        return 0
    elif n == 0:
        return 1
    while (n > 1):
        fact *= n
        n -= 1
    return fact


def main():
    numero = int(input("Escoge un numero: "))
    teorema = factorial(numero - 1) + 1
    #print(teorema)
    if teorema % numero == 0:
        print("El numero es primo")
    else:
        print("No es primo")


if __name__ == '__main__':
    main()