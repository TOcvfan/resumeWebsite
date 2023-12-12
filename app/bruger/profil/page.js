"use client"
import React from "react";
import { Autocomplete, Box, MenuItem, Paper, TextField } from "@/lib/mui";
import countries from '@/lib/countries.json';
import { useOpretData } from '$/OpretData';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from "react-hook-form";
import { useAppContext } from "$/AppContext";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text, Gender, DatoValger, SelectTextField } from "$/Components";
import FremOgTilbageKnapper from "../Knapper";

const ProfileInfo = () => {
    const { language, sprogfunktion } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }

    const fornavnFejl = sprogting('Du må da hedde noget?', `Don't you have a name?`);
    const efternavnFejl = sprogting('Har du ikke et efternavn??', `Don't you have a surname??`);
    const foedselsdagFejl = sprogting('Det er ikke en email', `that's not an email`);
    //const sexFejl = sprogting('Hvad er dit køn??', `What's your gender??`);

    const schema = Yup.object().shape({
        fornavn: Yup.string().required(fornavnFejl),
        efternavn: Yup.string().required(efternavnFejl),
        foedselsdag: Yup.string().required(foedselsdagFejl),
        //sex: Yup.string().required(sexFejl)
    })

    const listKontakt = [
        { navn: 'Venner', value: 'ven' },
        { navn: 'Kærster', value: 'fisse' },
        { navn: 'Familie', value: 'familie' },
        { navn: 'Arbejdsgiver', value: 'arbejde' },
        { navn: 'Data', value: 'skole' },
    ]

    const { handleSubmit, formState: { errors }, control, setValue } = useForm({
        resolver: yupResolver(schema)
    });


    const router = useRouter()
    const { setData, data } = useOpretData();

    const onSubmit = async (e) => {
        console.log(e)
        setData(data => ({
            ...data,
            ...e
        }))
        router.push("/bruger/dyr");
    }

    const fornavn = sprogting('Fornavn', 'Given name');
    const mellem = sprogting('Mellemnavn', 'Middle name');
    const efternavn = sprogting('Efternavn', 'Family name');

    const contact = sprogting('Hordan kender vi hinanden?', 'How do we know one another?');
    const valg = sprogting('Vælg en', 'Choose one');


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
                        name="fornavn"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                label={fornavn}
                                defaultValue={data.fornavn}
                                onChange={onChange}
                                type="text"
                                errors={errors.fornavn}
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
                        name="mellemnavn"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                label={mellem}
                                defaultValue={data.mellemnavn}
                                onChange={onChange}
                                type="text"
                                errors={false}
                            />
                        }
                        rules={{ required: false }}
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box sx={centrer('column')}>
                    <Controller
                        control={control}
                        name="efternavn"
                        render={({ field: { onChange } }) =>
                            <Text
                                width={300}
                                label={efternavn}
                                defaultValue={data.efternavn}
                                onChange={onChange}
                                type="text"
                                errors={errors.efternavn}
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
                        name="land"
                        render={({ field: { onChange } }) => (
                            <Autocomplete
                                sx={{
                                    width: 300,
                                    "&:hover": {
                                        border: "2px solid yellow",
                                        borderRadius: "10px",
                                        boxShadow: "yellow 0px 5px 15px",
                                    }
                                }}
                                disableClearable
                                options={countries}
                                autoHighlight
                                getOptionLabel={(option) => option.code}
                                onChange={(e, value) => onChange(value.code)}
                                isOptionEqualToValue={(option, value) =>
                                    option.name === value.name
                                }
                                renderOption={(props, option) => (
                                    <Box
                                        component="li"
                                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }} key={option.id} {...props}
                                    >
                                        <img
                                            loading="lazy"
                                            width="20"
                                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                            alt={option.name}
                                        />
                                        {option.name} ({option.code})
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose a country"
                                        sx={{
                                            fieldset: {
                                                border: "2px solid green",
                                                borderRadius: "10px",
                                                boxShadow: "purple 0px 5px 15px",
                                            },
                                        }}
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: "new-password"
                                        }}
                                    />
                                )}
                                PaperComponent={(props) => (
                                    <Paper
                                        sx={{
                                            background: "lightblue",
                                            color: "red",
                                            fontSize: "25px",
                                            "&:hover": {
                                                border: "1px solid #00FF00",
                                                color: "gray",
                                                backgroundColor: "white"
                                            }
                                        }}
                                        {...props}
                                    />
                                )}
                            />
                        )}
                        rules={{
                            required: true
                        }}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Box>
                <Controller
                    control={control}
                    name="foedselsdag"
                    defaultValue=""
                    render={({ field: { onChange } }) =>
                        <DatoValger lan={language} onChange={onChange} setValue={setValue} dato={data.foedselsdag} />
                    }
                    rules={{ required: true }}
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Controller
                    control={control}
                    name="forhold"
                    defaultValue=""
                    render={({ field: { onChange, value } }) =>
                        <SelectTextField select={true} helper={valg} label={contact} defaultV={data.forhold} value={value} onChange={onChange} width={300}>
                            <MenuItem >{valg}</MenuItem>
                            {listKontakt.map((y, i) => {
                                return (
                                    <MenuItem key={i} value={y.value}>{y.navn}</MenuItem>
                                )
                            })
                            }
                        </SelectTextField>
                    }
                    rules={{ required: true }}
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <Gender setValue={setValue} />
            </Box>
            <FremOgTilbageKnapper frem={sprogting('Næste', 'Next')} tilbage={sprogting('Tilbage', 'Back')} />
        </form>
    );
};

export default ProfileInfo;