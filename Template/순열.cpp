/**
 * 순열이란: 순서 상관 있게 뽑아서 나열하는 것
 *  - nPr = n! / (n - r)! 공식
 *
 * 순열 문제 특징
 * - 순서를 재배치하여 ~
 * - ~ 한 순서의 경우 max 값을 구하는 경우
 *
 * 순열 문제 풀이
 * - C++ 에서는 next_permutation 함수 제공함
 *  - next_permutation 특징
 *      - [from, to] 를 매계변수로 갖는다
 *      - to 는 포함되지 않는다
 *          - 예를 들어: [0, 1, 2] 에서 전체 요소를 뽑아서 순열을 만들기 위해 from은 0, to는 3으로 설정해야한다.
 *      - 오름차순으로 정렬된 결과가 나온다
 *      - 만약 [1, 2, 3] 처럼 오름차순으로 정렬된 배열이 아닌 [2, 1, 3] 처럼 정렬된 배열을 입력하면 [2, 1, 3] 이후의 순열만 찾는다.
 *      - 즉, 오름차순으로 정렬된 배열을 입력해야 첫 번째 순열을 찾고, 그 이후의 모든 경우의 수를 찾아서 출력한다
 *          - 항상 입력 배열에 sort 함수를 사용한 뒤 next_permutation 함수를 사용해야 한다
 */

#include <bits/stdc++.h>
using namespace std;

/**
 * do while(next_permutation(a.begin(), a.end())) 문법
 */
int main()
{
    // int a[] = {1, 2, 3};
    vector<int> a = {2, 1, 3, 100, 200};
    sort(a.begin(), a.end()); // 오름차순으로 정렬
    do
    {
        for (int i : a)
            cout << i << " ";
        cout << "\n";
        // } while(next_permutation(&a[0], &a[0] + 3));
    } while (next_permutation(a.begin(), a.end()));
};

/**
 * 재귀 함수로 순열 구현
 */

int a[3] = {1, 2, 3};
int n = 3, r = 3;
void print()
{
    for (int i = 0; i < r; i++)
    {
        cout << a[i] << " ";
    }
    cout << "\n";
}

void makePermutation(int n, int r, int depth)
{
    if (r == depth)
    {
        print();
        return;
    }

    for (int i = depth; i < n; i++)
    {
        cout << n << " : " << r << " : " << depth << "를 바꾼다!\n";
        swap(a[i], a[depth]);
        makePermutation(n, r, depth + 1);
        cout << n << " : " << r << " : " << depth << "를 원래대로 되돌린다\n";
        swap(a[i], a[depth]);
    };

    return;
}

int main()
{
    makePermutation(n, r, 0);
    return 0;
}