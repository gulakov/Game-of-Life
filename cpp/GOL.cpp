#include <iostream>
#include <stdlib.h>
#include <windows.h>
#include <stdio.h>
#include <time.h>
#include "GOL.h"

namespace std {

void GOL::fill(int p[][2], int s){
	for (int i=0; i<s; i++)
		w[p[i][0]][p[i][1]]=1;
}


void GOL::show (){
	for (int i=0; i<d; i++){
		for (int j=0; j<d; j++)
			if (w[i][j]==1)
				cout << "#";
			else
				cout << " ";

		cout << endl;
	}
};


void GOL::next(){

		int w2[d][d] = {};

	for (int r=0; r<d; r++)
		for (int c=0; c<d; c++){
			int n=0;
			if (r>0){
				if (c>0)
					n+=w[r-1][c-1];

				n+=w[r-1][c];
				if (c<d-1)
					n+=w[r-1][c+1];

			}
			if (c>0)
				n+=w[r][c-1];

			if (c<d-1)
				n+=w[r][c+1];

			if (r<d-1){
				if (c>0)
					n+=w[r+1][c-1];

				n+=w[r+1][c];
				if (c<d-1)
					n+=w[r+1][c+1];

			}

			if (n==3 || (n==2 && w[r][c]==1))
				w2[r][c]=1;
		}



	for (int i=0; i<d; i++)
		for (int j=0; j<d; j++)
			w[i][j]=w2[i][j];

};


GOL::GOL() {
	
}

GOL::~GOL() {
	
}

}