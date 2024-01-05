function generateCompoundColors() {
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

    // Generate a random base hue and set saturation and lightness
    const baseHue = Math.floor(Math.random() * 360);
    const saturation = 70; // Slightly desaturated for a more compound feel
    const lightness = 50; // Normal lightness

    // Create an array to hold five compound colors
    let colors = [baseHue];

    // Calculate hues for two adjacent (analogous) colors
    colors.push((baseHue + 30) % 360); // Analogous color 1
    colors.push((baseHue - 30 + 360) % 360); // Analogous color 2

    // Calculate hues for two complementaries of the analogous
    colors.push((colors[1] + 180) % 360); // Complementary of analogous 1
    colors.push((colors[2] + 180) % 360); // Complementary of analogous 2

    // Convert all hsl colors to hex and assign them to inputs
    colors.forEach((hue, index) => {
        let color = hslToHex(hue, saturation, lightness);
        let colorInput = document.querySelector(`#color-input-${index + 1}`);
        if (colorInput) colorInput.value = color;

        let colorSample = document.querySelector(`#color-sample-${index + 1}`);
        if (colorSample) colorSample.style.backgroundColor = color;
    });
}

// Add event listener to the button
document.getElementById('compuestos').addEventListener('click', generateCompoundColors);
