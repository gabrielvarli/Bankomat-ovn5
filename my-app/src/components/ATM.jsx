import { useEffect, useState, useRef } from "react";
import TransferForm from "./TransferForm";
import { ToastContainer, toast } from "react-toastify"; // Om du vill använda toast för meddelanden
import 'react-toastify/dist/ReactToastify.css';

const ATM = () => {
    const [balance, setBalance] = useState(1); // Tillgängligt saldo
    const [currency, setCurrency] = useState("SEK"); // Valuta
    const [transfer, setTransfer] = useState(""); // För insättning/uttag
    const hasMountedRef = useRef(false);

    // Körs när komponenten mountas och unmountas
    useEffect(() => {
        console.log("ATM is now ready to use");
        return () => {
            console.log("ATM shutting down...");
        };
    }, []);

    // Uppdaterar saldot om valutan ändras
    useEffect(() => {
        if (hasMountedRef.current) {
            if (currency === "SEK") {
                setBalance((prevState) => prevState * 11); // Exempelvis konvertering
            } else {
                setBalance((prevState) => prevState / 11);
            }
        } else {
            hasMountedRef.current = true;
        }
    }, [currency]);

    // Toggla mellan SEK och EUR
    const toggleCurrency = () => {
        setCurrency((prevCurrency) => (prevCurrency === "SEK" ? "EUR" : "SEK"));
    };

    // Hantera insättning eller uttag
    const handleTransfer = (amount) => {
        if (transfer === "deposit") {
            setBalance((prevState) => {
                const newBalance = parseInt(prevState) + parseInt(amount); // Insättning
                toast.success(`Successfully Deposited ${amount} ${currency}!`);
                return newBalance;
            });
        } else {
            setBalance((prevState) => {
                const newBalance = parseInt(prevState) - parseInt(amount);
                if (newBalance < 0) {
                    toast.error("Please select amount balance for this transaction."); // Uttag om inte tillräckligt saldo
                    return prevState;
                } else {
                    toast.success(`Successfully Withdrew ${amount} ${currency}!`);
                    return newBalance; // Uttag
                }
            });
        }
    };

    return (
        <div>
            <ToastContainer />
            <h2>ATM</h2>
            <button onClick={toggleCurrency}>Toggla valuta ({currency})</button>

            <p>Nuvarande valuta: {currency}</p>
            <p>Nuvarande saldo: {currency === "EUR" ? (balance / 11).toFixed(2) : balance} {currency}</p> {/* Visar tillgängligt saldo */}

            {/* Form för insättning eller uttag */}
            <p>Välj insättning eller uttag:</p>
            <label htmlFor="withdrawal">
                Uttag
                <input
                    type="radio"
                    id="withdrawal"
                    name="transfer"
                    onChange={(e) => setTransfer(e.target.id)}
                />
            </label>
            <label htmlFor="deposit">
                Insättning
                <input
                    type="radio"
                    id="deposit"
                    name="transfer"
                    onChange={(e) => setTransfer(e.target.id)}
                />
            </label>

            {transfer && (
                <TransferForm
                    transfer={transfer}
                    handleTransfer={handleTransfer} // Skickar funktionen för att hantera överföring
                />
            )}
        </div>
    );
};

export default ATM;
