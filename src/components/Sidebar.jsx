import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from '@phosphor-icons/react';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
     <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
     /> 
      <div className={styles.profile} >
        <Avatar src="https://github.com/joseaugustoss.png"/>
        <strong>José Augusto</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}
