import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

const Icon = styled.img`
    height: 40px;
    width: 40px;

    object-fit: contain;
`;

export { Container, Icon };