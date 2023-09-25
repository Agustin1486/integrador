import styles from "./card.module.css"


export default function Card({ onClose, name, species, gender, image}) {
  console.log(Card)
   return (
     <div className={styles.container}>
      <div className={styles.buttonContainer}><button onClick={onClose}className={styles.button}>X</button></div>
       
       <h2>Name: {name}</h2>
       <h2>Species: {species}</h2>
       <h2>Gender: {gender}</h2>
       <img src={image} alt="" />
     </div>
   );
 }
