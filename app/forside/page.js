'use client'
import Image from 'next/image';
import { Box } from '@/lib/mui'
import { useAppContext } from '$/AppContext';
import paris from '@/media/welcome.jpg';
import { Title } from '$/Components';

export default function Forside() {
    const { isLoggedIn, language, setUser, user } = useAppContext();
    //const user = authentication.currentUserValue;
    return (
        <Box>
            <Title>Forside</Title>
            <Image src={paris} width={250} alt='paris' />
        </Box>
    )
}