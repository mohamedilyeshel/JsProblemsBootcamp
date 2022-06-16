const input = [1,2];

const LowestNumJumps = () =>
{
    let i = 0;
    let trys = 0;
    let isError = false;

    while(i < input.length-1)
    {
        if(input[i] > 1)
        {
            console.log(`From case ${i} jump to case `);

            let maxI = i+1;

            if(maxI == input.length-1)
            {
                i = maxI;
                trys++;
                console.log(`${i}. `);
                break;
            }

            for(let y = 2; y <= input[i]; y++)
            {
                if(i+y == input.length-1)
                {
                    maxI = i+y;
                    break;
                }

                if(input[i+y] > input[maxI])
                {
                    maxI = i+y;
                }
                else if (input[i+y] == input[maxI])
                {
                    if((i+y) > maxI)
                    {
                        maxI = i+y;
                    }
                }
            }

            i = maxI;
        }
        else if(input[i] == 1)
        {
            console.log(`From case ${i} jump to case `);
            i += 1;
        }
        else
        {
            console.log("From "+ i +" can't Jump and reach the end.");
            isError = true;
            break;
        }
        console.log(`${i}. `);
        trys++;
    }
    
    if(isError == false)
    {
        console.log("Jumps : " + trys);
    }
}

LowestNumJumps();