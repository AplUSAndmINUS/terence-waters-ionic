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
        <IonRow className="ion-hide-md-up" style={{ width: '100%' }}>
          <IonCol size="12" className="ion-align-items-center ion-justify-content-center">Six Small Screen</IonCol>
          <IonCol size="12" className="ion-align-items-center ion-justify-content-center">hi there, I'm Terence Waters
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center ion-hide-md-down">
          <IonCol className="ion-align-items-center ion-justify-content-center ion-hide-sm-down">hi there, I'm Terence Waters</IonCol>
          <IonCol>Six Medium screen</IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
