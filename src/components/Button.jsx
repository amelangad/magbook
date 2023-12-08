import React from 'react'

export default function Button(props) {
  return (
    <button type={props.type}
    onClick={props.onClick}
    className="w-fit border-2 text-white border-white bg-slate-900 px-5 py-2 m-2 rounded mr-5 hover:bg-[#ffffff] hover:text-slate-900 my-5 transition-transform font-roboto" >{props.text}</button>
  )
}
