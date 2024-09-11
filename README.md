# triangle-calculate
triangle-calculator/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triangle Calculator</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Triangle Calculator</h1>
    <form id="triangleForm">
        <label for="sideA">Side A:</label>
        <input type="number" id="sideA" required>
        <br>
        <label for="sideB">Side B:</label>
        <input type="number" id="sideB" required>
        <br>
        <label for="sideC">Side C:</label>
        <input type="number" id="sideC" required>
        <br>
        <button type="submit">Calculate</button>
    </form>
    <div id="result"></div>
    <script src="js/script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

form {
    margin: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    padding: 8px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

#result {
    margin-top: 20px;
    font-weight: bold;
}
const form = document.getElementById('triangleForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    // Input validation (check if it's a valid triangle)
    if (sideA <= 0 || sideB <= 0 || sideC <= 0 || sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
        resultDiv.textContent = "Invalid input. Please enter valid side lengths for a triangle.";
        return;
    }

    // Calculate area and perimeter
    const s = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    const perimeter = sideA + sideB + sideC;

    // Display results
    resultDiv.textContent = `Area: ${area.toFixed(2)} square units\nPerimeter: ${perimeter.toFixed(2)} units`;
});
