// Exports functions in order to be used in other JS files
module.exports = {

    calculator: function(weight, height) {

        // BMI is calculated
        var bmi = weight / Math.pow(height, 2);
    
        // BMI is rounded
        bmi = Math.round(bmi);
    
        // Base interpretation
        var interpretation = `Your BMI is ${bmi}, so you `;
    
        // Add additional info based on body mass index
        if (bmi > 24.9) {
            interpretation += "are overweight.";
        }
        else if (bmi <= 24.9 && bmi >= 18.5) {
            interpretation += "have a normal weight.";
        }
        else {
            interpretation += "are underweight.";
        }
    
        return interpretation;
    
    }    
};
