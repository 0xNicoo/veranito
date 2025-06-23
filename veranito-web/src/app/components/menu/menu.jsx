"use client";
import { MenuIcon } from "./menuIcon";
import { Window } from "../window";
import { Buttons } from "./buttons";

export const Menu = () => {
    const icons = [
        { src: "/image/icons/home.png", label: "Home", href: "/" },
        { src: "/image/icons/galery.png", label: "Galeria", href: "/proximamente" },
        { src: "/image/icons/star.png", label: "Campeones", href: "/campeones" },
        { src: "/image/icons/ng.png", label: "Never goon", href: "https://www.youtube.com/watch?v=ExXG-II_8eY" },
        { src: "/image/icons/login.png", label: "Login", href: "/proximamente" },
        { src: "/image/icons/heart.png", label: "Wholesome Moments", href: "/proximamente" },
        { src: "/image/icons/10.png", label: "El die", href: "/proximamente" }
    ];

    return (
        <Window title="Menu" buttons={<Buttons />} footerLeft="©2025 Veranito" footerRight="Never goon">
            <div className="grid grid-cols-4 gap-6">
                {icons.map(icon => <MenuIcon key={icon.label} buttons={<Buttons />} src={icon.src} label={icon.label} href={icon.href} />)}
            </div>
        </Window>
    );
};