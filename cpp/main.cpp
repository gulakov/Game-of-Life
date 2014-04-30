#include <iostream>
#include <stdlib.h>
#include <windows.h>
#include <stdio.h>
#include <time.h>
#include "GOL.h"
using namespace std;

int main(int argc, char* argv[]){
	int gen = 50;
	if (atoi(argv[1])>0)
		gen = atoi(argv[1]);

	GOL g;
	//Glider setup
	int p[][2] = {{0,1},{1,2},{2,0},{2,1},{2,2},{2,3},{2,4},{1,3},{0,2},{7,7},{7,8},{8,7},{8,8}};

	g.fill(p, sizeof(p) / sizeof(*p));

	for (int i=0; i<gen; i++){
		
		g.next();
	}
	g.show();

	return 0;
}