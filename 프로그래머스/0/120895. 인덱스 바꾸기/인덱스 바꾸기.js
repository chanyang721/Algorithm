function solution(my_string, num1, num2) {
    const arrStr = my_string.split("")
    arrStr[num1] = my_string[num2]
    arrStr[num2] = my_string[num1]

    return arrStr.join("");
}