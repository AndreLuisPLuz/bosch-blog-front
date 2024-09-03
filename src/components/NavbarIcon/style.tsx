import styled from "styled-components";

const Container = styled.div`
    height: fit-content;
    width: fit-content;

    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

const Icon = styled.img`
    height: 40px;
    width: 40px;

    object-fit: contain;
`;

export { Container, Icon };