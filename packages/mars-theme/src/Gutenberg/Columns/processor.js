import { Column, Columns } from './Columns';

const processor = {
    test: ({ node }) => node.component === "div",
    priority: 20,
    processor: ({ node }) => {
        if (node.props.className.includes('wp-block-columns')) {
            //const style = node.props.style;
            node.component = Columns;
            return node;
        }
        if (node.props.className.includes('wp-block-column')) {
            //const style = node.props.style;
            node.component = Column;
            return node;
        }

        return node;
    },
};

export default processor;
