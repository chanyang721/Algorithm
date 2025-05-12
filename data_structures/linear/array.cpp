#include <bits/stdc++.h>
using namespace std;

vector<int> v;

int main()
{
    for (int i = 0; i < 10; i++)
    {
        v.push_back(i); // 백테 맨 뒤에 요소 삽입
    }
    for (int a : v)
        cout << a << " ";
    cout << "\n";
    v.pop_back(); // 백터 맨 뒤의 요소 제거

    for (int a : v)
        cout << a << " ";
    cout << "\n";

    v.erase(v.begin(), v.begin() + 3); // 백터 맨 앞부터 3번째 요소 이전까지 제거
    // erase(from, to) : 배열의 인덱스가 from부터 to 이전까지 제거

    for (int a : v) // 벡터 범위 기반 for 문
        cout << a << " ";
    cout << "\n";

    auto a = find(v.begin(), v.end(), 100); // auto 자동 타입 추론
    if (a == v.end())
        cout << "not found" << "\n";

    fill(v.begin(), v.end(), 10); // 벡터의 모든 요소를 10으로 채움
    for (int a : v)
        cout << a << " ";
    cout << "\n";

    v.clear(); // 벡터의 모든 요소를 지움
    cout << "지워진 것 확인";
    for (int a : v)
        cout << a << " ";
    cout << "\n";
    return 0;
}