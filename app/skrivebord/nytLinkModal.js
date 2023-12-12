"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Text, CustomizedButtons, ModalElement } from '$/Components';
import { useAppContext } from '$/AppContext';
import { Box } from '@/lib/mui';
import { nyPostAut } from '@/api';

export default function NytLink({ modal, handleModal, setResponse }) {
    const { isLoggedIn, ikkeOnline, user, language, sprog } = useAppContext();

    const schema = Yup.object().shape({
        navn: Yup.string().required(sprog(language, 'hvad med dit brugernavn eller E-mail???', `What's your username or E-mail`)),
        link: Yup.string().required(sprog(language, 'Du skal bruge password for at logge ind', 'You need a password to log in'))
    })

    const defaultValues = {
        navn: '',
        link: '',
        beskrivelse: ''
    }

    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });


    const onSubmit = async (data) => {
        setIsLoading(true)
        const nyData = { ...data, emne: 1 }
        const liste = { liste: nyData }
        //console.log(liste)
        try {
            await nyPostAut(liste, setMessage, user.token)
            setResponse(message)
            handleModal()
            //console.log(message)
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            //console.log(message)
            setStatus(err)
        } finally {
            //console.log(message)
            setIsLoading(false)
        }
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
            <CustomizedButtons type='button' onClick={handleModal}>fisse</CustomizedButtons>
            <ModalElement open={modal} handleOpen={handleModal} titel='Nyt link'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        centrer
                    }}>
                        <Box sx={{
                            centrer
                        }}>
                            <Controller
                                control={control}
                                name="navn"
                                render={({ field: { onChange } }) =>
                                    <Text
                                        autoFocus
                                        width={300}
                                        label={sprog(language, 'Navn', 'Name')}
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
                        {errors && errors.navn?.message}
                        <Box sx={{
                            centrer
                        }}>
                            <Controller
                                control={control}
                                name="link"
                                render={({ field: { onChange } }) =>
                                    <Text
                                        width={300}
                                        label='Link'
                                        type='url'
                                        onChange={onChange}
                                        errors={errors?.password}
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
                        {errors && errors.link?.message}
                        <Box sx={{
                            centrer
                        }}>
                            <Controller
                                control={control}
                                name="beskrivelse"
                                render={({ field: { onChange } }) =>
                                    <Text
                                        width={300}
                                        label='Beskrivelse'
                                        type='multiline'
                                        rows={2}
                                        onChange={onChange}
                                        errors={errors?.password}
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
                        <div>
                            <CustomizedButtons type="submit" disabled={isLoading}>{sprog(language, 'Opret', 'Create')}</CustomizedButtons>
                        </div>
                        <label>{status}</label>
                    </Box>
                </form>
            </ModalElement>
        </Box>
    );
}