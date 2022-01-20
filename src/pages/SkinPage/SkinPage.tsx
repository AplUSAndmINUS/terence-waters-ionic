import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonToolbar
} from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoTiktok,
  logoTwitch,
  logoTwitter
} from 'ionicons/icons';

import MenuButtons from "../../components/menu/MenuButtons/MenuButtons";
import Menu from "../../components/menu/Menu";
import MenuMobile from "../../components/menu/MenuMobile";
import "./SkinPage.scss";
import { FullScreenRow } from "./styled";

const SOCIAL_ICONS = [logoFacebook, logoTwitter, logoInstagram, logoTiktok, logoTwitch];

const SocialMedia: React.FC = () => {
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

export const SkinPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar
            className="ion-no-border ion-justify-content-around"
            style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
            <MenuButtons />
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
            <IonRow className="ion-align-items-center ion-justify-content-center ion-padding">
              <IonButton className="ion-margin-bottom ion-margin-top" color="primary">hire me!</IonButton>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-center">
              <SocialMedia />
            </IonRow>
          </IonCol>
        </FullScreenRow>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
