"use client"
import React, { useEffect, useState } from 'react';
import { Box } from '@/lib/mui';
import { LinkCard } from '$/Components';
import { hent } from '@/api';
import Link from 'next/link';

export default function LinksSide() {
    const [error, setError] = useState(false)
    const [message, setMessage] = useState([])
    const [response, setResponse] = useState('')

    useEffect(() => {
        hent(setMessage, setError, 'links')
        console.log(message)
    }, [response])

    const sx = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'row wrap',
        m: 2
    }
    /**/

    const linkListe = () => {
        return (
            <Box>
                <Box sx={sx}>
                    {message?.map((list) => {
                        return (
                            <Box key={list.id}>
                                <Box>
                                    {list.navn}
                                </Box>
                                {list.linkliste.map((link, i) => {
                                    return (
                                        <Link href={link.link} key={i} >
                                            <LinkCard billede={`http://www.google.com/s2/favicons?domain=${link.link}`} titel={link.navn}>
                                                {link.link}
                                                <br />
                                                {link.beskrivelse}
                                            </LinkCard>
                                        </Link >
                                    )
                                })}
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        )
    }

    return (
        <Box>
            {
                !error ? linkListe() : error
            }
        </Box>
    )
}