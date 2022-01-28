import { connect, css, Global } from "frontity";
import React from "react";

const DarkMode = ({ state }) => {
    const { mode, text } = state.theme;
    return (
        <>
            <Global 
                styles={css`
                :root {
                    --brand: #17694b;
                    --text: ${mode === 'light' ? '#212121': '#fff'};
                    --darktext: ${mode === 'light' ? '#fff': '#fff'};
                    --background: ${mode === 'light' ? '#111831cc': '#070a15cc'};
                    --menubackground: ${mode === 'light' ? 'var(--brand)': '#121212'};
                    --postbackground: ${mode === 'light' ? '#acb1dbb3': '#242a3e'};
                    --formbackground: ${mode === 'light' ? '#d9dcf2b3' : '#acb1dbb3'};
                    --cardbackground: ${mode === 'light' ? '#d9dcf2b3': '#111831cc'};
                    --mobilebackground: ${mode === 'light' ? '#1f263f' : '#0e0f13'};
                    --border: ${mode === 'light' ? '#e0e0e0': '#333'};
                    --title: ${mode === 'light' ? 'var(--brand)': '#80bbda'};
                    --link: ${mode === 'light' ? 'var(--brand)': '#72e0b8'};
                    --button: ${mode === 'light' ? 'var(--brand)': '#1E1E1E'};
                    --buttonhover: ${mode === 'light' ? '#fff': '#fff'};
                    --menutogglehover: ${mode === 'light' ? 'var(--brand)': '#80bbda'};
                    --menutogglehoverclose: ${mode === 'light' ? '#000': '#80bbda'};
                    --code: ${mode === 'light' ? '#121212': '#343434'};
                    --imgfilter: ${mode === 'light' ? 'brightness(100%)' : 'brightness(90%)'};
                    --transition: 500ms;
                    --textsize: ${text === 'normal' ? '1.25rem' : '1.625rem'};
                    --asize: ${text === 'normal' ? '1.25rem' : '1.625rem'};
                    --asize2: ${text === 'normal' ? '1rem' : '1.5rem'};
                    --h1size: ${text === 'normal' ? '2.5rem' : '3rem'};
                    --h2size: ${text === 'normal' ? '2rem' : '2.5rem'};
                    --h2sizecard: ${text === 'normal' ? '1.5rem' : '2rem'};
                    --h3size: ${text === 'normal' ? '1.75rem' : '2.25rem'};
                    --h4size: ${text === 'normal' ? '1.5rem' : '2rem'};
                    --h5size: ${text === 'normal' ? '1.375rem' : '1.875rem'};
                    --h6size: ${text === 'normal' ? '1.25rem' : '1.75rem'};
                    --colortoggleactice: ${mode === 'light' ? 'var(--background)': 'var(--brand)'};
                    --texttoggleactice: ${text === 'normal' ? 'var(--background)': 'var(--brand)'};
                    --colortoggleacticebox: ${mode === 'light' ? 'var(--brand)': '#fff'};
                    --svgcolor: ${mode === 'light' ? 'var(--brand)': '#fff'};
                    --texttoggleacticebox: ${text === 'normal' ? 'var(--svgcolor)': '#fff'};
                    --navlinks: ${text === 'normal' ? '18px' : '24px'};
                  }
            `}
            />
        </>
    );
};

export default connect(DarkMode);