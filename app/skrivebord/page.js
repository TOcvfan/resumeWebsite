'use client'
import { Box } from '@/lib/mui'
import { useAppContext } from '$/AppContext';
import { Title, Foedselsdag } from '$/Components';
import { differenceInYears, parseISO, isToday, addYears } from 'date-fns';
import Ven from './ven';
import Familie from './familie';
import Arbejde from './arbejde';
import Data from './data';

const Hilsen = ({ bruger, sprog }) => {
    const foedselsdag = parseISO(bruger?.foedselsdag);
    const idag = new Date();
    const land = bruger?.land;
    const alder = differenceInYears(idag, foedselsdag);
    const alderTilDato = addYears(foedselsdag, alder);
    if (isToday(alderTilDato)) {
        return <Foedselsdag sprog={sprog} navn={bruger?.fornavn} alder={alder} >
            <img
                src={`https://flagcdn.com/72x54/${land.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/144x108/${land.toLowerCase()}png 2x, https://flagcdn.com/216x162/${land.toLowerCase()}png 3x`}
                width="72"
                height="54"
                alt={land} />
        </Foedselsdag>;
    } else return <Title>{sprog('Hej', 'Hello')} {bruger?.fornavn}</Title>;
}

const Visning = ({ bruger, sprog }) => {
    const rolle = bruger?.role;
    const rolleSkift = () => {
        switch (rolle) {
            case 'VEN': return <Ven />
            case 'FAMILIE': return <Familie />
            case 'ARBEJDE': return <Arbejde sprog={sprog} />
            case 'ADMIN': return <Data />
        }
    }
    return (
        <Box>
            <Hilsen bruger={bruger} sprog={sprog} />
            {rolleSkift()}
        </Box>
    )
}

export default function Skrivebord() {
    const { isLoggedIn, language, user, sprogfunktion, ikkeOnline } = useAppContext();
    const sprogting = (dan, eng) => {
        return (
            sprogfunktion(language, dan, eng)
        )
    }
    return (
        <Box>
            {isLoggedIn ?
                <Visning bruger={user} sprog={sprogting} /> :
                <Title>{ikkeOnline(language)}</Title>
            }
        </Box>
    )
}