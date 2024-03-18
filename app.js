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
    let arr = [num1,num2,num3];
    let max = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        };
    };
    return max;
};

const isCharAVowel = (char) =>
{
    this.char = char
    char = char.toLowerCase()
    

    if(char === 'a'){
        return true;
    }
    else if(char === 'e')
    {
        return true;
    }
    else if(char === 'i')
    {
        return true;
    }
    else if(char === 'o')
    {
        return true;
    }
    else if(char === 'u')
    {
        return true;
    }
    else if(char === 'y')
    {
        return true;
    }
    else
    {
        return false;
    }

}

const sumArray = (data) =>{
    this.data = data;
    let ans = 0;
// [1,2,3]
// 0,1,2
    for (let i = 0; i < data.length; i++){
        ans += data[i];
    }
    return ans;
}

const multiplyArray = (data) =>{
    this.data = data;
    let ans = 1;

    for (let i = 0; i < data.length; i++){
        ans *= data[i];
    }
    return ans;
}

// const numArgsthat = () =>{
//     let num = 0
//     for(let i = 0; i < arguments.length; i++){
//         num ++
//     }
//     return num
// }

const reverseString = (str) => {
    this.str = str;
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--)
    {
        reversed += str[i];
    }

    return reversed;
}
console.log(reverseString('Hello'))

