import Link from "next/link";   

export const Buttons = () => {
    return (
        <div className="win95-title-bar-buttons">

            <button className="win95-button">_</button>
            <button className="win95-button">□</button>            
            <Link href="/">
                <button className="win95-button">X</button>
            </Link>
        </div>
    );
};