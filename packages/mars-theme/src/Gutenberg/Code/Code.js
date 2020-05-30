import React, { memo, useEffect, useState } from 'react';
import { css } from 'frontity';
import hljs from 'highlight.js';
import classnames from 'classnames';

export const Code = memo(({ className, ...props }) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true);
        document.querySelectorAll('pre code').forEach((block) => hljs.highlightBlock(block));
        return () => setIsMounted(false)
    }, [])

    const classes = classnames(className, { "is-mounted": isMounted })
    return <pre {...props} className={classes} css={CodeStyle} />
})

//pre.wp-block-code
const CodeStyle = css`
    border-radius: 15px;
    border: none;
    overflow: hidden;
    margin: 0 auto 25px;
    font-family: monospace,monospace;
    font-size: 1.2em;
    max-width: 800px;
    padding: 20px 35px;
    white-space: pre-wrap;  
    word-break: break-word;

    &.is-mounted{
        background: #282b2e;
    }
    
    @media (max-width: 782px){
        margin-left: -32px;
        margin-right: -32px;
    }
`;