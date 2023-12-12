'use client'
import React from 'react';
import { AppBar, Box, Container, Toolbar } from '@/lib/mui';
import { da, enGB } from 'date-fns/locale'
import { format } from 'date-fns'

export default function Top({ navn, dato, sprog, lan }) {
    const result = format(new Date(dato), "do MMMM yyyy", {
        locale: sprog(lan, da, enGB)
    })

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {navn}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navn}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {result}
                    </Box>
                </Toolbar>
            </Container>

        </AppBar>
    )
}