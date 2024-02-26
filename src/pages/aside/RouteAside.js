import You from './you/You';
import History from './history/History';
import Trending from './trending/Trending';
import Music from './music/Music';
import Gaming from './gaming/Gaming';

const RouteAside = [
  { path: '/You', component: You },
  { path: '/History', component: History },
  { path: '/Trending', component: Trending },
  { path: '/Music', component: Music },
  { path: '/Gaming', component: Gaming },
];
export { RouteAside };
