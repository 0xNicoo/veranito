export const Window = ({ children, title, buttons, footerTextLeft, footerTextRight }) => {   
    return (
        <div className="win95-window w-full max-w-2xl mt-4">
            <div className="win95-title-bar">
                <span>{title}</span>
                <div className="win95-title-bar-buttons">
                    {buttons}
                </div>
            </div>
            <div className="p-4 bg-[#c0c0c0] min-h-112">
                {children}
            </div>
            <div className="inset-border p-1 text-xs flex justify-between">
                <span>©2025 Veranito {footerTextLeft && `- ${footerTextLeft}`}</span>
                <span>{footerTextRight}</span>
            </div>
        </div>    
    );
};