function calculateArea() {
    var height = parseFloat(document.getElementById("height").value);
    var breadth = parseFloat(document.getElementById("breadth").value);
    var area =0.5 * height * breadth;

    if (isNaN(area)) {
        document.getElementById("result").value = "Please enter valid numbers.";
    } else {
        document.getElementById("result").value = "Area: " + area.toFixed(2);
    }
}