import { Container, Grid } from "@mui/material";
import { Chat } from "./Chat";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="AppContainer">
            {/* Conainter will center content horizontally */}
            <Container maxWidth="md">
                <NavBar />
                <Outlet />
            </Container>
        </div>
    )
}

export default App;
