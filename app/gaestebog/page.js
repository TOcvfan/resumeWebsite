'use client'
import React, { useEffect, useState } from 'react';
import { hent } from '@/api';
import { Box, Grid, Paper } from '@/lib/mui';
import { useAppContext } from '$/AppContext';
import { Title } from '$/Components';
import { styled } from '@mui/material/styles';
import Top from './top';
import Bog from './form';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: 'wheat',
    backgroundColor: 'blue',
    height: 150,
    overflow: 'scroll'
}));

export default function Gaestebog() {
    const { isLoggedIn, language, setUser, user, sprogfunktion } = useAppContext();
    const [message, setMessage] = useState([])
    const [response, setResponse] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        hent(setMessage, setError, 'gaestebog')
        console.log(response)
    }, [response])

    return (
        <Box>
            <Title>Gæstebog</Title>
            <Grid item xs={4}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexFlow: 'column wrap',
                        gridTemplateColumns: { md: '1fr' },
                        gap: 2,
                    }}
                >
                    {message?.map((besked) => (
                        <Box key={besked.id} sx={{
                            width: '85%',
                        }}>
                            <Top navn={besked.navn} dato={besked.dato} sprog={sprogfunktion} lan={language} />
                            <Item elevation={12}>
                                <Title size={10} color='white'>{besked.titel}</Title>
                                {besked.tekst}
                            </Item>
                        </Box>
                    ))}
                </Box>
            </Grid>
            {response === 'ok' ? response : <Bog setResponse={setResponse} sprog={sprogfunktion} lan={language} />}
        </Box>
    )
}