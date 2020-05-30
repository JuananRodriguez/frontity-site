import { Code } from './Code';

const processor = {
    test: ({ node }) => node.component === "pre",
    priority: 20,
    processor: ({ node }) => {
        if (node.props.className.includes('wp-block-code')) {
            //const style = node.props.style;
            node.component = Code;
            return node;
        }

        
        return node;
    },
};

export default processor;
