import React from "react";
import { IonIcon } from "@ionic/react";
import {
  menuSharp,
  searchSharp,
  settingsSharp
} from "ionicons/icons";

interface MenuButtonsProps {
  isMobile?: boolean;
}

export const MenuButtons: React.FC<MenuButtonsProps> = ({ isMobile = false }) => {
  return (
    <div className="ion-float-right ion-margin-end">
      <IonIcon
        className="ion-padding-vertical ion-margin"
        icon={searchSharp}
        size="large" /> 
        <IonIcon
          className="ion-padding-vertical ion-margin"
          icon={settingsSharp}
        size="large" />
        <IonIcon
          className={isMobile ? "ion-padding-vertical ion-margin" : "ion-padding-vertical ion-margin ion-padding-end"}
          icon={menuSharp}
          style={{ fontSize: "36px" }} />
    </div>
  )
};

export default MenuButtons;