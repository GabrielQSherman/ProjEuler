function multiplesOf3and5(number) {
  // Good luck!
  let i = 3, sumList = [], sum;
    while (i < number) {
        if (i % 3 == 0 || i % 5 == 0) {
            sumList.push(i);
        }
        // console.log(i);
        
        i++
    }
    sum = sumList.reduce((x, y) => x + y);
    console.log(sum);
    return sum
    
    
}

multiplesOf3and5(10);
