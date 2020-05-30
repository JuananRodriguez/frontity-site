import React from 'react';
import { css } from 'frontity';

export const Spacer = (props) => {
    return <spacer {...props} css={[SpacerStyle]} />
}

//wp-block-columns
const SpacerStyle = css`
    display: none;
`;