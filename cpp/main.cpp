#include <iostream>
#include <stdlib.h>
#include <windows.h>
#include <stdio.h>
#include <time.h>
#include "GOL.h"

using namespace std;

int main(){
	GOL g;

	//Glider setup
	int p[][2] =  {{0,1},{1,2},{2,0},{2,1},{2,2}};

	g.fill(p, sizeof(p)/ sizeof(*p));

	for (int i=0; i<80; i++){
		system("cls");

		g.show();
		g.next();

		Sleep (100);
	}

	return 0;
}
