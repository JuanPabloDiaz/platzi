import random


def run():
    numero_aleatorio = random.randint(1, 100)
    numero_elegido = int(input('Elige un número del 1 al 100: '))
    intentos = 0
    while numero_elegido != numero_aleatorio:
        intentos += 1
        if numero_elegido < numero_aleatorio:
            print('Busca un número más grande')
        else:
            print('Busca un número más pequeño')
        numero_elegido = int(input('Elige otro número: '))
    print('¡Ganaste!')
    print('Numero de intentos: ' + str(intentos))


if __name__ == '__main__':
    run()
