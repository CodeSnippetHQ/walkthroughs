// https://codesnippet.io/factorialize-a-number/

function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    
    // Using recursive method
    return num * factorialize(num - 1);
    // First iteration: 5 * (5-1) => 20
    // Second iteration: 20 * (4-1) => 60
    // Third iteration: 60 * (3-1) => 120
    // Fourth iteration: 120 * (2-1) => 120
};

factorialize(5) // Outputs: 120
