import {Header} from "./components/Header.jsx"
import { Post } from "./components/Post.jsx";
import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar.jsx";

const posts = [
  {
    id: 1,
  author: {
    avatarUrl:'https://github.com/joseaugustoss.png',
    name:'José Augusto',
    role: 'CTO @hipocode'
  },
    content:[
      
      {type:'paragraph',content: 'Fala galeraa 👋 '},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:'link',content:' jane.design/doctorcare'}
      
    ],
    publishedAt: new Date('2023-07-29 08:10:05')
  },
  {
    id: 2,
  author: {
    avatarUrl:'https://github.com/diego3g.png',
    name:'Diego Fernandes',
    role: 'CTO @rocketseat'
  },
    content:[
      
      {type:'paragraph',content: 'Fala galeraa 👋 '},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type:'link',content:' jane.design/doctorcare</a>'}
      
    ],
    publishedAt: new Date('2023-07-30 13:10:05')
  }
]
export function App() {

  return (
  <>
    <Header />
    <div className={styles.wrapper}> 
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
    </div>
  </>
  )
}

