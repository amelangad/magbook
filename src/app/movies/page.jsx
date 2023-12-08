import React from 'react'
import MoviesList from '../../components/MoviesList'
import Searchbar from '../../components/Searchbar'

export default function page() {
  return (
    <div className ="w-full min-h-[100vh] bg-[#101227] py-20">
     <Searchbar />
     <MoviesList/>
    </div>
  )
}
