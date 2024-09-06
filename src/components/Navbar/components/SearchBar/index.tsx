import { InputHTMLAttributes, ReactNode, useContext } from "react";
import { Form, LightInput, DarkInput } from "./style";
import { ThemeContext } from "../../../../contexts";
import { match } from "ts-pattern";

type SearchBarProps = {
    placeholder: string
};

const SearchBar = (props: SearchBarProps): ReactNode => {
    return (
        <Form>
            <Input placeholder={ props.placeholder }/>
        </Form>
    );
};

const Input = (props: InputHTMLAttributes<HTMLInputElement>): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ theme: "dark" }, () => <DarkInput { ...props }/>)
        .with({ theme: "light" }, () => <LightInput { ...props }/>)
        .exhaustive();
};

export default SearchBar;