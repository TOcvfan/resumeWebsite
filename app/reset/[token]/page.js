"use client"
import React, { useState } from "react";
import { Box } from "@/lib/mui";
import { useAppContext } from "$/AppContext";
import { Title, Tabel, CustomizedButtons, Text } from "$/Components";
import { useRouter } from 'next/navigation';
import { Controller, useForm } from "react-hook-form";
import Jwt from "jsonwebtoken";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Page({ params }) {
    const router = useRouter()
    const { language, sprogfunktion } = useAppContext();
    const token = params.token

    var decoded = Jwt.verify(token, process.env.SECRET_OR_KEY);
    const id = decoded.id
    const email = decoded.email
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }

    const passwordFejl = sprogting('Du har glemt at skrive et password', 'You forgot to write a password');
    const passwordlength = sprogting('Dit password skal være længere (6 tegn)', 'Your password must be longer (6 symbols)');
    const passNumber = sprogting('Der skal helst være et tal i dit password', 'You need to have a number in your password');

    const schema = Yup.object().shape({
        newPass: Yup.string().required(passwordFejl)
            .min(6, passwordlength).matches(/[0-9]/, passNumber),
        gentagPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    })


    const { handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        const datamail = { ...data, email }
        console.log(data)
        rediger(datamail, 'userprofile', setMessage, id, token).then((d) => {
            router.push('login')
        })
    }

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
                        id='password'
                        control={control}
                        name="newPass"
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
            </Box>
            <FremOgTilbageKnapper frem={sprogting('Næste', 'Next')} tilbage={sprogting('Tilbage', 'Back')} />
        </form>
    );
}