import Image from "next/image";
import Link from 'next/link';

export const MenuIcon = ({ src, label, href = '/proximamente' }) => (
  <Link href={href} className="flex flex-col items-center text-center w-24">
    <Image src={src} alt={label} width={180} height={180} />
    <p className="mt-1 text-xs">{label}</p>
  </Link>
);