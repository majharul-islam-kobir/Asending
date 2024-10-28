import PropTypes from 'prop-types';


function Card(props) {
    let {image , name} = props.galleryItemsData;
  return (

        <div className="border-2">
                    <img className='h-[250px]' src={image} alt="image" />
                    <h2 className="text-2xl font-bold ms-2 text-black">{name.toUpperCase()}</h2>
                    <a className="bg-[#80BB10] p-2 mt-2 inline-block text-xl ms-2 rounded-md font-semibold mb-2 text-white" href="#">Click Now</a>
            </div>

   

            
  )
}

Card.propTypes = {
  galleryItemsData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  
  }).isRequired,
};

export default Card