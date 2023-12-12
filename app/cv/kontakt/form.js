import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import { Box } from '@/lib/mui';
import { useAppContext } from '$/AppContext';
import { Text, CustomizedButtons, Title } from '$/Components';
import { isMobile } from 'react-device-detect';
import { chango } from '$/fonts';

const KontaktFormular = ({ error, setError, setMessage }) => {
    //const matches = useMediaQuery('(max-width:800px)');
    const errorBox = { width: isMobile ? '95%' : '45%', padding: 1 };
    const { language, sprogfunktion } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }

    //const [error, setError] = useState(true)

    const emailVali = sprogting('det er vidst ikke en email!!!', `that's not an E-mail!!`)

    const schema = Yup.object().shape({
        email: Yup.string().email(emailVali).required(sprogting('Jeg skal bruge en email for at sende et svar!!', 'I need an E-mail to send a response!!')),
        navn: Yup.string().required(sprogting('Du har da et navn???', `Don't you have a name???`)),
        firmanavn: Yup.string().required(sprogting('Hvad hedder dit firma???', `What's your company called??`)),
        emne: Yup.string().required(sprogting('Hvorfor skriver du??????', `Why are you writing me???`)),
        besked: Yup.string().required(sprogting('hvad vil du fortælle mig???', `What do you wnat to tell me`))
    })

    const defaultValues = {
        email: '',
        navn: '',
        firmanavn: '',
        emne: '',
        besked: '',
    }

    //const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const router = useRouter();
    const onError = (errors, e) => console.log(errors, e);

    const labels = {
        titel: sprogting("Skriv til mig", "Send me a message"),
        navn: sprogting("Dit navn", "Your name"),
        firma: sprogting("Firma", "Company"),
        emne: sprogting("Emne på din besked", "Subject of your message"),
        besked: sprogting("Skriv din besked her", "Write your message here"),
        send: sprogting("Send besked", "Send message")
    }

    const onSubmit = (data, e) => {
        console.log(data, e)
        let cancel = false
        setIsLoading(true)
        mail(data, setMessage, setError)
            .then(
                () => {
                    if (cancel) return
                    setIsLoading(false);
                    if (!error) { router.back() }
                }).catch(error => {
                    console.log(error)
                });
        return () => {
            cancel = true;
        }
    }

    return (
        <Box>
            <Title className={chango.className} color='#e1c043' size={10}>{labels.titel}</Title>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexFlow: isMobile ? 'column wrap' : 'row wrap'
                }}>
                    <Box sx={errorBox}>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value, ref } }) =>
                                <Text
                                    label="E-mail"
                                    errors={errors.email}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                />
                            }
                            rules={{ required: true }}
                            type="email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <p className='error'>{errors && errors.email?.message}</p>
                    </Box>
                    <Box sx={errorBox}>
                        <Controller
                            control={control}
                            name="navn"
                            render={({ field: { onChange, onBlur, value, ref } }) =>
                                <Text
                                    label={labels.navn}
                                    errors={errors?.navn}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                />
                            }
                            rules={{ required: true }}
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <p className='error'>{errors && errors.navn?.message}</p>
                    </Box>
                    <Box sx={errorBox}>
                        <Controller
                            control={control}
                            name="firmanavn"
                            render={({ field: { onChange, onBlur, value, ref } }) =>
                                <Text
                                    label={labels.firma}
                                    errors={errors?.firmanavn}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                />
                            }
                            rules={{ required: true }}
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <p className='error'>{errors && errors.firmanavn?.message}</p>
                    </Box>
                    <Box sx={errorBox}>
                        <Controller
                            control={control}
                            name="emne"
                            render={({ field: { onChange, onBlur, value, ref } }) =>
                                <Text
                                    label={labels.emne}
                                    errors={errors?.emne}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                />
                            }
                            rules={{ required: true }}
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <p className='error'>{errors && errors.emne?.message}</p>
                    </Box>
                </Box>
                <Box sx={{
                    width: '100%',
                    padding: 1,
                    display: 'block',
                    alignContent: 'center'
                }}>
                    <Controller
                        control={control}
                        name="besked"
                        render={({ field: { onChange, onBlur, value, ref } }) =>
                            <Text
                                width='100%'
                                label={labels.besked}
                                type="multiline"
                                rows={4}
                                errors={errors?.besked}
                                onChange={onChange}
                                onBlur={onBlur}
                                selected={value}
                            />
                        }
                        rules={{ required: true }}
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <p className='error'>{errors && errors.besked?.message}</p>
                </Box>
                <Box sx={{ float: 'right', marginRight: 3 }}>
                    <CustomizedButtons type="submit" disabled={isLoading}>{labels.send}</CustomizedButtons>
                </Box>
            </form>
        </Box>
    )
}

export default KontaktFormular;