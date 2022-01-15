import React from 'react';

import { MenuButton } from './MenuButton/MenuButton';

export const Menu: React.FC = () => {
  return (
    <div>
      <div className="ion-align-items-center ion-justify-content-flex-end">
        <MenuButton name="menu-sharp" />
        <p className="ion-no-margin">menu</p>
      </div>
    </div>
  )
};

export default Menu;