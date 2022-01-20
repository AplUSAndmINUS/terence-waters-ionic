import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonToolbar
} from '@ionic/react';
import MenuButton from '../../components/menu/Menu/Menu';

import './SkinPage.scss';
import { FullScreenRow } from './styled';

export const SkinPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar
            className="ion-no-border ion-justify-content-flex-end"
            style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <MenuButton /> 
          </IonToolbar>
        </IonHeader>
        <FullScreenRow className="ion-hide-lg-up ion-align-items-center ion-justify-content-end ion-padding">
          <IonCol size="12">&nbsp;</IonCol>
          <IonCol size="12" className="ion-padding">
              <h3 className="ion-text-center white">hi there, I'm</h3>
              <h1 className="ion-text-center white">Terence Waters</h1>
              <h3 className="ion-text-center white">ui/ux designer, <br />web developer &amp; tutor</h3>
            <IonRow className="ion-center ion-align-items-center ion-justify-content-center ion-padding">
              <IonButton className="ion-center white ion-margin-bottom ion-margin-top" color="primary">hire me!</IonButton>
            </IonRow>
          </IonCol>
        </FullScreenRow>
        <FullScreenRow className="ion-justify-content-center ion-align-items-center ion-hide-lg-down ion-padding">
          <IonCol>&nbsp;</IonCol>
          <IonCol className="ion-padding">
            <h3 className="ion-text-center white">hi there, I'm</h3>
            <h1 className="ion-text-center white ion-margin-bottom">Terence Waters</h1>
            <h3 className="ion-text-center white ion-margin-top">ui/ux designer, <br />web developer &amp; tutor</h3>
            <IonRow className="ion-center ion-align-items-center ion-justify-content-center ion-padding">
              <IonButton className="ion-center ion-margin-bottom ion-margin-top" color="primary">hire me!</IonButton>
            </IonRow>
          </IonCol>
        </FullScreenRow>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
