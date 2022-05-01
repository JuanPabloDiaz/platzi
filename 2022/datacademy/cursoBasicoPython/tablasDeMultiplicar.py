# Programa para imprimir las tablas de multiplicar con solo 4 líneas de código.

for i in range(11):
		print(f"Esta es la tabla del {i}")
		for j in range(11):
			print(f"{i} X {j} = {i*j}")