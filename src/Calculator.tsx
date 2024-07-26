
import React, { useState } from 'react';
import styles from './Calculator.module.css';


/**
 * A functional React component that calculates the tip amount and total bill
 * based on user input for bill amount and tip percentage.
 */
const Calculator: React.FC = () => {
    // State variables for user inputs and submission status
    const [billAmount, setBillAmount] = useState("");
    const [tipPercentage, setTipPercentage] = useState("");
    const [submitted, setSubmitted] = useState<boolean>(false);


    /**
     * Handles changes in the bill amount input field.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the input field.
     */
    const handleBillAmount = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBillAmount(event.target.value);
    };


    /**
     * Handles changes in the tip percentage input field.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the input field.
     */
    const handleTipPercentage = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTipPercentage(event.target.value);
    };


    /**
     * Handles form submission.
     * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };


    // Convert string inputs to numbers
    const billAmountNum = parseFloat(billAmount);
    const tipPercentageNum = parseFloat(tipPercentage);

    // Calculate the tip amount and total
    const tipAmount = billAmountNum && tipPercentageNum ? billAmountNum * (tipPercentageNum / 100) : 0;
    const total = billAmountNum && tipPercentageNum ? billAmountNum + tipAmount : 0;

    return (
        <div className={styles.calculator}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputFields}>
                    <label htmlFor='billAmount'>Bill Amount: </label>
                    <input
                        type="number"
                        id="billAmount"
                        value={billAmount}
                        onChange={handleBillAmount}
                        placeholder='Enter Bill Amount Here...'
                    />
                </div>
                <div className={styles.inputFields}>
                    <label htmlFor='tipPercentage'>Tip Percentage: </label>
                    <input
                        type="number"
                        id="tipPercentage"
                        value={tipPercentage}
                        onChange={handleTipPercentage}
                        placeholder='Enter Tip Percentage Here...'
                    />
                </div>
                <div>
                    <button type='submit'>Calculate Total</button>
                </div>
            </form>
            {submitted && (
                <div className={styles.displayResults}>
                    <p>Bill Amount: ${billAmountNum.toFixed(2)}</p>
                    <p>Tip Percentage: {tipPercentageNum}%</p>
                    <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
                    <p>Total: ${total.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default Calculator;