const input = [6, 0, 8, 2, 3, 0, 4, 0, 1];

const NomberOccZero = () =>
{
    let occ = 0;

    input.forEach((element) => {
        if(element == 0)
        {
            occ++;
        }
    });

    return occ;
}

const RemoveZero = () =>
{
    for (let i = 0; i < input.length; i++) 
    {
        if(input[i] == 0)
        {
            input.splice(i,1);
        }
    }
}

const AddToTheEnd = (occ) =>
{
    for(let i = 0; i < occ; i++)
    {
        input.push(0);
    }
}

let nombreZ = NomberOccZero();
RemoveZero();
AddToTheEnd(nombreZ);
console.log(input);