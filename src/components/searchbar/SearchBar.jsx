import styles from "./SearchBar.module.css"
export default function SearchBar({onSearch}) {
   return (
      <div className={styles.container}>
         <input type= "Search" />
         <button onClick={(id)=>{onSearch(id)}}>Agregar</button> 
      </div> 
   );
}

