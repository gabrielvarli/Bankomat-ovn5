# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Skapa en bankomat! 🏧

Skapa en ATM-komponent som du kan visa/dölja med hjälp av ett knapptryck i App.jsx.

När ATM-komponenten renderas, skriv ut ett meddelande till användaren t.ex "ATM is now ready to use". När ATM-komponenten döljs, skriv ut "ATM shutting down...".

Skapa ett saldo på kontot där användare kan se hur mycket pengar hen har tillgängligt.

Gör det möjligt att göra insättningar genom att välja ett belopp och klicka på en knapp. Öka saldot med det valda beloppet.

Användare ska kunna dra ut pengar genom att skriva in ett belopp och klicka på en knapp.
Vid uttag får beloppet på uttaget ej överstiga det nuvarande saldot.

Om användaren ej valt ett belopp, skriv ut ett meddelande till användaren t.ex "Please select amount".

Om användaren valt ett belopp och utdraget lyckas, skriv ut ett meddelande t.ex “Successfully withdrew (amount) ! ” till användaren.

Extra-uppgift:

Gör det möjligt för användaren att välja valuta vid uttag, (t.ex euro) med stöd för valutaväxling. T.ex 1 EURO = 11 kr. Så ett uttag på 10 EURO drar 110 SEK från kontots saldo. Saldot ska stå i svenska kronor (SEK).
