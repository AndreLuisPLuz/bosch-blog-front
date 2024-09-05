import styled from "styled-components";

const FlexStartRow = styled.div`
    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0.5rem 1rem 0.5rem 1rem;
`;

const FlexEndRow = styled.div`
    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    padding: 0.5rem 1rem 0.5rem 1rem;
`;

export { FlexStartRow, FlexEndRow };