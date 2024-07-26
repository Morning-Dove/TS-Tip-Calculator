# Tip Calculator

This is a simple Tip Calculator built using React and TypeScript. The application allows users to input a bill amount and a tip percentage, then calculates and displays the tip amount and the total bill amount based on the user's inputs.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Functions](#functions)
- [Styles](#styles)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Morning-Dove/TS-Tip-Calculator.git
    cd TS-Tip-Calculator
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

To use the Tip Calculator:

1. Enter the bill amount in the "Bill Amount" input field.
2. Enter the tip percentage in the "Tip Percentage" input field.
3. Click the "Calculate Total" button.
4. The tip amount and total bill amount will be displayed below the form.

## Components

### `Calculator`

The `Calculator` component is the main functional component for the Tip Calculator. It includes input fields for the bill amount and tip percentage, a submit button, and displays the calculated results.

#### State Variables
- `billAmount`: Holds the value of the bill amount input field.
- `tipPercentage`: Holds the value of the tip percentage input field.
- `submitted`: A boolean flag to indicate whether the form has been submitted.

#### Functions

- **`handleBillAmount`**
  - **Purpose:** Handles changes in the bill amount input field.
  - **Parameters:** `event` - The change event from the input field.

- **`handleTipPercentage`**
  - **Purpose:** Handles changes in the tip percentage input field.
  - **Parameters:** `event` - The change event from the input field.

- **`handleSubmit`**
  - **Purpose:** Handles form submission, prevents default behavior, and sets the `submitted` flag to true.
  - **Parameters:** `event` - The form submission event.

## Functions

### `tipAmount`

- **Purpose:** Calculates the tip amount based on the bill amount and tip percentage.
- **Type:** `number`
- **Formula:** `billAmountNum * (tipPercentageNum / 100)`

### `total`

- **Purpose:** Calculates the total amount including the bill amount and tip amount.
- **Type:** `number`
- **Formula:** `billAmountNum + tipAmount`
