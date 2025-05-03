#include <bits/stdc++.h>
using namespace std;
#define PI 3.141592
#define loop(x, n) for (int x = 0; x < n; x++)

typedef int INT; // typedof 으로 타입 이름을 별칭으로 정의 가능

INT a = 10;

int main()
{
    // INT a = 10;
    // cout << a << endl;
    // return 0;

    cout << PI << '\n';
    int sum = 0;

    loop(i, 10)
    {
        sum += i;
    }
    cout << sum << '\n';
    return 0;
}
