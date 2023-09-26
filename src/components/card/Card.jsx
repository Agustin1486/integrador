import styles from "./card.module.css"


export default function Card({ onClose, name, species, gender, image}) {
  console.log(Card)
   return (
     <div className={styles.container}>
      <div className={styles.buttonContainer}><button onClick={onClose}className={styles.button}>X</button></div>
       
       <div className={styles.imgContainer}><img src={image} alt="Not found" />
       <h2 className= {styles.name}>{name}</h2>
       </div>

      <div className={styles.propsContainer}>
      <h2>{species}</h2>
      <h2>{gender}</h2>
       </div>
       
       
     </div>
   );
 }
