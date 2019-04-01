import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/',
  },
  PROJECTS: {
    path: '/projects',
    Component: Projects,
    linkTo: () => '/projects',
  },
  ABOUT: {
    path: '/about',
    Component: About,
    linkTo: () => '/about',
  },
  CONTACT: {
    path: '/contact',
    Component: Contact,
    linkTo: () => '/contact',
  },
};
