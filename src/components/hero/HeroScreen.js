import { useParams } from "react-router-dom";


export const HeroScreen = () => {

   const { heroeId } = useParams();
  return(

        <div> 
            <h1>Hero Screen</h1>
        </div>
  )
};
