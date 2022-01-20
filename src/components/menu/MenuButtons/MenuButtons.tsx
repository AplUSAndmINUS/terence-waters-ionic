import React from "react";
import { IonIcon } from "@ionic/react";
import {
  menuSharp,
  searchSharp,
  settingsSharp
} from "ionicons/icons";

export const MenuButtons: React.FC = () => {
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
          className="ion-padding-vertical ion-padding-end ion-margin"
          icon={menuSharp}
          style={{ fontSize: "36px" }} />
    </div>
  )
};

export default MenuButtons;