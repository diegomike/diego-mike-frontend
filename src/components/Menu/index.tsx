import { House, UsersThree, User } from '@phosphor-icons/react';
import parrot from '../../assets/parrot.svg';
import Text from '../Text';
import { MenuItem } from '../MenuItem';

function Menu () {
    return (
    <div className="basis-1/6 border-r border-slate-400 ml-4 pt-4">
        <div className="flex items-center ml-4">
        <img src={parrot} alt="Logo Menu" />
        <Text className="font-extrabold ml-4">Parrot</Text> 
        </div>

        <ul className= "pr-2">
            <MenuItem.Root route="/home">
                <MenuItem.Icon >
                    <House />
                </MenuItem.Icon>                
                <Text className="font-extrabold ml-4">Página Incial</Text>
            </MenuItem.Root>

            <MenuItem.Root route="/profile">
                <MenuItem.Icon >
                    <User />
                </MenuItem.Icon>                
                <Text className="font-extrabold ml-4">Perfil</Text>
            </MenuItem.Root>

            <MenuItem.Root route="/friends">
                <MenuItem.Icon >
                    <UsersThree />
                </MenuItem.Icon>                
                <Text className="font-extrabold ml-4">Amigos</Text>
            </MenuItem.Root>
        </ul>            
    </div>
    );
}

export default Menu;