
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';



export const GifGrid = ({ category}) => {

   const { images, isLoading } = useFetchGifs( category);


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    // images.map( ( { image }) => (
                    //     <GifItem 
                    //         key={ image.id }
                    //         { ...image}
                    //     />
                    // ))

                    images.map((image) => {
                        //console.log(image); // Para ver la estructura de cada imagen
                        return image && image.id ? (
                            <GifItem 
                                key={image.id}
                                {...image}
                            />
                        ) : null;
                    })
                }
                
               
            </div>
            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired // si es obligatorio
}