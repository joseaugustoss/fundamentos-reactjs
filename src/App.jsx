import {Header} from "./components/Header.jsx"
import { Post } from "./components/Post.jsx";
import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {

  return (
  <>
    <Header />
    <div className={styles.wrapper}> 
        <Sidebar/>
        <main>
          <Post 
            author="José Augusto"
            content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
        </main>
    </div>
  </>
  )
}

