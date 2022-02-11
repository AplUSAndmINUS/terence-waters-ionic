import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import About from './pages/About/About';
import Artwork from './pages/Projects/Artwork/Artwork';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Designs from './pages/Projects/Designs/Designs';
import Events from './pages/Events/Events';
import GitHub from './pages/GitHub/GitHub';
import Intro from './pages/Intro/Intro';
import Music from './pages/Music/Music';
import NotFound from './pages/404/404';
import Photography from './pages/Projects/Photography/Photography';
import Portfolio from './pages/Portfolio/Portfolio';
import SkinPage from './pages/SkinPage/SkinPage';
import './theme/main.scss';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';

setupIonicReact({
  // nothing to call
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={SkinPage} />
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio/artwork" component={Artwork} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio/designs" component={Designs} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/github" component={GitHub} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/portfolio/photography" component={Photography} />
        <Route exact path="/portfolio" component={Portfolio} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
