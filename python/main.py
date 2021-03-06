# Python Glider
# Glider simulating Conway's Game of Life or A New Kind of Science "computational universe" thesis 
import sys
from gol import GOL

if __name__ == "__main__":
	g = GOL()

	#setup glider
	g.fill([[0,1],[1,2],[2,0],[2,1],[2,2]])

	for e in range(int(sys.argv[1])):
		g.next()

	g.show()