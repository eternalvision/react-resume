import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

import {
    DarkModeProvider,
    DarkModeContext,
    LanguageProvider,
    LanguageContext,
} from "./context";

import * as Hooks from "./hooks";
import * as UI from "./ui";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DarkModeProvider Hooks={Hooks}>
            <LanguageProvider Hooks={Hooks}>
                <App
                    Context={{ DarkModeContext, LanguageContext }}
                    Hooks={Hooks}
                    UI={UI}
                />
            </LanguageProvider>
        </DarkModeProvider>
    </React.StrictMode>,
);
