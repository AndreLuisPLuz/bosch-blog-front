import styled from "styled-components";

const Form = styled.form`
    height: fit-content;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    height: 35px;
    width: 50rem;

    border-radius: 20px;

    padding:  0 2rem 0 2rem;
`;

const LightInput = styled(Input)`
    background-color: #fff;
`;

const DarkInput = styled(Input)`
    background-color: #3a4146;
    &::placeholder {
        color: #fff
    }
`;

export { Form, LightInput, DarkInput };