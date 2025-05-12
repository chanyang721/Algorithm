
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

/**
 * 입력과 출력
 * - 입력:
 * - cin, 개행문자 전까지 입력 받음
 * - scanf: 형식을 지정해서 입력 받음
 *      - %s: chat[]
 *      - %c: chat
 *      - %d: int
 *      - %lf: double
 *
 *  - getline: 문자열을 한번에 받음
 * - tip: 코테 문제에서 형식 기반 입력이 아니면 cin을 사용해서 입력 받음
 */
#include <bits/stdc++.h>
using namespace std;
string a;
int b;
char c;
double d;

int main()
{
    cin >> a;          // 입력 받을 문자열
    cout << a << "\n"; // 출력

    scanf("%d", &b);
    scanf("%c", &c);
    scanf("%lf", &d);
    // %s는 char[] 을 입력 받음
    // %d는 int 형식을 입력 받음
    // string
    cout << a << "\n";
    return 0;
}