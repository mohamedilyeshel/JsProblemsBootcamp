const input = [1,2,4,5,4,3];

/*
const RemoveDuplicate = (i) =>
{
    return [...new Set(i)];
}
console.log(...RemoveDuplicate(input));
*/

const DupAr = (t) =>
{
    for (let i = 0; i < t.length; i++) 
    {
        for (let y = i+1; y < t.length; y++) 
        {
            if(t[i] === t[y])
            {
                console.log("For the input : " + t + "\nThe duplicate element is " + t[y]);
            }
        }
    }
}

DupAr(input);