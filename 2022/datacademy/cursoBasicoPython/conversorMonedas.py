menu = """
What is your currency?
1. Colombian peso
2. Mexican peso
3. Argentine peso

Chose one option: """

option = int(input(menu))

if option == 1:
	pesos = input("How much Colombian peso do you have?:")
	pesos = float(pesos)
	valor_dolar = 3950
	dolares = pesos / valor_dolar
	dolares = round (dolares, 2)
	dolares = str(dolares)
	print("You have $" + dolares + " dolars.")
elif option == 2:
	pesos = input("How much Mexican peso do you have?:")
	pesos = float(pesos)
	valor_dolar = 24
	dolares = pesos / valor_dolar
	dolares = round (dolares, 2)
	dolares = str(dolares)
	print("You have $" + dolares + " dolars.")
elif option == 3:
	pesos = input("How much Argentine peso do you have?:")
	pesos = float(pesos)
	valor_dolar = 65
	dolares = pesos / valor_dolar
	dolares = round (dolares, 2)
	dolares = str(dolares)
	print("You have $" + dolares + " dolars.")
else:
	print("Enter a valid option")
