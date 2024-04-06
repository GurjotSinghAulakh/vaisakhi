import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} width={54} height={54} priority alt="" />
    </Link>
  );
};

export default Logo;