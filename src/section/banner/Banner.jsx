/* eslint-disable react/prop-types */


import Card from "../../component/Card"
import Container from "../../component/Container"


function Banner(props) {
  

  return (
    <Container>

        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2  ">
     
        {props.galleryItemsData.map(item => <Card className="" key={item.id} galleryItemsData ={item} /> )}
         
      
          
         </div>
                
    </Container>
  )
}



export default Banner 