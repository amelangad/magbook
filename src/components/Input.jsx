import React from 'react'

export default function Input(props) {
  return (
    <>
      <label htmlFor="email" className="block text-lg font-small leading-6 text-white font-roboto">
        {props.text}
      </label>
      <input
        placeholder={props.name}
        id={props.name}
        name={props.name}
        type={props.type}
        autoComplete={props.name}
        required
        value={props.value}
        onChange={props.onChange}
        className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm "
      />
    </>
  )
}
