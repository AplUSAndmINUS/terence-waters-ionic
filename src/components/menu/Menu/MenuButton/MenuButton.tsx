import React from 'react';

import { MenuOption } from './styled';

interface MenuOptionProps {
  name: string;
  size?: string;
}

export const MenuButton: React.FC<MenuOptionProps> = ({ name, size }) => {
  return (
    <MenuOption name={name} size={size} />
  )
};