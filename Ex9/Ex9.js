const input = [1, 2, 3, 4, 5];

const RotateArray = (n) => 
{
    for(let i = 0; i < n; i++)
    {
        input.push(input[0]);
        input.shift();
    }
}

RotateArray(4);
console.log(input);