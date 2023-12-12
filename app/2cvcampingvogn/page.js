import Image from 'next/image';
import paris from '@/media/welcome.jpg';
import eksempel from '@/media/campingvogn/eksempel.jpg';
import doer from '@/media/campingvogn/dor.jpg';
import doer2 from '@/media/campingvogn/dor2.jpg';
import faerdig from '@/media/campingvogn/faerdig.jpg';
import faerdigkarosse from '@/media/campingvogn/faerdigkarrosse.jpg';
import nybund from '@/media/campingvogn/nybund.jpg';
import trailer from '@/media/campingvogn/trailer.jpg';
import klartiltraef from '@/media/bil/bil.jpg'
import Title from '$/Components/title';
import { Box } from '@/lib/mui';

export default function Campingvogn() {
    return (
        <Box>
            <Title>her skal være billeder af min 2cv Campingvogn</Title>
            <Image src={paris} width={250} alt='paris' />
            <Image src={eksempel} width={250} alt='eksempel' />
            <Image src={doer} width={250} alt='dør' />
            <Image src={doer2} width={250} alt='dør' />
            <Image src={faerdigkarosse} width={250} alt='faerdigkarosse' />
            <Image src={trailer} width={250} alt='trailer' />
            <Image src={nybund} width={250} alt='nybund' />
            <Image src={faerdig} width={250} alt='faerdig' />
            <Image src={klartiltraef} width={250} alt='faerdig' />
        </Box>
    )
}