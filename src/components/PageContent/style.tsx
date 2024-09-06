import styled from "styled-components";

const Page = styled.main`
    top: 50px;

    min-height: calc(100vh - 50px);
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const LightPage = styled(Page)`
    background-color: #fff;
`;

const DarkPage = styled(Page)`
    background-color: #3f4044;
`;

export { LightPage, DarkPage };