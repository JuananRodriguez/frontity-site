import React from 'react';
import { connect, styled } from 'frontity';



const Page = ({ state, actions, libraries }) => {


    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];

    // Get the data of the author.
    //const author = state.source.author[post.author];
    // Get a human readable date.
    //const date = new Date(post.date);

    // Get the html2react component.
    const Html2React = libraries.html2react.Component;

    /**
     * Once the page has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    //   useEffect(() => {
    //     actions.source.fetch("/");
    //     List.preload();
    //   }, []);

    return data.isReady ? (
        <Content>
            <ContainerWrapper>
                <Html2React html={page.content.rendered} />
            </ContainerWrapper>
        </Content>
    ) : 'loading...';

}

export default connect(Page);

const Content = styled.div`
    max-width: 1350px;
    margin: auto;
    background-color: #fff;
    width: 100%;
    padding: 1rem 1rem 4vh 1rem;
    box-sizing: border-box;
`;

const ContainerWrapper = styled.div`
    box-sizing: border-box;
`;