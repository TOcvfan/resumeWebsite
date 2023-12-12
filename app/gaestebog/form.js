"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Box, FormControl } from '@/lib/mui';
import { nyPost } from '@/api';
//import Title from '/Components/title';
import { LillaSwitch, CustomizedButtons, Text } from '$/Components';
import { format } from 'date-fns';

export default function Bog({ setResponse, sprog, lan }) {
    const schema = Yup.object().shape({
        navn: Yup.string().required(sprog(lan, 'hvad med dit navn???', `What abaut your name???`)),
        titel: Yup.string().required(sprog(lan, 'Der skal være en titel', 'There need to be a title')),
        tekst: Yup.string().required(sprog(lan, 'Der skal være en tekst', 'There need to be a text')),
    })
    const result = format(new Date(), "yyyy-MM-dd HH:mm")

    const defaultValues = {
        navn: '',
        titel: '',
        tekst: '',
        vismig: true,
        dato: result
    }

    const [vismig, setVismig] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    //const navigate = useNavigate();

    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const handleChange = () => {
        setVismig(!vismig);
    };

    const onSubmit = async (data) => {
        setIsLoading(true)
        //const dato = { ...data, dato: result }
        const liste = { liste: data }
        console.log(liste)
        try {
            await nyPost(liste, setResponse, 'nytgaestebogpost')
            await nyPost(data, setResponse, 'ikkevismigmail')
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
                                label={sprog(lan, 'Navn', 'Name')}
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
                        name="titel"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                label='Titel'
                                type='text'
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
                {errors && errors.titel?.message}
                <Box sx={{
                    centrer
                }}>
                    <Controller
                        control={control}
                        name="tekst"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                label='Besked'
                                type='multiline'
                                rows={4}
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
                <Box sx={{ centrer }}>
                    <FormControl
                        sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                        //name="dyr"
                        onChange={handleChange}
                    >
                        <Controller
                            control={control}
                            name='vismig'
                            render={({ field: { onChange, value, ref } }) => (
                                <LillaSwitch
                                    label='Ønsker du at det skal vises på siden?'
                                    value={value}
                                    onChange={onChange}
                                    on={sprog(lan, 'Ja', 'Yes')}
                                    off={sprog(lan, 'Nej', 'No')}
                                />
                            )}
                        />
                    </FormControl>
                </Box>
                <div>
                    <CustomizedButtons type="submit" disabled={isLoading}>Send</CustomizedButtons>
                </div>
                <label>{status}</label>
            </Box>
        </form >
    );
}