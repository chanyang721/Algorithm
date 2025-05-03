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

    /**
     * STL Standard Template Libary
     * - 기본적인 알고리즘 함수제공 라이브러리
     *  - 알고리즘, 컨테이너, 이터레이터, 펑터 제공
     *      - 컨테이너:
     *          - 시퀀스 컨테이너: vector, list, deque
     *          - 정렬 연관 컨테이너: map, set, multimap, multiset
     *          - 비정렬 연관 컨테이너: unordered_map, unordered_set,
     *          - 어댑터 컨테이너: 시퀀스 컨테이너로 만든 자료구조
     *              - stack, queue를 dequq로 구현
     *              - priority queue는 vactor를 이용하여 heap 구현
     *  - 이터레이터: 나중에 배움
     *  - 펑터: 나중에 배움
     *  */
}
