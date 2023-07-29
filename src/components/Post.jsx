import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props){
  console.log(props)
  return (
  <article className={styles.post}>
   <header>
    <div className={styles.author}>
        <Avatar src="https://github.com/joseaugustoss.png" />
        <div className={styles.authorInfo}>
          <strong>José Augusto</strong>
          <span>Web Developer</span>
        </div>
    </div>
        <time title="29 de junho de 2023" dateTime="2023-06-29 14:05:04">Publicado há 1h</time>
   </header> 
      <div className={styles.content}>
        
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe seu comentário"
        />
     <footer>
     <button type="submit">Publicar</button>
     </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
  </article>
  )
}
