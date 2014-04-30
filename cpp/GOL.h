using namespace std;

class GOL {
private:
	const static int d = 25;
	int w[d][d] = {};
public:
	void fill(int p[][2], int s);
	void show ();
	void next();
	GOL();
};