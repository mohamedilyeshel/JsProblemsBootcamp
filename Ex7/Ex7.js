const input = [8,7,2,5,3,1];

const PairFound = (target) =>
{
   let i = 0;
   let isFound = false;

   while(i < input.length)
   {
        let y = i + 1;
        while(y < input.length)
        {
            if(input[i] + input[y] === target)
            {
                console.log(`Pair found (${input[i]} , ${input[y]})`);
                if(isFound == false)
                {
                    isFound = true;
                }
            }
            y++;
        }
        i++;
   }

   if(isFound == false)
   {
        console.log(`Pair not found`);
   }
}

PairFound(16);