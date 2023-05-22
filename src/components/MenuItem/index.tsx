import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { IconProps } from '@phosphor-icons/react';

interface MenuItemRootProps {
    children: ReactNode;
    route: string;
}

function MenuItemRoot(props: MenuItemRootProps) {
    return (
            <li className='mt-5'>
                <Link to = {props.route}>
                <div className="flex items-center px-4 rounded-full hover:bg-sky-400 ml-2">
                    {props.children}
                </div>
                </Link>
            </li>

          );
}

interface MenuItemIconProps extends IconProps  {
    children: ReactNode;
}

function MenuItemIcon(props: MenuItemIconProps ) {
    return (        
        <Slot className= "text-slate-50 text-5xl">{props.children}</Slot>
    );
}

export const MenuItem = {
    Root: MenuItemRoot,
    Icon: MenuItemIcon,

}
