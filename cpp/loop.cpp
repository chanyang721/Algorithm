#include <bits/stdc++.h>
using namespace std;

/**
 * v.size()는 배열의 크기를 반환
 * - 배열의 크기를 반환 시 unsigned int 타입으로 크기를 반환한다
 * - 때문에 숫자 간 비교 시 다음과 같은 주의 사항이 발생
 *   - max(-1, v.size()) 와 같이 음수와 비교 시 (int) 로 강제 형변환이 필요하다
 *   - max(-1, (int)v.size())
 *   - v.size()의 반환 타입이 unsigned 타입이기 떄문에 음수와 숫자 비교 시 암시적으로 -1 이 형변환되어 매우 큰 양수(UINT_MAX)로 변환된다.
 */

int main()
{
    vector<int> v = {1, 2, 3, 4, 5};

    for (int a : v)
    {
        cout << a << " ";
    }

    cout << "\n";

    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }
}