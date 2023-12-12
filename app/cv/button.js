import React from 'react';
import { Box } from '@/lib/mui';
import Image from 'next/image';
import cvbutton from '$/cv/cvbutton.module.css';

const Btn = ({ text, billede, setText, id }) => {
    const handleOnSwitch = () => {
        setText(id)
    }

    return (
        <Box className={cvbutton.links}>
            <Box className={`${cvbutton.btn} ${cvbutton.flexCenter}`} onClick={handleOnSwitch}>
                <Image src={billede} alt={text} width={24} /><Box component='span'>{text}</Box>
            </Box>
        </Box>
    )
}
export default Btn