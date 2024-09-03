import { ReactNode } from "react";
import { Form, Input } from "./style";

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

export default SearchBar;