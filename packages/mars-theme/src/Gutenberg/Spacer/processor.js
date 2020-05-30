import { Spacer } from './Spacer';

const processor = {
    test: ({ node }) => node.component === "div",
    priority: 20,
    processor: ({ node }) => {
        if (node.props.className.includes('wp-block-spacer')) {
            //const style = node.props.style;
            node.component = Spacer;
            return node;
        }

        
        return node;
    },
};

export default processor;
