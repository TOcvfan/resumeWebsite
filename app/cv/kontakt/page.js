"use client"
import React, { useState, useEffect } from 'react';
import { Box } from '@/lib/mui';
import tilbagepil from '@/media/tilbagepil.png';
import { useAppContext } from '$/AppContext';
import { ButtonIcon, Title } from '$/Components';
import { checkServer } from '@/api';
import { chango } from '$/fonts';
import KontaktFormular from './form';
import { isMobile } from 'react-device-detect';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Kontakt = () => {
    const { language, sprogfunktion } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }
    const router = useRouter()

    const [error, setError] = useState(true)
    const [message, setMessage] = useState(true)

    useEffect(() => {
        checkServer(setMessage, setError)
    }, [])

    console.log(error)
    const errormessage = sprogting('Beklager men serveren er nede, prøv igen senere ellers kontakt mig på ', 'Sorry but the server is down, try again later otherwise contact me on ');
    const contactMail = <a href="mailto:christian@hammervig.dk">christian@hammervig.dk</a>
    const tilbage = sprogting('Tilbage', 'Back');
    const serverError = <Box sx={{ textAlign: 'center', textShadow: '-1px 0px 0px black' }}>
        <Title className={chango.className} color='#e1c043' size={10}>{errormessage}{contactMail}</Title>
    </Box>;

    const Visning = () => error ? serverError : <KontaktFormular setError={setError} setMessage={setMessage} error={error} />;
    const mobil = isMobile ? { justifyContent: 'space-between' } : { with: '60%' };

    return (
        <Box>
            <Visning />
            {message}
            <Box sx={{
                maxWidth: '800px',
                display: 'flex',
                margin: 'auto',
                alignItems: 'center',
                mobil,
                mt: 2,
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    flexDirection: 'column',
                    position: 'relative',
                    mr: 'auto',
                    ml: 1,

                }}>
                    <ButtonIcon onClick={() => router.back()}><Image src={tilbagepil} alt='tilbage' width={60} /></ButtonIcon>
                    <Box>{tilbage}</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Kontakt;
