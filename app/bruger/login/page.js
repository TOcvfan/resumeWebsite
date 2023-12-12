"use client"
import React, { useState } from "react";
import { Box } from "@/lib/mui";
import { useOpretData } from '$/OpretData';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from "react-hook-form";
import { ButtonIcon, Text, FlagSprog } from "$/Components";
import gbroter from "@/media/united-kingdom-m.gif";
import gb from "@/media/gbny.png";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import dkroter from "@/media/denmark-m.gif";
import dk from "@/media/dkny.png";
import { useAppContext } from "$/AppContext";
import FremOgTilbageKnapper from "../Knapper";

const LoginInfo = () => {
    const router = useRouter()
    const { language, setLanguage, sprogfunktion } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }

    const brugernavnFejl = sprogting('Du skal da have et sejt navn?', `Don't you want a cool nickname?`);
    const emailfejl = sprogting('du skal bruge en e-mail for at kunne logge ind', 'you need an e-mail to log in');
    const passwordFejl = sprogting('Du har glemt at skrive et password', 'You forgot to write a password');
    const passwordlength = sprogting('Dit password skal være længere (6 tegn)', 'Your password must be longer (6 symbols)');
    const passNumber = sprogting('Der skal helst være et tal i dit password', 'You need to have a number in your password');
    const falskemail = sprogting('Det er ikke en email', `that's not an email`);

    const schema = Yup.object().shape({
        brugernavn: Yup.string().required(brugernavnFejl),
        email: Yup.string().email(falskemail).required(emailfejl),
        password: Yup.string().required(passwordFejl)
            .min(6, passwordlength).matches(/[0-9]/, passNumber),
        gentagPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    })


    const { handleSubmit, formState: { errors }, control, setValue } = useForm({
        resolver: yupResolver(schema)
    });
    //console.log(errors.password)
    const { setData, data } = useOpretData();

    const onSubmit = async (e) => {
        console.log(e)
        setData(data => ({
            ...data,
            ...e
        }))
        router.push("/bruger/profil");
    }

    const [border, setBorder] = useState(false)
    const lanbuttonSelect = [
        { rotate: gbroter, flag: gb, land: "GB" },
        { rotate: dkroter, flag: dk, land: "Dk" },
    ]
    //console.log(errors)
    const brugernavn = sprogting('Brugernavn', 'Username');
    const gentag = sprogting('Gentag Password', 'Repeat password');
    const centrer = (t) => {
        return (
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: t,
                mt: 2
            }
        )
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={centrer('column')}>
                <Box sx={centrer('column')}>
                    <Controller
                        control={control}
                        name="brugernavn"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                autoFocus
                                label={brugernavn}
                                defaultValue={data.brugernavn}
                                onChange={onChange}
                                type="text"
                                errors={errors.brugernavn}
                            />
                        }
                        rules={{ required: true }}
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box sx={centrer('column')}>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value, ref } }) =>
                            <Text
                                width={300}
                                label="E-mail"
                                defaultValue={data.email}
                                onChange={onChange}
                                type="email"
                                errors={errors.email}
                            />
                        }
                        rules={{ required: true }}
                        type="email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box sx={centrer('column')}>
                    <Controller
                        id='password'
                        control={control}
                        name="password"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                label='Password'
                                onChange={onChange}
                                type="password"
                                errors={errors.password}
                            />
                        }
                        rules={{
                            required: true,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box sx={centrer('column')}>
                    <Controller
                        id='gentagpassword'
                        control={control}
                        name="gentagPassword"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                label={gentag}
                                onChange={onChange}
                                type="password"
                                errors={errors?.gentagPassword}
                            />
                        }
                        rules={{
                            required: true
                        }}

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box sx={centrer('row')}>
                    {lanbuttonSelect.map((language, i) => {
                        return (
                            <ButtonIcon type='button' key={i}>
                                <FlagSprog
                                    rotate={language.rotate}
                                    flag={language.flag}
                                    alt={language.land}
                                    setLanguage={setLanguage}
                                    lan={language.land}
                                    setValue={setValue}
                                    border={border}
                                    setBorder={setBorder}
                                />
                            </ButtonIcon>)
                    })}

                </Box>
            </Box>
            <FremOgTilbageKnapper frem={sprogting('Næste', 'Next')} tilbage={sprogting('Tilbage', 'Back')} />
        </form>
    );
};

export default LoginInfo;