import React from 'react';
import { css } from 'frontity';

export const Image = (props) => {
    console.log('Image', props)
    return <figure {...props} css={[ImageStyle]} />
}

//wp-block-columns
const ImageStyle = css`
    margin: 0;
    margin-bottom: 1em;
    display: block;
    box-sizing: border-box;

    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        border: 0;
    }

    .size-large{

    }
`;