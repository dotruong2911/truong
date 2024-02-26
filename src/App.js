import { Routes, Route, Link } from 'react-router-dom';

import Header from './component/header';
import Aside from './component/aside';
import Menus from './component/content/menus';
import Video from './pages/home/Video.js';
import Sub from './pages/subscriptions/Sub.js';
import styles from './App.module.scss';
import {
  All,
  Chill,
  Drum,
  Eurodance,
  Gamings,
  Gaming1,
  GoldenMusic,
  Live,
  Live1,
  Musics,
  News,
  Playlists,
  YouthMusic,
} from './pages/content/menus/index.js';
import { RouteMenu } from './pages/content/menus/routeMenu/RouteMenu.js';

import { You, History, Trending, Music, Gaming } from './pages/aside/index.js';
import { RouteAside } from './pages/aside/RouteAside.js';

function App() {
  return (
    <div className={styles['app']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['home']}>
        <div className={styles['aside']}>
          <Aside />
        </div>
        <div className={styles['content']}>
          <div className={styles['menus']}>
            <Menus />
          </div>
          <div className={styles['videos']}>
            <Routes>
              <Route path="/Home" element={<Video />}></Route>
              <Route path="/Subscriptions" element={<Sub />}></Route>
              {RouteMenu.map((item) => {
                return <Route path={item.path} element={<item.component />} />;
              })}
              {RouteAside.map((item) => {
                return <Route path={item.path} element={<item.component />} />;
              })}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
