import { IonCol, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import MenuButton from '../../components/menu/MenuButton/MenuButton';

import { FullScreenRow } from './styled';
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
        <FullScreenRow className="ion-hide-md-up">
          <IonCol size="12" className="ion-align-items-center ion-justify-content-center">Twelve Small Screen</IonCol>
          <IonCol size="12" className="ion-align-items-center ion-justify-content-center">
            <h3 className="ion-text-center">hi there, I'm</h3>
            <h1 className="ion-text-center">Terence Waters</h1>
            <h3 className="ion-text-center">ui/ux designer, <br />web developer &amp; tutor</h3>
            <button>hire me!</button>
          </IonCol>
        </FullScreenRow>
        <FullScreenRow className="ion-justify-content-center ion-hide-md-down">
          <IonCol className="ion-align-items-center ion-justify-content-center ion-hide-sm-down">hi there, I'm Terence Waters</IonCol>
          <IonCol>Six Medium screen</IonCol>
        </FullScreenRow>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
