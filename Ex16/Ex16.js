let max = prompt("Give me the max number");

while(!max)
{
    max = prompt("Give me the max number");
}

const rand = Math.floor(Math.random() * max);
let guess = parseInt(prompt("Guess the magic number"));
let i = 1;

while(guess !== rand)
{
    if(guess > rand)
    {
        guess = prompt("Too high! Guess again");
    }
    else if(guess < rand)
    {
        guess = prompt("Too low! Guess again");
    }

    if(guess.toString().toLowerCase() == 'q')
    {
        break;
    }
    else
    {
        i++;
        guess = parseInt(guess);
    }
}

console.log(`It tooks you ${i} try to guess the number ${rand}`);