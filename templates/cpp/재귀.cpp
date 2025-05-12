#include <bits/stdc++.h>
using namespace std;

/**
 * 재귀 함수란
 * 동일한 구조로 자신을 호출하여 문제를 해결하는 함수를 재귀 함수라고 한다.
 *
 * 재귀 함수의 구조는 다음과 같다
 * 1. 종료 조건
 * 2. 반복되는 구조의 로직
 * 3. 매개변수가 다른 재귀 호출
 */

/**
 * 피보나치 재귀 함수 풀이
 */
int fact_rec(int n)
{
    if (n == 1 || n == 0) // 종료 조건
        return 1;
    return n * fact_rec(n - 1); // 반복되는 구조의 로직 및 재귀 호출
}

/**
 * 피보나치 반복 함수 풀이
 */
int fact_for(int n)
{
    int ret = 1;
    for (int i = 1; i <= n; i++)
    {
        ret *= i;
    }
    return ret;
}

/**
 * 각 피보나치 풀이 로그
 */
int n = 6;
int main()
{
    cout << fact_rec(n) << endl;
    cout << fact_for(n) << endl;
    return 0;
}