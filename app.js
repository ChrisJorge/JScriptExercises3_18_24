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
    

    switch (char)
    {
        case 'a':
            return true;

        case 'e':
            return true;
        
        case 'i':
            return true;

        case 'o':
            return true;
        
        case 'u':
            return true;
        
        case 'y':
            return true;
        
        default:
            return false;
            
    }
}

const sumArray = (data) =>{
    this.data = data;
    let ans = 0;
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

const numArgsthat = (...args) =>{
    return args.length;
}

const reverseString = (str) => {
    this.str = str;
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--)
    {
        reversed += str[i];
    }

    return reversed;
}


const longestStringInArray = (data) =>{
    this.data = data;
    longest = 0;
    

    for (let i = 0; i < data.length; i++)
    {
        if(data[i].length > longest)
        {
            longest = data[i].length;
        }
    }
    return longest;

}

const stringsLongerThan = (data, len) =>
{
    this.data = data;
    this.len = len;
    let s = ''
    let arr2 = [];

    for (let i = 0; i < data.length; i++)
    {
        if(data[i].length > len)
        {
            s = data[i];
            arr2.push(s);
        }
    }
    return arr2;
}
console.log(numArgsthat(1, 3))

