function generateMonochromaticColors() {
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

    // Generates a random base hue
    const baseHue = Math.floor(Math.random() * 360);
    const saturation = 100; // Full saturation

    // Generate variations in lightness for the monochromatic scheme (you can also vary saturation)
    const lightnessVariations = [20, 40, 60, 80, 100];

    // Create monochromatic color array
    const monochromaticColors = lightnessVariations.map(lightness => hslToHex(baseHue, saturation, lightness));

    // Assign the monochromatic colors to the inputs
    document.querySelectorAll('.color-input').forEach((input, index) => {
        input.value = monochromaticColors[index % monochromaticColors.length]; // Cycle through monochromatic colors
        const colorSample = document.querySelector(`#color-sample-${index + 1}`);
        if (colorSample) {
            colorSample.style.backgroundColor = input.value;
        }
    });
}

// Add event listener to the button
document.getElementById('monocromaticos').addEventListener('click', generateMonochromaticColors);
