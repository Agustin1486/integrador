import Card from '../card/Card';

export default function Cards({characters}) {
   const onClose = () => window.alert('Emulamos que se cierra la card');
   return (
   <div>
      {characters.map((el) => {
         return(
         <Card
         key = {el.id}
         name = {el.name}
         species = {el.species}
         gender = {el.gender}
         image = {el.image}
         onClose={onClose}
         />
         );
      })}
   </div>
   );
} 