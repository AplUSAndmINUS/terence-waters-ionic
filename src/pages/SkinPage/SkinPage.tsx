import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonPage,
  IonRow,
  IonToolbar
} from "@ionic/react";
import { chevronDownSharp } from 'ionicons/icons';

import InfiniteScroll from "../../components/infinite-scroll/InfiniteScroll";
import MenuButtons from "../../components/menu/MenuButtons/MenuButtons";
import Menu from "../../components/menu/Menu";
import MenuMobile from "../../components/menu/MenuMobile";
import SocialMedia from "../../components/menu/SocialMedia";
import "./SkinPage.scss";
import { FullScreenRow } from "./styled";

export const SkinPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize, false);
    handleResize();
    window.removeEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    windowSize.width < 540
      ? setIsMobile(true)
      : setIsMobile(false)
  }, [windowSize.width]);


// next step: Create Routing for entire project and also pages :) 
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar
            className="ion-no-border ion-justify-content-around"
            style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
            <MenuButtons isMobile={isMobile} />
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
            <h3 className="ion-text-center white ion-margin-top">freelance designer, <br />web developer, model, &amp; tutor</h3>
            <IonRow className="ion-align-items-center ion-justify-content-center ion-padding">
              <IonButton className="ion-margin-bottom ion-margin-top" color="primary">hire me!</IonButton>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-center">
              <SocialMedia />
            </IonRow>
          </IonCol>
        </FullScreenRow>
        <IonInfiniteScroll style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          right: '50%'
        }}>Scroll Down <IonIcon name={chevronDownSharp} />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default SkinPage;
