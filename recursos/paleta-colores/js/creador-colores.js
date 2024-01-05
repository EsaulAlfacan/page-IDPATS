// This function will be called once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to each color input field
    document.querySelectorAll('.color-input').forEach(function (input) {
        input.addEventListener('input', function () {
            // Extract the number from the input's ID to find the corresponding color-sample div
            var sampleId = 'color-sample-' + this.id.split('-').pop();
            var sampleDiv = document.getElementById(sampleId);

            // Check if the input value is a valid hex color
            var color = this.value.trim();
            var isValidColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);

            // Update the background color of the sample div if the color is valid
            if (isValidColor) {
                sampleDiv.style.backgroundColor = color;
            } else {
                // If the color is not valid, you could reset the background or handle the error as needed
                sampleDiv.style.backgroundColor = 'transparent';
            }
        });
    });
});
