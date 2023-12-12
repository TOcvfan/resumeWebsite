'use client'
import React, { useEffect, useState } from 'react';
import { Box } from '@/lib/mui'
import { useAppContext } from '$/AppContext';
import { Title, Countdown, CustomizedButtons } from '$/Components';
import Link from 'next/link';

export default function MyQueens() {
    const { isLoggedIn, ikkeOnline, user, language, sprogfunktion } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }
    const knapper = [
        { navn: sprogting('profil', 'profile'), link: '/profil' },
        { navn: sprogting('Gæstebog', 'Guestbook'), link: '/gaestebog' },
        //{ navn: 'Ønskelister', link: '/onsker' },
        //{ navn: 'Mine ønsker', link: '/mine_onsker' },
    ];
    const [vis, setVis] = useState(false)
    //const user = authentication.currentUserValue;
    useEffect(() => {
        if (user.role === "FISSE" && isLoggedIn) {
            setVis(true)
        }
    }, [isLoggedIn, user])

    const sx = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'row wrap',
        m: 2
    }

    return (
        <Box>
            {vis ?
                (<Box>
                    <Title>{`Hello my love ${user?.fornavn}`}</Title>
                    <Countdown year={2023} month={11} date={4} hour={22} minute={0} titel='For us to meet' />
                </Box>)
                : <Title>{ikkeOnline(language)}</Title>
            }
            <Box sx={{ sx }}>
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
            </Box>
        </Box>
    )
}