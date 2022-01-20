import React from 'react';
import { IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoTiktok,
  logoTwitch,
  menuSharp,
  searchSharp,
  settingsSharp
} from 'ionicons/icons';
import styled from 'styled-components';

const IonIconXLarge = styled(IonIcon)`
  font-size: 48px;
`;

export const Menu: React.FC = () => {
  return (
    <div className="ion-float-right">
      <div className="ion-hide-md-down ion-padding ion-margin">
        <IonIconXLarge className="ion-padding-horizontal" icon={logoFacebook} size="large" />
        <IonIconXLarge icon={logoTwitter} size="large" />
        <IonIconXLarge icon={logoInstagram} size="large" />
        <IonIconXLarge icon={logoTiktok} size="large" />
        <IonIconXLarge icon={logoTwitch} size="large" />
        <IonIconXLarge icon={searchSharp} size="large" />
        <IonIconXLarge icon={settingsSharp} size="large" />
        <IonIconXLarge icon={menuSharp} size="large" />
      </div>
      <div className="ion-hide-sm-up ion-padding ion-margin">
        <IonIcon name="menu-sharp" size="large"></IonIcon>
      </div>
    </div>
  )
};

export default Menu;