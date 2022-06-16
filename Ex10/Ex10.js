const input = [ 1, 2, 3, 4, 10, 11 ];

const SumArray = () =>
{
    let sum = 0;
    input.forEach((element) => {
        sum += element;
    });
    return sum;
}

console.log(SumArray());