import random
import string

def generar_contrasena():
    caracter = string.ascii_lowercase + string.digits + string.punctuation + string.ascii_uppercase

    contrasena = []

    while (len(contrasena) < 16):
        caracteres=random.choice(caracter)
        contrasena.append(caracteres)

    contrasena = "".join(contrasena)
    return contrasena

def run():
    contrasena = generar_contrasena()
    print('Your password is: '+ contrasena)

if __name__ == "__main__":
    run()