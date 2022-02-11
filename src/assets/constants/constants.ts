import About from '../../pages/About/About';
import Artwork from '../../pages/Projects/Artwork/Artwork';
import Blog from '../../pages/Blog/Blog';
import Contact from '../../pages/Contact/Contact';
import Designs from '../../pages/Projects/Designs/Designs';
import Events from '../../pages/Events/Events';
import GitHub from '../../pages/GitHub/GitHub';
import Intro from '../../pages/Intro/Intro';
import Music from '../../pages/Music/Music';
import NotFound from '../../pages/404/404';
import Photography from '../../pages/Projects/Photography/Photography';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Projects from '../../pages/Projects/Projects';
import SkinPage from '../../pages/SkinPage/SkinPage';
import React from 'react';

interface Routes {
  path: string;
  component: React.FC;
};

export const ROUTES: Routes[] = [
  {
    path: '/',
    component: SkinPage
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/portfolio/artwork',
    component: Artwork
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/portfolio/designs',
    component: Designs
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/github',
    component: GitHub
  },
  {
    path: '/intro',
    component: Intro
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/portfolio/photography',
    component: Photography
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/projects',
    component: Projects
  }
];