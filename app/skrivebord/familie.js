import Image from 'next/image';
import { Box } from '@/lib/mui';
import thor from '@/media/thor.jpg';
import Link from 'next/link';
import CustomizedButtons from '../Components/Button';

export default function Familie({ sprog }) {
    const knapper = [
        { navn: sprog('profil', 'profile'), link: '/profil' },
        { navn: sprog('Gæstebog', 'Guestbook'), link: '/gaestebog' },
        //{ navn: 'Ønskelister', link: '/onsker' },
        //{ navn: 'Mine ønsker', link: '/mine_onsker' },
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