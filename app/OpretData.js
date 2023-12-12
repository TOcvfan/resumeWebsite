"use client"
import React, { createContext, useState, useContext } from 'react';

const Opret = createContext();

export const OpretData = ({ children }) => {
    const [dyr, setDyr] = useState({
        kat: false,
        hund: false,
        fisk: false,
        fugl: false,
        edderkop: false,
        skildpadde: false,
        slange: false,
        ingen: false
    });
    const [data, setData] = useState({
        brugernavn: "",
        fornavn: "",
        efternavn: "",
        email: "",
        password: "",
        sprog: "",
        foedselsdag: new Date(),
        land: '',
        sex: "female",
        role: "",
        forhold: "",
    });
    const value = {
        data,
        setData,
        dyr,
        setDyr
    };
    return <Opret.Provider value={value}>{children}</Opret.Provider>;
};

export const useOpretData = () => useContext(Opret)