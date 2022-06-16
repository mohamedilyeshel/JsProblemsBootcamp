const aliceRating = [5, 8, 8];
const bobRating = [6, 8, 9];

const Score = () =>
{
    const score = [0,0];

    for(let i = 0; i < 3; i++)
    {
        if(aliceRating[i] > bobRating[i])
        {
            score[0] += 1; 
        }
        else if(aliceRating[i] < bobRating[i])
        {
            score[1] += 1;
        }
    }

    return score;
}

console.log("Alice's Score " , ...Score() , " Bob's Score");