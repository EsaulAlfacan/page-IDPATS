function generateFiveComplementaryColors() {
    // Function to convert HSL to HEX
    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0'); // Convert to Hex and format
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    // Generate a random base hue
    const baseHue = Math.floor(Math.random() * 360);
    const saturation = 100; // Full saturation
    const lightness = 50; // Normal lightness

    // Create an array to hold five complementary colors
    let colors = [];

    // Calculate hues for five colors (base, direct complementary, and three others)
    for (let i = 0; i < 5; i++) {
        // Calculate the hue for each color
        let hue = (baseHue + i * 72) % 360; // 72 degrees apart to distribute colors evenly
        colors.push(hslToHex(hue, saturation, lightness));
    }

    // Assign the generated colors to the inputs and their corresponding sample divs
    colors.forEach((color, index) => {
        let colorInput = document.querySelector(`#color-input-${index + 1}`);
        if (colorInput) colorInput.value = color;

        let colorSample = document.querySelector(`#color-sample-${index + 1}`);
        if (colorSample) colorSample.style.backgroundColor = color;
    });
}

// Add event listener to the button
document.getElementById('complementarios').addEventListener('click', generateFiveComplementaryColors);
