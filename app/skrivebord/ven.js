import Image from 'next/image';
import { Box } from '@/lib/mui';
import thor from '@/media/thor.jpg';
import Link from 'next/link';
import CustomizedButtons from '../Components/Button';

export default function Ven({ sprog }) {

    const knapper = [
        { navn: sprog('profil', 'profile'), link: '/profil' },
        { navn: sprog('Gæstebog', 'Guestbook'), link: '/gaestebog' },
        { navn: sprog('Spil', 'Games'), link: '/spil' },

    ];

    const sx = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'row wrap',
        m: 2
    }

    return (
        <Box>
            <Image src={thor} alt='thor' height={300} />
            <Box sx={sx}>
                {
                    knapper.map((k, i) => {
                        return (
                            <Link href={k.link} key={i}>
                                <CustomizedButtons width={100}>
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