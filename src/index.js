import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import your global styles (optional)
import App from "./App"; // Import the main App component

// This renders the App component inside the 'root' div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Your main App component */}
  </React.StrictMode>
);
