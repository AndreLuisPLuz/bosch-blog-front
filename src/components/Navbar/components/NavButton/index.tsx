import { ButtonHTMLAttributes, ReactNode } from "react";

type NavButtonProps = {
    title: string,
    icon?: string,
    showIcon?: boolean
};

const NavButton = ({ title, icon, showIcon, ...props }: NavButtonProps & ButtonHTMLAttributes<HTMLButtonElement>): ReactNode => {
    return (
        <button { ...props }>
            { title }
            { showIcon && <img src={ icon } alt="" /> }
        </button>
    );
};

export default NavButton;