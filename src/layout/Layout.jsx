/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import Banner from "../section/banner/Banner"
import Header from "../section/header/Header"
import axios from 'axios'; 

function Loading (){
  return(
  <div className="w-full min-h-[600px] flex justify-center items-center text-black">
     <span className="loading loading-spinner loading-lg"></span> 
  </div>

  )}


function Layout() {
 let [data , setData]= useState ([])
 let [searchtext , setSearchText] = useState (' ')

//  let seareHandler = (text) => {
//   setSearchText(text);
  
//  }
  
  useEffect(() =>{
    async function getData () {
      let galleryData = await axios.get('https://course.divinecoder.com/food/random/10');
     
      
      setData(galleryData.data);    
        
    }


    getData()
  },[])

  let ascendingHendeler = () => {
  setData( item => {
    return item.toSorted ((a , b) => a.name.localeCompare(b.name));
  })
   
  };


  let discendingHendeler = () => {
    let updateData =  data. toSorted ( (a , b) => b.name.localeCompare(a.name));
    setData (updateData);
  };

  return (
    <>
      <Header onSearch={(text) =>   setSearchText(text)} onAscending={ascendingHendeler} onDiscending={discendingHendeler} />
     
      {data.length == 0 ? <Loading /> :<Banner galleryItemsData={
        data.filter(item => {
            return item.name.toLowerCase().includes(searchtext);
        })
        }/>
        
       }
      
      
    </>
  )
}

export default Layout
