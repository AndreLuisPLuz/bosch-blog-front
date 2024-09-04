import styled from "styled-components";

const BackPane = styled.div`
    position: absolute;
    transform: translate(0, 50%);

    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.2);
`;

const Card = styled.dialog`
    height: fit-content;
    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    padding: 2rem;

    border-radius: 20px;
`;

export { BackPane, Card };