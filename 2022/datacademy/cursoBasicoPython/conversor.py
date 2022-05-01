pesos = input("How much Colombian pesos do you have?:")
pesos = float(pesos)
valor_dolar = 3950
dolares = pesos / valor_dolar
dolares = round (dolares, 2)
dolares = str(dolares)
print("You have $" + dolares + " dolars.")