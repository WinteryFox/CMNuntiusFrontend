import React from 'react';

//TODO: Remove all cm components

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'cm-context-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-context-menu-option': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-context-menu-line': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-image': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

