import random


def password_generator():

    UPPER = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
    LOWER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
    NUMB = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    SIMB = ['*', '+', '-', '/', '@', '_', '?', '!', '[', '{', '(', ')', '}', ']', ',', ';', '.', '>', '<', '~', '°', '^', '&', '$', '#', '"']

    characters = UPPER + LOWER + SIMB + NUMB

    password = []

    number_characters = int(input('How many characters? '))


    for i in range(number_characters):
        caracter_random = random.choice(characters)
        password.append(caracter_random)

    password = "".join(password)
    return password


def run():
    password = password_generator()
    print('Your new password is: ' + password)


if __name__ == '__main__':
    run()
