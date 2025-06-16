function solution(chicken) {
    // coupon 10 -> chicken 1 -> coupon 1
    // chicken 1 -> coupon 1
    // coupons = chicken
    // service = 0
    // while (coupon >= 10)
    //      new = Math.floor(c / 10)
    //      s += new
    //      c = n + (c % 10)
    let c = chicken;
    let s = 0;
    while (c >= 10) {
        let n = Math.floor(c / 10);
        s += n;
        c = n + (c % 10)
    }
     
    return s;
}