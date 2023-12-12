"use client"
import React, { useState } from "react";
import { Box } from "@/lib/mui";
import { Title, Tabel, CustomizedButtons } from "$/Components";
import { da, enGB } from 'date-fns/locale'
import { format, parseISO } from 'date-fns'
import { FaUserEdit } from 'react-icons/fa'
import { useAppContext } from "$/AppContext";
import RedigerProfil from "./rediger";
import withAuth from "../withAuth";

const Profil = () => {
    const { language, sprogfunktion, user, isLoggedIn, ikkeOnline } = useAppContext();
    const { foedselsdag, brugernavn, fornavn, mellemnavn, efternavn, forhold, sex, sprog, email, dyr, land } = user;
    const [response, setResponse] = useState('')
    const [rediger, setRediger] = useState(false);

    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }

    //console.log(foedselsdag)
    const foedsel = (dato) => {
        const foedselsdag = parseISO(dato);
        const resultat = format(new Date(foedselsdag), "do MMMM yyyy", {
            locale: sprogting(da, enGB)
        })
        return resultat
    }
    const dato = isLoggedIn ? foedselsdag : (1979, 10, 27)
    const result = isLoggedIn ? foedsel(dato) : 'null'
    //console.log(result)
    const sprogfuldtext = sprog === 'Dk' ? 'Dansk' : 'English';

    const landFlag = () => {
        const flag = isLoggedIn ? land.toLowerCase() : 'dk';
        return (
            <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${flag}.png`}
                srcSet={`https://flagcdn.com/w40/${flag}.png 2x`}
                alt={flag}
            />
        )
    }

    const bruger = [
        { id: 'navn', minWidth: 70 },
        {
            id: 'value',
            minWidth: 75,
        },
        /*{
            id: 'rediger',
            minWidth: 70,
            align: 'right',

        }*/
    ];

    const brugernavntxt = sprogting('Brugernavn', 'Username');
    const fornavntxt = sprogting('Fornavn', 'Firstname');
    const mellem = sprogting('Mellemnavn', 'Middlename');
    const efter = sprogting('Efternavn', 'Lastname')
    const forholdtxt = sprogting('Forhold', 'Relationship')
    const mail = 'E-mail';
    const foedseltext = sprogting('Fødselsdag', 'Birthday');
    const sextxt = sprogting('Køn', 'Gender');
    const brugersprogtxt = sprogting('Sprog', 'Language');
    const landtxt = sprogting('Land', 'Country');

    const brugerArray = [
        { navn: brugernavntxt, value: brugernavn },
        { navn: fornavntxt, value: fornavn },
        { navn: mellem, value: mellemnavn },
        { navn: efter, value: efternavn },
        { navn: forholdtxt, value: forhold },
        { navn: mail, value: email },
        { navn: foedseltext, value: result },
        { navn: sextxt, value: sex },
        { navn: brugersprogtxt, value: sprogfuldtext },
        { navn: landtxt, value: landFlag() },
    ];

    const centrer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column wrap'
    }

    const dyrArray = []
    const tjekOmErSandt = () => {
        for (let key in dyr) {
            if (dyr[key]) {
                dyrArray.push(key)
            }
        }
    }

    const visning = () => {
        tjekOmErSandt()
        return (
            <Box>
                {rediger ?
                    <RedigerProfil /> :
                    <Box sx={centrer}>
                        <Title>{sprogting('Din profil', 'Your profile')}</Title>
                        <Box>
                            <CustomizedButtons onClick={() => setRediger(true)}>
                                Rediger&nbsp;<FaUserEdit />
                            </CustomizedButtons>
                        </Box>
                        <Tabel width='65%' rows={brugerArray} columns={bruger} />
                        <Box>
                            {dyrArray.map((d, i) => {
                                return (
                                    <Box key={i}>
                                        {d}
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>}
            </Box>
        )
    }

    return (
        isLoggedIn ? visning() : <Title>{ikkeOnline(language)}</Title>
    )
}
export default withAuth(Profil);