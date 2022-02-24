import React from 'react';

export const Home: React.FC = () => {
  return (
    <h1>This is the Home Page!</h1>
  )
};

export default Home;

/* Current Home Page Markup

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
  </IonInfiniteScroll> */