import React from 'react';
import { IonIcon } from '@ionic/react';

import { SOCIAL_ICONS } from '../../assets/constants/social-media';

export const SocialMedia: React.FC = () => {
  return (
    <>
      {SOCIAL_ICONS.map(item => (
        item[0]
          ? <IonIcon className="ion-padding-vertical ion-margin ion-padding-start" icon={item} size="large" />
          : <IonIcon className="ion-padding-vertical ion-margin" icon={item} size="large" />
      ))}
    </>
  )
};

export default SocialMedia;