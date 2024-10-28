/* eslint-disable react/prop-types */

function Container(props) {
  return (
    <div className ={`max-w-[1120px] p-2 m-auto bg-[#fff] ${props.className}`} >{props.children}</div>
  )
}

export default Container