import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import MenuButton from '../../components/menu/MenuButton/MenuButton';

import './SkinPage.scss';

export const SkinPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar className="ion-no-border" style={{ position: 'fixed', top: 0, right: 0 }}>
            <MenuButton /> 
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol className="ion-align-items-center ion-justify-content-center">
            <IonRow className="ion-align-items-center ion-justify-content-center" style={{ height: '50vh'}}>Six</IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-center" style={{ height: '50vh'}}>hi there, I'm Terence Waters</IonRow>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
