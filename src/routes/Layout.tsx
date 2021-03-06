import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import modern from "../img/modern.jpg";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const StyledLayoutWrapper = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)
    ), url(${modern});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const Layout = (): JSX.Element => {
    return (
        <StyledLayoutWrapper>
            <Navbar />
            <Box 
                sx={{
                    background: "white",
                    flexGrow: 1,
                    maxWidth: 800,
                    width: "100%",
                    marginX: "auto"
                }}
                >
                    <Outlet />
            </Box>
        </StyledLayoutWrapper>
    );
};


