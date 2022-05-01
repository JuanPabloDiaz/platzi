def conversor(tipo_pesos, valor_dolar):
	pesos = input("How much " + tipo_pesos + " peso do you have?:")
	pesos = float(pesos)
	dolares = pesos / valor_dolar
	dolares = round (dolares, 2)
	dolares = str(dolares)
	print("You have $" + dolares + " dolars.")

menu = """
What is your currency?💰
1. Colombian peso
2. Mexican peso
3. Argentine peso

Chose one option: """

option = int(input(menu))

if option == 1:
	conversor("colombian", 3950)
elif option == 2:
	conversor("mexican", 24)
elif option == 3:
	conversor("argentine", 65)
else:
	print("Enter a valid option")
