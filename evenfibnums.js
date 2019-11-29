function fiboEvenSum(n) {

    let prevNum = 0, num = 1, sum = 0;

    for (let i = 0; i <= n; i++) {
         if (num % 2 == 0) {
            sum += num;
        }
        let tempNum = num;
        num = prevNum + num;
        prevNum = tempNum;
        // console.log(num, sum);
        
    }
    console.log(sum);
    return sum

}

fiboEvenSum(24);
