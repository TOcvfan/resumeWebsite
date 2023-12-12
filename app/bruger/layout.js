import { Fragment } from 'react';
import OpretLayout from './layout.client';

export const metadata = {
    title: 'Christians test opret',
    description: 'test',
}

export default function OpretLayoutServer({ children }) {
    return (
        <Fragment>
            <OpretLayout>
                {children}
            </OpretLayout>
        </Fragment>
    )
}