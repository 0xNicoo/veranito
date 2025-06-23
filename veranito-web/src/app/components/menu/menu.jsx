"use client";
import { MenuIcon } from "./menuIcon";

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
        <div className="win95-window w-full max-w-2xl mt-4">
            <div className="win95-title-bar">
                <span>Menu</span>
                <div className="win95-title-bar-buttons">
                    <button className="win95-button">_</button>
                    <button className="win95-button">□</button>
                    <button className="win95-button">X</button>
                </div>
            </div>
            <div className="p-4 bg-[#c0c0c0] min-h-112">
                <div className="grid grid-cols-4 gap-6">
                    {icons.map(icon => <MenuIcon key={icon.label} src={icon.src} label={icon.label} href={icon.href} />)}
                </div>
            </div>
            <div className="inset-border p-1 text-xs flex justify-between">
                <span>©2025 Veranito</span>
                <span>Never goon</span>
            </div>
        </div>    
    );
};