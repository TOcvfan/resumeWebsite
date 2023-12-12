'use client'
import { OpretData } from '$/OpretData';

/*export const metadata = {
  title: 'Christians test opret',
  description: 'test',
}*/

export default function OpretLayout({ children }) {
  return (
    <OpretData>
      {children}
    </OpretData>
  )
}
