import Link from 'next/link';

const NavButton = ({ href, children }) => (
    <Link href={href}>
        <button className="win95-button mx-1">{children}</button>
    </Link>
);

export const Navbar = () => {
    return (
        <nav className="my-4">
            <NavButton href="/">Home</NavButton>
            <NavButton href="/proximamente">Galeria</NavButton>
            <NavButton href="/campeones">Campeones</NavButton>
            <NavButton href="/proximamente">Login</NavButton>
        </nav>
    );
}; 