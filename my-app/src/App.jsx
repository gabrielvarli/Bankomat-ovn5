import "./App.css";
import { useState, useEffect } from "react";
import ATM from "./components/ATM";

function App() {
    const [showATM, setShowATM] = useState(false); // State för att toggla ATM
    const [message, setMessage] = useState(""); // State för att visa meddelande

    // useEffect to monitor ATM visibility changes
    useEffect(() => {
        if (showATM) {
            setMessage("ATM is now ready to use");  // Message when ATM is shown
        } else {
            setMessage("ATM shutting down...");  // Message when ATM is hidden
        }
    }, [showATM]);  // Dependency on showATM state

    return (
        <div>
            <h1>Välkommen till din Bank</h1>

            {/* Knapp för att toggla ATM-komponenten */}
            <button onClick={() => setShowATM((prevState) => !prevState)}>
                {showATM ? "Dölj" : "Visa"} Bankomat
            </button>

            {/* Visar meddelanden */}
            <p>{message}</p>

            {/* Conditional rendering av ATM-komponenten */}
            {showATM && <ATM />}
        </div>
    );
}

export default App;
