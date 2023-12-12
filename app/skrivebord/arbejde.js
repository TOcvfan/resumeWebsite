import { Box } from '@/lib/mui';
import { differenceInYears } from 'date-fns'
import mig from '@/media/hjem/mig.jpg';
import mig_med_bue from '@/media/hjem/mig_med_bue.jpg';
import bil from '@/media/hjem/bil2.jpg';
import { Kort, CustomizedButtons } from '$/Components';
import Link from 'next/link';

export default function Arbejde({ sprog }) {
    const age = differenceInYears(new Date(), new Date(1979, 9, 27));

    const dkHjem = `Jeg er halvt spanier og jeg bor i Strandby ved Farsø i eget hus.\nJeg er ${age} år og har ikke nogen børn og aldrig været gift, men det forsøger jeg dog at lave om på.`;
    const engHjem = `I'm half spanish and I live in my own house in Strandby near Farsø.\nI'm ${age} years old, with no kids and I have never been married, but I'm trying to change that.`;
    const dkBue = 'Jeg startede med at gå til bueskydning mens jeg boede i Lyngby.\nJeg har min egen bue og lige for tiden skyder jeg kun lidt i baghaven da der ikke er en klub i nærheden.';
    const engBue = `I started with archery while I lived in Lyngby.\nI have my own bow and right now I just shoot a little in the backyard because there isn't any club nearby`;
    const dkBil = 'Dette er min Citroën 2cv fra 1984.\nDen hedder smølfine og det er derfor den har de farver.';
    const engBil = `This is my Citroën 2cv from 1984.\nIt's call smurfette and that's why is has those colors.`;

    const hjem = [{
        billede: mig,
        titel: sprog('Om mig', 'About me'),
        tekst: sprog(dkHjem, engHjem),
    }, {
        billede: mig_med_bue,
        titel: sprog('Bueskydning', 'Archery'),
        tekst: sprog(dkBue, engBue),
    }, {
        billede: bil,
        titel: sprog('Min Bil', 'My Car'),
        tekst: sprog(dkBil, engBil),
    }]

    const knapper = [
        { navn: sprog('profil', 'Prolfile'), link: '/profil' },
        { navn: sprog('Gæstebog', 'Guestbook'), link: '/gaestebog' },
        { navn: 'CV', link: 'https://christian.hammervig.dk/cv' },
    ]

    const sx = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'row wrap',
        m: 2
    }

    return (
        <Box>
            <Box sx={sx}>
                {hjem.map((om, i) => {
                    return (
                        <Kort key={i} titel={om.titel} billede={om.billede} om={om.titel}>
                            {om.tekst}
                        </Kort>)
                })}
            </Box>
            <Box sx={sx}>
                {
                    knapper.map((k, i) => {
                        return (
                            <Link href={k.link} key={i}>
                                <CustomizedButtons width='40ch'>
                                    {k.navn}
                                </CustomizedButtons>
                            </Link>
                        )
                    })
                }
            </Box>
        </Box>
    )
}