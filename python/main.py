# Python Glider
# Glider simulating Conway's Game of Life or A New Kind of Science "computational universe" thesis 

from gol import GOL

if __name__ == "__main__":
	g = GOL()

	#setup glider
	fill=[[0,1],[1,2],[2,0],[2,1],[2,2]]
	g.fill(fill)

	for e in range(100):
		g.show()
		g.next()