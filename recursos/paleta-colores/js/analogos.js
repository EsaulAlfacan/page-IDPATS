function generateAnalogousColors() {
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

    // Generates a random hue value
    const baseHue = Math.floor(Math.random() * 360);
    const saturation = 100; // Full saturation
    const lightness = 50; // Normal lightness

    // Calculate analogous colors (30 degrees apart)
    const analogousColors = [0, -30, 30].map((angle) => {
        const hue = (baseHue + angle + 360) % 360; // Ensure hue is between 0 and 359
        return hslToHex(hue, saturation, lightness);
    });

    // Assign the analogous colors to the inputs
    document.querySelectorAll('.color-input').forEach((input, index) => {
        input.value = analogousColors[index % analogousColors.length]; // Cycle through analogous colors
        const colorSample = document.querySelector(`#color-sample-${index + 1}`);
        if (colorSample) {
            colorSample.style.backgroundColor = input.value;
        }
    });
}

// Add event listener to the button
document.getElementById('analogos').addEventListener('click', generateAnalogousColors);
