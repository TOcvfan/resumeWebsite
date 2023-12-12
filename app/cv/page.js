'use client'
import React, { useState } from 'react';
import SprogIco from '@/media/CV/Sprog.png';
import DriverIco from '@/media/CV/bil.png';
import WorkIco from '@/media/CV/arbejde.png';
import KompIco from '@/media/CV/kompetencer.png';
import PcIco from '@/media/CV/pc.png';
import UddIco from '@/media/CV/uddannelse.png';
import Title from '$/Components/title';
import { fredericka } from '../fonts';
import Btn from './button';
import { Box } from '@/lib/mui';
import List from './emner/List';
import Tables from './emner/Table';
import { useAppContext } from "$/AppContext";
import Info from '@/lib/info.json';
import Mere from './emner/mere';
import { differenceInYears } from 'date-fns'
import { CustomizedButtons } from '../Components';
import { useRouter } from 'next/navigation';

const CV = () => {
    const { language, sprogfunktion } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }
    const [text, setText] = useState('')
    const router = useRouter()

    const udd = [
        { id: 'udd', label: sprogting('Uddannelse', 'Education'), minWidth: 100 },
        {
            id: 'tid', label: sprogting('Tidspunkt', 'Time'),
            minWidth: 65,
            align: 'right',
        },
        {
            id: 'bem',
            label: sprogting('Bemærkninger', 'Remarks'),
            minWidth: 70,

        }
    ];

    const work = [
        { id: 'arbejdssted', label: sprogting('Arbejdssted', 'Place of work'), minWidth: 70 },
        {
            id: 'tidspunkt', label: sprogting('Tidspunkt', 'Time'),
            minWidth: 75,
            align: 'right',
        },
        {
            id: 'beskrivelse',
            label: sprogting('Beskrivelse', 'Description'),
            minWidth: 70,

        }
    ];

    const sprog = [
        { id: 'code', label: 'Flag', minWidth: 20 },
        {
            id: 'sprog', label: sprogting('Sprog', 'language'),
            minWidth: 50,
        },
        {
            id: 'niveau',
            label: sprogting('Niveau', 'level'),
            minWidth: 70,

        }
    ];

    const info = sprogting(Info.dansk, Info.engelsk);
    const views = (t) => {
        switch (t) {
            case 'nul': return (<Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}><Tables rows={info.sprog} columns={sprog} /></Box>)
            case 'et': return (<Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}><Tables rows={info.arbejde} columns={work} /></Box>)
            case 'to': return <List info={info.it} />
            case 'tre': return (<Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}><Tables rows={info.uddannelse} columns={udd} /></Box>)
            case 'fire': return <List info={info.kort} />
            case 'fem': return <List info={info.kompetencer} />
            case '': return <Mere lan={language} />
            default: return <Mere lan={language} />
        }
    }

    const age = differenceInYears(new Date(), new Date(1979, 9, 27))

    const buttons =
        [
            { "id": "nul", "navn": sprogting("Sprog", "Language"), "ikon": SprogIco },
            { "id": "et", "navn": sprogting("Erhverserfaring", "Workexperience"), "ikon": WorkIco },
            { "id": "to", "navn": sprogting("IT-Kompetencer", "IT-Skills"), "ikon": PcIco },
            { "id": "tre", "navn": sprogting("Uddannelser", "educations"), "ikon": UddIco },
            { "id": "fire", "navn": sprogting("Kørekort", "Licences"), "ikon": DriverIco },
            { "id": "fem", "navn": sprogting("Kompetencer", "Competences"), "ikon": KompIco }
        ]
    const center = {
        display: 'flex',
        flexFlow: 'column wrap',
        textAlign: 'center'
    }

    return (
        <Box>
            <Box sx={center}>
                <CustomizedButtons onClick={() => router.push('cv/kontakt')}>{sprogting("Skriv til mig", "Message me")}</CustomizedButtons>
                <Title className={fredericka.className} color='#e1c043' size={15}>{sprogting("Mine kontakt informationer", "My Contact informations")}</Title>
                <h4>E-mail: <a href="mailto:christian@hammervig.dk">christian@hammervig.dk</a> Mobil: <a href="tel:+4541571079">41 57 10 79</a></h4>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Title className={fredericka.className} color='#e1c043' size={25}>{sprogting("Mit CV", "My Resumé")}</Title>
            </Box>
            <Box>
                <Title className={fredericka.className} color='#e1c043' size={20}>{info.resume.overskrift}</Title>
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    m: 2
                }}>
                    <Box>{info.resume.et}</Box><em>{'\u00a0' + age + '\u00a0'}</em><Box>{info.resume.to}</Box><Box>{info.resume.tre}</Box><Box>{info.resume.fire}</Box>
                    <Box>{info.resume.fem}</Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center'
            }}>
                {buttons.map((b, i) => {
                    return (
                        <Btn key={i} billede={b.ikon} text={b.navn} setText={setText} id={b.id} />
                    )
                })}</Box>
            {views(text)}
        </Box>


    );
}


export default CV;