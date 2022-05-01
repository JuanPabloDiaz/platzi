def message(number):
	print("My name is Juan Diaz and I'm learning Python")
	print(number)
	print("Take it easy.")

option = int(input("Hi, please chose an option (1, 2, 3): "))
if option == 1:
	message("You choose option 1")
elif option == 2:
	message("You choose option 2")
elif option == 3:
	message("You choose option 3")
else:
	print("Please choose a valid option")

