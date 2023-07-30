function calculateArea() {
    var radius = parseFloat(document.getElementById('radius').value);
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById('result').value = `Area of the circle: ${area}`;
  }