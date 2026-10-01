import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div 
            {...props} 
            className={`flex items-center justify-center font-black text-xl bg-forest text-white rounded-md ${props.className || ''}`}
            style={{ width: '1em', height: '1em', ...props.style }}
        >
            A
        </div>
    );
}
