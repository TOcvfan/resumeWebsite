"use client"
import React, { useEffect, useState } from 'react';
import { Box } from '@/lib/mui';
import { hent } from '@/api';
import Link from 'next/link';
import { CustomizedButtons, LinkCard } from '$/Components';
import NytLink from './nytLinkModal';

export default function Data({ sprog }) {
    const [error, setError] = useState(false)
    const [message, setMessage] = useState([])
    const [response, setResponse] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(!openModal);

    const knapper = [
        { navn: sprog('profil', 'profile'), link: '/profil' },
        { navn: sprog('Gæstebog', 'Guestbook'), link: '/gaestebog' },
    ];

    useEffect(() => {
        hent(setMessage, setError, 'uddlinks')
    }, [response])

    const sx = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'row wrap',
        m: 2
    }

    const linkListe = () => {
        return (
            <Box>
                <Box sx={sx}>
                    {message?.map((list) => {
                        return (
                            <Link href={list.link} key={list.id}>
                                <LinkCard billede={`http://www.google.com/s2/favicons?domain=${list.link}`} titel={list.navn}>
                                    {list.link}
                                    <br />
                                    {list.beskrivelse}
                                </LinkCard>
                            </Link>
                        )
                    })}
                </Box>
                <Box sx={sx}>
                    {
                        knapper.map((k, i) => {
                            return (
                                <Link href={k.link} key={i}>
                                    <CustomizedButtons width={100}>
                                        {k.navn}
                                    </CustomizedButtons>
                                </Link>
                            )
                        })
                    }
                    <NytLink modal={openModal} handleModal={handleOpen} setResponse={setResponse} />
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