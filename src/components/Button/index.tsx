import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

function Button ({asChild, children, className, ...props} : ButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
    <Comp
        className={clsx(
            "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-400 mt-6", 
            className)}
            {...props}
            >
                {children}
    </Comp>
    );
}

export default Button;