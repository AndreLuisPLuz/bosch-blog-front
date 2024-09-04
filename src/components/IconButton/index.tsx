import { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = {
    icon: string;
};

const IconButton = ({ icon, ...props } : IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>): ReactNode => {
    return (
        <button { ...props }>
            <img src={ icon } alt="" />
        </button>
    );
};

export default IconButton;