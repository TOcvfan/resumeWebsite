"use client"
import React, { useState } from "react";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@/lib/mui";
import { useOpretData } from '$/OpretData';
import { useRouter } from 'next/navigation';
import { useAppContext } from "$/AppContext";
import { Controller, useForm } from "react-hook-form";
import FremOgTilbageKnapper from "../Knapper";
import { BsArrowThroughHeart, BsFillHeartbreakFill } from 'react-icons/bs'
import { GiCat, GiJumpingDog, GiSnakeTongue, GiTurtle } from 'react-icons/gi';
import { IoFishSharp } from 'react-icons/io5';
import { FaSpider } from 'react-icons/fa6';
import { PiBirdFill } from 'react-icons/pi';
import opretBruger from "@/api/opretBruger";

const Dyr = () => {
    const { language, sprogfunktion } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const { handleSubmit, control } = useForm();

    const router = useRouter()
    const { data, setData, dyr, setDyr } = useOpretData();
    const { kat, hund, fisk, fugl, edderkop, skildpadde, slange, ingen } = dyr;
    const animal = [
        { id: 1, navn: "kat", label: sprogting("Kat", "Cat"), iconcheck: <GiCat />, state: kat },
        { id: 2, navn: "hund", label: sprogting("Hund", "Dog"), iconcheck: <GiJumpingDog />, state: hund },
        { id: 3, navn: "fisk", label: sprogting("Fisk", "Fish"), iconcheck: <IoFishSharp />, state: fisk },
        { id: 4, navn: "fugl", label: sprogting("Fugl", "Bird"), iconcheck: <PiBirdFill />, state: fugl },
        { id: 5, navn: "edderkop", label: sprogting("Edderkod", "Spider"), iconcheck: <FaSpider />, state: edderkop },
        { id: 6, navn: "skildpadde", label: sprogting("Skildpadde", "Turtle"), iconcheck: <GiTurtle />, state: skildpadde },
        { id: 7, navn: "slange", label: sprogting("Slange", "Snake"), iconcheck: <GiSnakeTongue />, state: slange },
        { id: 8, navn: "ingen", label: sprogting("Ingen af dem", "None of them"), iconcheck: <BsFillHeartbreakFill />, state: ingen }
    ];

    const handleChange = async (event) => {
        const opdater = { [event.target.name]: event.target.checked }
        await setDyr({
            ...dyr,
            ...opdater
        });
    };


    const onSubmit = async (e) => {
        const fejl = () => {
            if (message === 'mail') {
                setMessage('denne email er allerede i brug')
            } else if (message === 'bruger') {
                setMessage('Dette brugernavn findes allerede')
            }
        }
        const opdateretData = { ...data, dyr: dyr }

        await opretBruger(opdateretData, setMessage, setError).then(() => {
            error ? fejl() : router.push('/login')
        }).catch(() => {
            fejl()
        })

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                mt: 2
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    mt: 2
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
            </Box>
            <FremOgTilbageKnapper frem={sprogting('OPRET', 'REGISTER')} tilbage={sprogting('Tilbage', 'Back')} slut={true} />
            {error && <Box>{message}</Box>}
        </form>
    );
};

export default Dyr;