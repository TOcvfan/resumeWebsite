"use client"
import React from "react";
import { Box } from "@/lib/mui";
import { useAppContext } from "$/AppContext";
import { CustomizedButtons, ModalElement, Text } from "$/Components";
import { Controller, useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function RedigerPass({ modal, handleModal, setResponse, height, width }) {

    const { language, sprogfunktion, user } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }

    const labels = {
        password: sprogting('Du skal bruge password for at logge ind', 'You need a password to log in'),
        passwordFejl: sprogting('Du har glemt at skrive et password', 'You forgot to write a password'),
        passwordlength: sprogting('Dit password skal være længere (6 tegn)', 'Your password must be longer (6 symbols)'),
        passNumber: sprogting('Der skal helst være et tal i dit password', 'You need to have a number in your password'),
        response: sprogting('Næste gang du logger ind skal du bruge dit nye password', 'next time you log in you need to use your new password'),
        gentag: sprogting('Gentag Password', 'Repeat password'),
        titel: sprogting('Rediger Password', 'Edit password')
    }

    const { password, passNumber, passwordFejl, passwordlength, response, gentag, titel } = labels;


    const schema = Yup.object().shape({
        password: Yup.string().required(password),
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
            setResponse(response)
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
            <CustomizedButtons height={height} width={width} type='button' onClick={handleModal}>{titel}</CustomizedButtons>
            <ModalElement open={modal} handleOpen={handleModal} titel={titel}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        centrer
                    }}>
                        <Box sx={{ centrer }}>
                            <Box sx={{ centrer }}>
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
                            <Box sx={{ centrer }}>
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
                            <Box sx={{ centrer }}>
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
                        <div>
                            <CustomizedButtons type="submit">{sprogting('gem', 'save')}</CustomizedButtons>
                        </div>
                    </Box>
                </form>
            </ModalElement>
        </Box>
    );
}