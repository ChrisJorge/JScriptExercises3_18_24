const maxOfTwoNumbers = (num1, num2) =>
{
    this.num1 = num1;
    this.num2 = num2;
    
    if (num1 > num2)
    {
        return num1;
    }
    else if (num2 > num1)
    {
        return num2;
    }
    else
    {
        return num1;
    };

};

const maxOfThreeNumbers = (num1, num2, num3) =>{
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    let arr = [num1,num2,num3]
    let max = 0
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max
}
// console.log(maxOfTwoNumbers(5,5))
console.log(maxOfThreeNumbers(9,40,5))