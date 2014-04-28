# Python Glider
# Glider simualting Conway's Game of Life or A New Kind of Science "computational universe" thesis 

import os
import time

#dimensions
d=30 
w=[[0 for j in range(d)] for i in range(d)]

#setup glider
w[0][1]=1
w[1][2]=1
w[2][0]=1
w[2][1]=1
w[2][2]=1


if __name__ == "__main__":

	#g = int(input("Gen:"))
	g=100

	for e in range(g):
		os.system('cls')

		#display board
		for r in range(len(w)):
			disp=""
			for c in range(len(w[r])):
				if w[r][c]==1:
					disp+="#"
				else:
					disp+=" "
			print(disp)
			
		time.sleep(0.1) 

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
		w=w2
