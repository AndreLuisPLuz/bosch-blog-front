import styled from "styled-components";

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;

    height: 50px;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 4rem 0 4rem;

    border-bottom: 1px solid #64748b;
`;

const LightNav = styled(Nav)`
    background-color: #60a5fa;
    color: #fff
`;

const DarkNav = styled(Nav)`
    background-color: #36537e;
    color: #fff
`;

export { LightNav, DarkNav };