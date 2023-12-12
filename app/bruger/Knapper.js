import React from 'react';
import tilbagepil from '@/media/tilbagepil.png';
import { Box } from '@/lib/mui';
import { CustomizedButtons, ButtonIcon } from '$/Components';
import { useRouter } from 'next/navigation';
import pil from '@/media/pil.png';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
/*import * as rdd from 'react-device-detect';

rdd.isMobile = true;*/

const hojre = {
    display: 'flex',
    justifyContent: 'right',
    flexDirection: 'column',
    position: 'relative',
    mr: 5,
    ml: 'auto',
}

const Tilbage = ({ text }) => {
    const router = useRouter()
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'left',
            flexDirection: 'column',
            position: 'relative',
            mr: 'auto',
            ml: 1,

        }}>
            <ButtonIcon onClick={() => router.back()}><Image src={tilbagepil} alt='tilbage' width={60} /></ButtonIcon>
            <Box>{text}</Box>
        </Box>
    )
}

const Naeste = ({ text }) => {
    return (
        <Box sx={{
            hojre
        }}>
            <ButtonIcon type='submit' ><Image src={pil} alt='næste' width={60} /></ButtonIcon>
            <Box>{text}</Box>
        </Box>
    )
}

const OpretKnap = ({ text }) => {
    return (
        <Box sx={{
            hojre
        }}>
            <CustomizedButtons width={80} type='submit' hojre={3}>{text}</CustomizedButtons>
        </Box>
    )
}

const mobil = isMobile ? { justifyContent: 'space-between' } : { with: '60%' };

export default function FremOgTilbageKnapper({ slut, frem, tilbage, knap }) {
    return (
        <Box sx={{
            maxWidth: '800px',
            display: 'flex',
            margin: 'auto',
            alignItems: 'center',
            mobil,
            mt: 2,
        }}>
            <Tilbage text={tilbage} knap={knap} />
            {slut ? <OpretKnap text={frem} /> : <Naeste text={frem} />}
        </Box>

    );
}
