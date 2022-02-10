/*FORST NAME*/
function firstName(fname)
{
var fName = ^[A-Z]{1}[a-z]{1,}$;
if(text.value.match(fName))
    {
    return (true);
    } else {
        alert("Please Match Required Format");
        return false;
    }
}
/*LAST NAME*/
function lirstName(text)
{
var lname = ^[A-Z]{1}[a-z]{1,}$;
if(text.value.match(lname))
    {
    return (true);
    } else {
        alert("Please Match Required Format");
        return false;
    }
}
/*PHONE NUMBER*/
function phoneNumber(text)
{
var pnum = [0-9]{3}-[0-9]{3}-[0-9]{4};
if(text.value.match(pnum))
    {
    return (true);
    } else {
        alert("Please Match Required Format");
        return false;
    }
}