import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './styled.tsx';

export const SkinPage: React.FC = () => {
  return (
    <IonPage id="home-page">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
