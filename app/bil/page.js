import Image from 'next/image';
import paris from '@/media/welcome.jpg';
import klartiltraef from '@/media/bil/bil.jpg';
import baglygter from '@/media/bil/baglygter.jpg';
import bundenrenses from '@/media/bil/bundenrenses.jpg';
import bundramme_klar from '@/media/bil/bundramme_klar.jpg';
import bundramme from '@/media/bil/bundramme.jpg';
import karosseklar from '@/media/bil/karosseklar.jpg';
import klartilmaling from '@/media/bil/klartilmaling.png';
import samletogsynet from '@/media/bil/samletogsynet.jpg';
import traef from '@/media/bil/traef2cv.jpg';
import Title from '$/Components/title';
import { Box } from '@/lib/mui';

export default function Bil() {
    return (
        <Box>
            <Title>her skal være billeder af min 2cv</Title>
            <Image src={paris} width={250} alt='paris' />
            <Image src={klartiltraef} width={250} alt='klar til træf' />
            <Image src={baglygter} width={250} alt='baglygter' />
            <Image src={bundenrenses} width={250} alt='bundenrenses' />
            <Image src={bundramme_klar} width={250} alt='bundramme_klar' />
            <Image src={bundramme} width={250} alt='bundramme' />
            <Image src={karosseklar} width={250} alt='karosseklar' />
            <Image src={klartilmaling} width={250} alt='klartilmaling' />
            <Image src={samletogsynet} width={250} alt='samletogsynet' />
            <Image src={traef} width={250} alt='traef' />
        </Box>
    )
}