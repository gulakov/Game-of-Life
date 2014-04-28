# Python Glider
# Glider simulating Conway's Game of Life or A New Kind of Science "computational universe" thesis 
import os
import time

class GOL:
	def __init__(self):
		self.d=30
		self.w = [[0 for j in range(30)] for i in range(30)]
		#setup glider
		self.w[0][1]=1
		self.w[1][2]=1
		self.w[2][0]=1
		self.w[2][1]=1
		self.w[2][2]=1

	#display board
	def show(self):
		os.system('cls')

		for r in range(len(self.w)):
			disp=""
			for c in range(len(self.w[r])):
				disp+="#" if self.w[r][c]==1 else " "
			print(disp)
			
		time.sleep(0.1) 

	def next(self):
		w=self.w
		d=self.d
		w2 =[[0 for j in range(d)] for i in range(d)]

		for r in range(len(w)):
			for c in range(len(w[r])):
				#count up neighboors
				n=0
				if r>0:
					if c>0:
						n+=w[r-1][c-1]
					n+=w[r-1][c]
					if c<d-1:
						n+=w[r-1][c+1]
				if c>0:
					n+=w[r][c-1]
				if c<d-1:
					n+=w[r][c+1]
				if r<d-1:
					if c>0:
						n+=w[r+1][c-1]
					n+=w[r+1][c]
					if c<d-1:
						n+=w[r+1][c+1]

				#compute next generation
				if(n<2 or n>3):
					w2[r][c]=0
				if(n==2):
					w2[r][c]=w[r][c]
				if(n==3):
					w2[r][c]=1
		self.w=w2

if __name__ == "__main__":
	g = GOL()
	for e in range(100):
		g.show()
		g.next()