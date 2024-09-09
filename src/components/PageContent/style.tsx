import styled from "styled-components";

const Page = styled.main`
    position: static;

    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 50px 3rem 50px 3rem;
`;

const LightPage = styled(Page)`
    background-color: #fff;
`;

const DarkPage = styled(Page)`
    background-color: #3f4044;
`;

export { LightPage, DarkPage };