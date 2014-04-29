import os
import time

class GOL:
	def __init__(self):
		self.d=25
		self.w = [[0 for j in range(self.d)] for i in range(self.d)]
	
	def fill(self, fillArray):
		for f in fillArray:
			self.w[f[0]][f[1]]=1
			

	def show(self):
		time.sleep(0.1) 
		os.system('cls')
		for r in range(len(self.w)):
			disp=""
			for c in range(len(self.w[r])):
				disp+="#" if self.w[r][c]==1 else " "
			print(disp)			

	def next(self):
		w=self.w
		d=self.d
		w2 = [[0 for j in range(d)] for i in range(d)]

		for r in range(len(w)):
			for c in range(len(w[r])):
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
				if(n==3 or (n==2 and w[r][c]==1)):
					w2[r][c]=1 
		self.w=w2