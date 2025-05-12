/**
 *  조합이란: 순서 상관 없이 뽑아서 나열하는 것
 *  - nCr = n! / (n - r)! * r! 공식
 *
 */

#include <bits/stdc++.h>
using namespace std;

int n = 5, k = 3, a[5] = {1, 2, 3, 4, 5};
void print(vector<int> b)
{
    for (int i : b)
        cout << i << " ";
    cout << "\n";
}

void combi(int start, vector<int> &b)
{
    if (b.size() == k)
    {
        print(b);
        // 문제에 따라 필요한 로직
        return;
    }
    for (int i = start + 1; i < n; i++) // 인덱스를 기반으로 조합 요소를 뽑음
    {
        b.push_back(i);
        combi(i, b);
        b.pop_back();
    }
    return;
}
int main()
{
    vector<int> b;
    combi(-1, b);
    return 0;
}