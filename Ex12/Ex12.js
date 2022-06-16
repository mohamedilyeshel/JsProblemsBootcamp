const l1 = [8, 3, 9];
const l2 = [5, 8, 9];

const SumTwo = () =>
{
    let isOne = false;
    const result = [];

    for(let i = 0; i < l1.length; i++)
    {
        result.push(0);
        
        if(isOne === true)
        {
            result[i] += 1;
            isOne = false;
        }

        if(l1[i] + l2[i] > 9)
        {
            result[i] += (l1[i]+l2[i]) % 10;
            isOne = true;
        }
        else
        {
            result[i] += l1[i]+l2[i];
        }
    }

    if(isOne === true)
    {
        result.push(1);
    }

    return result;
}

console.log(SumTwo());