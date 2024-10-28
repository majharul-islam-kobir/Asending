/* eslint-disable react/prop-types */
import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";



function Search({onSearch}) {

    let [text , setText] = useState (' ')

    let keyHendeler = (e) => {
      setText(e.target.value);
      
    }
    onSearch(text);
     


  return (
    <div className="max-w-sm">
    <TextInput type="text" onKeyUp={keyHendeler} rightIcon={FaSearch } placeholder="Search" required />
      
   
    </div>
  )
}

export default Search