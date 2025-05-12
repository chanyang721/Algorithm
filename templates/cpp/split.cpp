/**
 * split 함수
 * - c++ 에는 split 함수가 없음
 * - split 이란 문자열의 특정 문자를 기준으로 요소로 만들어 배열로 반환하는 함수
 */
#include <bits/stdc++.h>
using namespace std;

vector<string> split(const string &input, string delimiter)
{
    vector<string> result;
    auto start = 0;
    auto end = input.find(delimiter); // delimiter의 첫번쨰 인덱스를 찾음, 만약 없다면 string::npos 반환
    while (end != string::npos)
    {
        result.push_back(input.substr(start, end - start)); // end가 존재하는 경우, result 벡터에
        // substr(pos, len): pos부터 len 이전까지의 문자열을 반환, 반약 len이 없으면 끝까지 반환

        start = end + delimiter.size(); // 처음 delimiter 인덱스 + delimiter의 문자열 길이가 start로 재할당
        // delimiter.size(): 문자열의 길이를 반환

        end = input.find(delimiter, start);
        // input.find(delimter): input 문자열에서 최초로 등장하는 delimiter의 인덱스를 리턴
        // input.find(delimiter, start): 문자열의 start 인덱스부터 최초로 등장하는 delimiter 인덱스를 리턴
    }
    result.push_back(input.substr(start)); // 마지막 요소 추가
    return result;
}

int main()
{
    string s = "hello,world,this,is,a,test";
    vector<string> v = split(s, ",");
    for (const string &str : v)
    {
        cout << str << " ";
    }
    return 0;
}