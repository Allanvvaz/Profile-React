import styles from "./styles.module.css"
import Perfil from "./img/Perfil.jpeg"


export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={Perfil} alt={props.name} width={200} height={300} />
      <h2 className={styles.name}>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={styles.links}>
        <a href={props.githubUrl} target="_blank">GitHub</a>
        <a href={props.linkedinUrl} target="_blank">LinkedIn</a>
        
      </div>
    </div>
  )
}