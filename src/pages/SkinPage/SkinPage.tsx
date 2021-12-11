import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './SkinPage.scss';

export const SkinPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
