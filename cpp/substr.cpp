#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s = "hello, world";
    string delimiter = ",";
    auto end = s.find(delimiter);
    cout << end << "\n";
    string substr_result = s.substr(0, end);   // end 인덱스 이전까지 잘라서 반환
    string substr_result2 = s.substr(end + 1); // end 인덱스는 delimiter 이므로 그 다음 인덱스부터 잘라서 반환
    cout << substr_result << "\n";
    cout << substr_result2 << "\n";
    return 0;
}
