
function addition()
{
    var a=Number(document.getElementById("input1").value);
    var b=Number(document.getElementById("input2").value);
    var p=a+b;
    document.getElementById("output").value=p;
}
function subtraction()
{
    var a=Number(document.getElementById("input1").value);
    var b=Number(document.getElementById("input2").value);
    var p=a-b;
    document.getElementById("output").value=p;
}
function multiplication()
{
    var a=Number(document.getElementById("input1").value);
    var b=Number(document.getElementById("input2").value);
    var p=a*b;
    document.getElementById("output").value=p;
}
function division()
{
    var a=Number(document.getElementById("input1").value);
    var b=Number(document.getElementById("input2").value);
    var p=a/b;
    document.getElementById("output").value=p;
}