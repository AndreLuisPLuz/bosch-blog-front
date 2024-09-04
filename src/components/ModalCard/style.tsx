import styled from "styled-components";

const BackPane = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding-top: 15vh;

    background-color: rgba(0, 0, 0, 0.6);
`;

const DialogCard = styled.dialog`
    position: relative;

    height: fit-content;
    width: 90%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    padding: 1rem 2rem 1rem 2rem;

    border-radius: 20px;
`;

const FormCard = styled.form`
    position: relative;

    height: fit-content;
    width: 90%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    padding: 1rem 2rem 1rem 2rem;

    border-radius: 20px;
`;

const CloseButtonRow = styled.div`
    height: 20px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    padding: 1rem 0 0 0;
`;

export { BackPane, DialogCard, FormCard, CloseButtonRow };