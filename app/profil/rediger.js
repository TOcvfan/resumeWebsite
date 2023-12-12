"use client"
import React, { useEffect, useState } from "react";
import { Autocomplete, Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, MenuItem, Paper, TextField } from "@/lib/mui";
import { ButtonIcon, Text, DatoValger, SelectTextField, Gender, FlagSprog, CustomizedButtons, ModalElement, Title } from "$/Components";
import gbroter from "@/media/united-kingdom-m.gif";
import { useForm, Controller } from "react-hook-form";
import countries from '@/lib/countries.json';
import gb from "@/media/gbny.png";
import dkroter from "@/media/denmark-m.gif";
import dk from "@/media/dkny.png";
import { isMobile } from 'react-device-detect';
import { useAppContext } from "$/AppContext";
import FremOgTilbageKnapper from "$/bruger/Knapper";
import { rediger } from "@/api";
import RedigerDyr from "./dyrModal";
import RedigerPass from "./passwordModal";

export default function RedigerProfil() {
    const { language, setLanguage, user, sprogfunktion } = useAppContext();
    const { foedselsdag, brugernavn, fornavn, mellemnavn, efternavn, forhold, sex, sprog, email, dyr, land, id, token } = user;
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }
    const [openModalDyr, setOpenModalDyr] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(false);
    const handleOpenDyr = () => setOpenModalDyr(!openModalDyr);
    const handleOpenPassword = () => setOpenModalPassword(!openModalPassword);
    const [message, setMessage] = useState('')
    const { handleSubmit, setValue, watch, control } = useForm();

    const ting = { rosie: false }
    const profil = { bella: false }
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            switch (name) {
                case 'brugernavn':
                    profil['brugernavn'] = value['brugernavn'];
                    profil.bella = true;
                    break;
                case 'email':
                    profil['email'] = value['email'];
                    profil.bella = true;
                    break;
                default:
                    ting[name] = value[name];
                    ting.rosie = true;
                    break;
            }
        })
        return () => subscription.unsubscribe()
    }, [watch]);

    const onSubmit = (data) => {
        data = {}
        data['liste'] = ting;
        data['profil'] = profil;
        console.log(data)
        rediger(data, 'userprofile', setMessage, id, token).then((d) => {
            console.log(d)
        })
    }

    const listKontakt = [
        { navn: 'Venner', value: 'ven' },
        { navn: 'Kærster', value: 'fisse' },
        { navn: 'Familie', value: 'familie' },
        { navn: 'Arbejdsgiver', value: 'arbejde' },
        { navn: 'Data', value: 'skole' },
    ]

    const [border, setBorder] = useState(sprog)

    const labels = {
        brugernavn: sprogting('Brugernavn', 'Username'),
        valg: sprogting('Vælg en', 'Choose one'),
        fornavn: sprogting('Fornavn', 'Given name'),
        mellemnavn: sprogting('Mellemnavn', 'Middle name'),
        efternavn: sprogting('Efternavn', 'Family name'),
        contact: sprogting('Hordan kender vi hinanden?', 'How do we know one another?'),
        dyr1: sprogting('Vælg dit/dine favorit kæledyr', 'Choose your favorite type of pet'),
        dyr2: sprogting('Vælg mindst en', 'Choose at least one'),
        titel: sprogting('Rediger dine bruger oplysninger', 'Edit your user informations'),
    }

    const { valg, contact, dyr1, dyr2, titel } = labels;
    const lanbuttonSelect = [
        { rotate: gbroter, flag: gb, land: "GB" },
        { rotate: dkroter, flag: dk, land: "Dk" },
    ]

    const landDef = () => {
        const landtxt = countries.filter((l) => l.code == land);
        return landtxt[0]
    }

    //console.log(isMobile)
    const centrer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: isMobile ? 'column' : 'row',
        mt: 2
    }


    return (
        <Box>
            <Title>{titel}</Title>
            <Box sx={centrer}>
                <FormGroup>
                    <FormControl
                        component="fieldset"
                        variant="standard"
                    >
                        <FormLabel component="legend">
                            {dyr1}
                        </FormLabel>
                        <RedigerDyr height={50} width='37ch' modal={openModalDyr} handleModal={handleOpenDyr} setResponse={setMessage} />
                    </FormControl>
                </FormGroup>
                <RedigerPass height={50} width='37ch' modal={openModalPassword} handleModal={handleOpenPassword} setResponse={setMessage} />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Box sx={centrer}>
                        <Box>
                            <Controller
                                control={control}
                                name="brugernavn"
                                render={({ field: { onChange } }) =>
                                    <Text
                                        width={300}
                                        autoFocus
                                        label={labels.brugernavn}
                                        defaultValue={brugernavn}
                                        onChange={onChange}
                                        type="text"
                                    />
                                }
                                type="text"

                            />
                        </Box>
                        <Box>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { onChange } }) =>
                                    <Text
                                        width={300}
                                        label="E-mail"
                                        defaultValue={email}
                                        onChange={onChange}
                                        type="email"
                                    />
                                }
                                type="email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={centrer}>

                        <Controller
                            control={control}
                            name="fornavn"
                            render={({ field: { onChange } }) =>
                                <Text
                                    width={300}
                                    label={labels.fornavn}
                                    defaultValue={fornavn}
                                    onChange={onChange}
                                    type="text"
                                />
                            }
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                        <Controller
                            control={control}
                            name="mellemnavn"
                            render={({ field: { onChange } }) =>
                                <Text
                                    width={300}
                                    label={labels.mellemnavn}
                                    defaultValue={mellemnavn}
                                    onChange={onChange}
                                    type="text"
                                />
                            }
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Controller
                            control={control}
                            name="efternavn"
                            render={({ field: { onChange } }) =>
                                <Text
                                    width={300}
                                    label={labels.efternavn}
                                    defaultValue={efternavn}
                                    onChange={onChange}
                                    type="text"
                                />
                            }
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box sx={centrer}>
                        <Controller
                            control={control}
                            name="foedselsdag"
                            defaultValue=""
                            render={({ field: { onChange } }) =>
                                <DatoValger lan={language} onChange={onChange} setValue={setValue} dato={foedselsdag} />
                            }
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Box sx={{ mt: 2 }}>
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
                                        defaultValue={landDef()}
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
                                                label={sprogting("Vælg dit land", "Choose your country")}
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
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Box>
                        <Controller
                            control={control}
                            name="forhold"
                            defaultValue=""
                            render={({ field: { onChange, value } }) =>
                                <SelectTextField select={true} helper={valg} label={contact} defaultV={forhold} value={value} onChange={onChange} width={300}>
                                    <MenuItem >{valg}</MenuItem>
                                    {listKontakt.map((y, i) => {
                                        return (
                                            <MenuItem key={i} value={y.value}>{y.navn}</MenuItem>
                                        )
                                    })
                                    }
                                </SelectTextField>
                            }
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box sx={centrer}>
                        <Gender setValue={setValue} defaultValue={sex} />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            width: '30ch',
                            flexDirection: 'row',
                        }}>
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
                </Box>
                <FremOgTilbageKnapper frem={sprogting('Gem', 'Save')} tilbage={sprogting('Tilbage', 'Back')} slut={true} />
            </form>
            {message && <Title color='Blue'>{message}</Title>}
        </Box>
    )
}