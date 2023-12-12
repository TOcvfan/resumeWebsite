"use client"
import React from "react";
import { useAppContext } from '$/AppContext';
import Login from "$/Login";
import { Box } from "@/lib/mui";
import Title from "$/Components/title";

const LoginPage = () => {
    const { isLoggedIn, language, setLanguage, setIsLoggedIn, setUser } = useAppContext();
    const sporglan = language === "Dk"
    const sidesp = (dk, en) => sporglan ? dk : en;
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            mt: 2
        }}>
            <Title>{sidesp('Log ind på din konto', 'Log in to your account')}</Title>
            <Login lan={language} isLogggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} setLan={setLanguage} />
        </Box>
    );
};

export default LoginPage;