
import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }{ id}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,  // title debe ser un string y es requerido
  url: PropTypes.string.isRequired,    // url debe ser un string y es requerido
  id: PropTypes.string.isRequired
}