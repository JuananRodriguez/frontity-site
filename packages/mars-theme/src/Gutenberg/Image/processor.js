import { Image } from './Image';

const processor = {
    test: ({ node }) => node.component === "figure",
    priority: 20,
    processor: ({ node }) => {
        if (node.props.className.includes('wp-block-image')) {
            //const style = node.props.style;
            node.component = Image;
            return node;
        }

        
        return node;
    },
};

export default processor;
