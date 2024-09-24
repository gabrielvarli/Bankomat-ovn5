import { useState } from "react";

const TransferForm = ({ transfer, handleTransfer }) => {
    // Hantera insatt eller uttaget belopp
    const [amount, setAmount] = useState("");

    // Hantera inskickningen av formuläret
    const handleSubmit = (e) => {
        e.preventDefault();
        handleTransfer(amount); // Skickar över beloppet till `handleTransfer`-funktionen i ATM-komponenten
        setAmount(""); // Tömmer input-fältet efter att insättning/uttag är genomfört
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ange belopp att {transfer === "deposit" ? "sätta in" : "ta ut"}:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    min="1"
                />
            </label>
            <button type="submit">Bekräfta {transfer === "deposit" ? "insättning" : "uttag"}</button>
        </form>
    );
};

export default TransferForm;


