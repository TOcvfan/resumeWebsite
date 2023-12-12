'use client'
import Image from 'next/image';
import { Box } from '@/lib/mui'
import { useAppContext } from '$/AppContext';
import paris from '@/media/welcome.jpg';
import Title from '../Components/title';
import Countdown from '../Components/countdown';

export default function Home() {
    const { isLoggedIn, language, setUser, user } = useAppContext();
    //const user = authentication.currentUserValue;
    return (
        <Box>
            <Title>gæstebog</Title>
            <Image src={paris} width={250} alt='paris' />
        </Box>
    )
}