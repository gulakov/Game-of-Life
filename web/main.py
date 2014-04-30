# Python Glider
# Glider simulating Conway's Game of Life or A New Kind of Science "computational universe" thesis 
import sys
from gol import GOL

if __name__ == "__main__":
	g = GOL()

	#setup glider
	g.fill(eval(sys.argv[2]))

	for e in range(int(sys.argv[1])):
		g.next()

	g.show()