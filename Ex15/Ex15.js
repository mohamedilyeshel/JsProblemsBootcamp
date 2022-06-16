const input = [3,1,2,3];

const Permutation = (i,y) =>
{
    const t = input.slice();

    let a = t[i];
    t[i] = t[y];
    t[y] = a;

    return t;
}

const UniquePermutation = () =>
{
    console.log(input);
    for(let i = 0; i < input.length; i++)
    {
        for(let y = i+1; y < input.length; y++)
        {
            if(input[i] != input[y])
            {
                console.log(Permutation(i,y));
            }
        }
    }
}

UniquePermutation();