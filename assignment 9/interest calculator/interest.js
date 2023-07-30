function calculateInterest() 
{
    const cost = parseFloat(document.getElementById("cost").value);
    const time = parseFloat(document.getElementById("time").value);
    
    if (isNaN(cost) || isNaN(time)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers for cost and time.";
    } 
    else 
    {
        const rateOfInterest = 0.07; // Assuming an interest rate of 5%
        const simpleInterest = (cost * rateOfInterest * time);
        const totalAmount = (cost + parseFloat(simpleInterest));
        document.getElementById("result").innerHTML = `Simple Interest: Rs.${simpleInterest}<br>Total Amount: Rs.${totalAmount}`;
    }
}