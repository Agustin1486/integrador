import Card from '../card/Card';
import styled from "styled-components"


const Div = styled.div`
   display: flex ;
   grid-template-columns: 20% 20% 20% 20%;
   justify-content: space-evenly;
   padding: 5px;
   width: screen;
   margin: auto;
   height: full;
`;

export default function Cards({characters}) {
   const onClose = () => window.alert('Emulamos que se cierra la card');
   return (
   <Div>
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
   </Div>
   );
} 