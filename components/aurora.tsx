import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'cm-communicator': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-avatar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-context-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-context-menu-option': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-conversation': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-conversation-bubble': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-conversation-divider': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'cm-context-menu-line': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

