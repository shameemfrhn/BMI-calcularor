document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height values.");
            return;
        }

        const bmi = calculateBodyMassIndex(weight, height);
        const resultElement = document.getElementById("result");
        resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    }

    function calculateBodyMassIndex(weight, height) {
        // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
        const heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    }
});
