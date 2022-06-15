let s = "05:00 PM";
let hs = s.substring(0,2);
let h = Number.parseInt(hs);
let output = s.substring(0,5);

if (s.includes("PM")) 
{
    if(h !== 12)
    {
        h += 12;
    }
}
else
{
    if(h === 12)
    {
        h = "00";
    }
    else
    {
        h = "0" + h;
    }
}
output = output.replace(hs, h.toString());
console.log(output);