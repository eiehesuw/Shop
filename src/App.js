import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Application from "./index";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
    return (
        <BrowserRouter>
            <Application />
            <AppHeader />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App
