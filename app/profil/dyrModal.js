"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BsFillHeartbreakFill } from 'react-icons/bs'
import { GiCat, GiJumpingDog, GiSnakeTongue, GiTurtle } from 'react-icons/gi';
import { IoFishSharp } from 'react-icons/io5';
import { FaSpider } from 'react-icons/fa6';
import { PiBirdFill } from 'react-icons/pi';
import { BsArrowThroughHeart } from 'react-icons/bs'
import { CustomizedButtons, ModalElement } from '$/Components';
import { useAppContext } from '$/AppContext';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@/lib/mui';
import { rediger } from '@/api';

export default function RedigerDyr({ modal, handleModal, setResponse, height, width }) {
    const { language, sprogfunktion, user } = useAppContext();
    const [dyr, setDyr] = useState(user.dyr)
    const { kat, hund, fisk, fugl, edderkop, skildpadde, slange, ingen } = dyr;
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }

    const { handleSubmit, control } = useForm();

    const handleChange = (event) => {
        //console.log(d.target, 'øf')
        const opdater = { [event.target.name]: event.target.checked }
        setDyr({
            ...dyr,
            ...opdater
        });
    }

    const animal = [
        { id: 1, navn: "kat", label: sprogting("Kat", "Cat"), iconcheck: <GiCat />, state: kat },
        { id: 2, navn: "hund", label: sprogting("Hund", "Dog"), iconcheck: <GiJumpingDog />, state: hund },
        { id: 3, navn: "fisk", label: sprogting("Fisk", "Fish"), iconcheck: <IoFishSharp />, state: fisk },
        { id: 4, navn: "fugl", label: sprogting("Fugl", "Bird"), iconcheck: <PiBirdFill />, state: fugl },
        { id: 5, navn: "edderkop", label: sprogting("Edderkod", "Spider"), iconcheck: <FaSpider />, state: edderkop },
        { id: 6, navn: "skildpadde", label: sprogting("Skildpadde", "Turtle"), iconcheck: <GiTurtle />, state: skildpadde },
        { id: 7, navn: "slange", label: sprogting("Slange", "Snake"), iconcheck: <GiSnakeTongue />, state: slange },
        { id: 8, navn: "ingen", label: sprogting("Ingen af dem", "None of them"), iconcheck: <BsFillHeartbreakFill />, state: ingen },
    ];

    const onSubmitDyr = (data) => {
        data = {}
        data.liste = dyr;
        //console.log(data)
        rediger(data, 'redigerdyr', setResponse, user.id, user.token).then((d) => {
            handleModal()
        })
    }

    const centrer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        mt: 2
    }

    return (
        <Box>
            <CustomizedButtons height={height} width={width} type='button' onClick={handleModal}>dyr</CustomizedButtons>
            <ModalElement open={modal} handleOpen={handleModal} titel='Dyr'>
                <form onSubmit={handleSubmit(onSubmitDyr)}>
                    <Box sx={{
                        centrer
                    }}>
                        <Box sx={{
                            centrer
                        }}>
                            <FormGroup>
                                <FormControl
                                    sx={{ m: 3 }}
                                    component="fieldset"
                                    variant="standard"
                                    //name="dyr"
                                    onChange={handleChange}
                                >
                                    <FormLabel component="legend">
                                        {sprogting('Vælg dit/dine favorit kæledyr', 'Choose your favorite type of pet')}
                                    </FormLabel>
                                    {animal.map((a) => {
                                        return (
                                            <Controller
                                                control={control}
                                                name={a.navn}
                                                key={a.id}
                                                render={({ field: { onChange, value, ref } }) => (
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={a.state}
                                                                value={value}
                                                                onChange={onChange}
                                                                name={a.navn}
                                                                icon={<BsArrowThroughHeart />}
                                                                checkedIcon={a.iconcheck}
                                                            />
                                                        }
                                                        label={a.label}
                                                    />
                                                )}
                                            />
                                        );
                                    })}
                                    <FormHelperText>{sprogting('Vælg mindst en', 'Choose at least one')}</FormHelperText>
                                </FormControl>
                            </FormGroup>
                        </Box>
                        <div>
                            <CustomizedButtons type="submit">{sprogting('gem', 'save')}</CustomizedButtons>
                        </div>
                    </Box>
                </form>
            </ModalElement>
        </Box>
    );
}