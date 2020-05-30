import React from 'react';
import { css } from 'frontity';

export const Blockquote = (props) => {
    console.log('blockquote', props)
    return <blockquote {...props} css={[BlockquoteStyle]} />
}

//wp-block-columns
const BlockquoteStyle = css`
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;
    opacity: .7;
    
    border-left-style: solid;
    border-left-width: 4px;
    border-left-color: #444;

    font-style: italic;
    line-height: 1.5;

    &.is-style-large {
        p {
            font-size: 24px;
            font-style: italic;
            line-height: 1.6;
        }

    }
`;