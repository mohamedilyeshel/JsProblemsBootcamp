let s = "01:00 PM";
let hs = s.substring(0,2);
let h = Number.parseInt(hs);
let output = s.substring(0,5);

if (s.includes("PM")) 
{
    if(h !== 12)
    {
        h += 12;
    }
    output = output.replace(hs, h.toString());
}
else
{
    if(h === 12)
    {
        h = "00";
        output = output.replace(hs, h.toString());
    }
}
console.log(output);