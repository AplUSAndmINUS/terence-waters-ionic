import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar
} from '@ionic/react';
import MenuButton from '../../components/menu/MenuButton/MenuButton';

import './SkinPage.scss';
import { FullScreenRow } from './styled';

export const SkinPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar className="ion-no-border" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <MenuButton /> 
          </IonToolbar>
        </IonHeader>
        <FullScreenRow className="ion-hide-lg-up ion-align-items-center ion-justify-content-end ion-padding">
          <IonCol size="12">&nbsp;</IonCol>
          <IonCol size="12" className="ion-padding">
            <h3 className="ion-text-center">hi there, I'm</h3>
            <h1 className="ion-text-center">Terence Waters</h1>
            <h3 className="ion-text-center">ui/ux designer, <br />web developer &amp; tutor</h3>
            <button className="ion-center">hire me!</button>
          </IonCol>
        </FullScreenRow>
        <FullScreenRow className="ion-justify-content-center ion-align-items-center ion-hide-lg-down ion-padding">
          <IonCol>&nbsp;</IonCol>
          <IonCol className="ion-padding">
            <h3 className="ion-text-center">hi there, I'm</h3>
            <h1 className="ion-text-center ion-margin-bottom">Terence Waters</h1>
            <div className="ion-justify-content-center ion-align-items-center">
              <h3 className="ion-text-center">ui/ux designer, <br />web developer &amp; tutor</h3>
              <IonButton color="primary">hire me!</IonButton>
            </div>
          </IonCol>
        </FullScreenRow>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
