function solution(myString, pat) {
    const lastIdx = myString.lastIndexOf(pat);
    if (lastIdx === -1) return '';
    return myString.slice(0, lastIdx + pat.length);
}