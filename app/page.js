import Image from 'next/image';
import paris from '@/media/welcome.jpg';

export default function Home() {
  return (
    <main>
      <Image src={paris} width={250} alt='paris' />
    </main>
  )
}
