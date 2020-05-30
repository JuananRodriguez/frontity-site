import React from 'react';
import { css } from 'frontity';

export const Columns = (props) => {
    return <div {...props} css={[ColumnsStyle]} />
}

//wp-block-columns
const ColumnsStyle = css`
    display: flex;
    margin-bottom: 28px;
    flex-wrap: wrap;

    @media (min-width: 782px){
         flex-wrap: nowrap;
    }
`;

export const Column = (props) => {
    return <div {...props} css={[ColumnStyle]} />
}

//wp-block-column
const ColumnStyle = css`
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word;

    @media (min-width: 782px){
        flex-basis: 0;
        flex-grow: 1;

        &:not(:first-child) {
            margin-left: 32px;
        }
    }
`;






