import { Blockquote } from './Blockquote';

const processor = {
    test: ({ node }) => node.component === "blockquote",
    priority: 20,
    processor: ({ node }) => {
        if (node.props.className.includes('wp-block-quote')) {
            //const style = node.props.style;
            node.component = Blockquote;
            return node;
        }

        
        return node;
    },
};

export default processor;
