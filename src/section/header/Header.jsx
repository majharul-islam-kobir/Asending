/* eslint-disable react/prop-types */
import Container from "../../component/Container"

import Button from "../../component/Button";
import Search from "../../Search";

function Header({onAscending , onDiscending , onSearch}) {

  const handleSearch = (test) => {
    onSearch(test);
    
  }


  return (
    <div className="">
        <Container className="flex justify-between rounded-sm py-2 ">
            <div className="flex ">
                <Button onClick={() => onAscending()} className="bg-[#00C1C1] mx-2 p-2 rounded-md text-white text-xl ">Asending</Button>
                <Button onClick={() => onDiscending()} className="bg-[#00C1C1] mx-2 p-2 rounded-md text-white text-xl ">Descending</Button>
            </div>

           <Search  onSearch = {handleSearch}/>

             
        </Container>

    </div>
  )
}

export default Header