----

# Calculator App

A simple, stylish calculator application built using HTML, CSS, and JavaScript. This calculator supports basic arithmetic operations, including addition, subtraction, multiplication, and division, as well as percentage calculations and sign toggling.

**Note:** To run the app, ensure you attach the `style.css` file to the `index.html` file.

If you like my work and want to support more projects like this, consider funding me on [Buy Me a Coffee](https://buymeacoffee.com/akalanka3002) or collaborating with me.

## Features

- **Basic Arithmetic Operations:** Addition, subtraction, multiplication, division
- **Percentage Calculation**
- **Toggle Sign for Numbers**
- **Clear Input (AC)**
- **Remove Last Character (⌫)**
- **Stylish UI with Tailwind CSS and Font Awesome Icons**
- **Smooth Button Animations:** Buttons animate on press, providing a tactile feedback experience
- **Error Handling Animation:** Flashing effect for error messages

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Damika3002/ios-calculator
   ```

2. Navigate into the project directory:

   ```bash
   cd ios-calculator
   ```

3. Open `index.html` in your browser to see the calculator in action.

## Usage

- Click the number buttons to enter numbers.
- Click the arithmetic operation buttons (`+`, `-`, `x`, `÷`) to perform operations.
- Click the `=` button to calculate the result.
- Use the `AC` button to clear the display.
- Use the `⌫` button to remove the last character.
- Use the `+/-` button to toggle the sign of the current number.
- Use the `%` button to convert the current number into a percentage.

## Customization

### Changing Styles

- **CSS**: Customize the appearance of the calculator by modifying the `style.css` file. You can change the colors, button sizes, and other styles to match your preferences.

### Adding or Removing Features

- **HTML**: Update the `index.html` file to add or remove buttons and change their functionalities.
- **JavaScript**: Modify the `script` section in `index.html` to adjust the logic or add new features.

### Example Customizations

- To change button colors, adjust the `.btn`, `.b1`, `.b2`, and `.b3` classes in `style.css`.
- To change the layout, modify the grid settings in the `.buttons` class in `style.css`.

## Cool Enhancements

### Button Animations

Add a smooth scaling effect when buttons are clicked to give a responsive feel. You can achieve this with CSS:

```css
.btn {
    transition: transform 0.1s ease, opacity 0.1s ease;
}

.btn:active {
    transform: scale(0.95);
    opacity: 0.7;
}
```

### Error Flash Animation

When an error occurs, briefly flash the display background to grab the user’s attention:

```css
@keyframes flash {
    0% { background-color: #ff6f00; }
    50% { background-color: #1c1c1c; }
    100% { background-color: #1c1c1c; }
}

.display.error {
    animation: flash 0.5s;
}
```

In your JavaScript, add the `error` class to the display element when an error occurs:

```javascript
function calculateResult() {
    let expression = document.querySelector('.display').value;

    // Replace symbols with JavaScript operators
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');

    try {
        let result = eval(expression);
        document.querySelector('.display').value = result;
        document.querySelector('.display').classList.remove('error'); // Remove error class if present
    } catch (error) {
        document.querySelector('.display').value = "Error";
        document.querySelector('.display').classList.add('error'); // Add error class for animation
    }
}
```

## Credits

- **[Font Awesome](https://fontawesome.com)**: Special thanks to Font Awesome for providing the icons used in the calculator. Their extensive icon library greatly enhances the visual appeal of this application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

----
