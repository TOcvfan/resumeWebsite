import React from 'react';
import Title from './title';


const Foedselsdag = ({ children, navn, alder, sprog }) => {
    const tillykke = sprog('Tillykke med de ', 'Congratulations with the ')
    const medDe = sprog(' år ', ' years ')
    return (
        <Title>
            {children} {tillykke}{alder}{medDe}{navn} {children}
        </Title>
    );
}
export default Foedselsdag;