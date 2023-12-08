"use client"

import {useContext, createContext, useState, useEffect} from 'react'
import Home from '../components/MoviesList'

const ResultContext = createContext({});

export function useResult() {
    return useContext(ResultContext);

}
export function ResultProvider ({children}) {
    const [search,setSearch] = useState('batman');
    const [result, setResult] =useState([]);
    const [fav, setFav] = useState([]);
    
    
    const getMovies = async (search) => {
      const url = `https://www.omdbapi.com/?s=${search}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      const res = await fetch(url);
      const resJson = await res.json()
      if(resJson.Search){
        setResult(resJson.Search)
      }
      else setSearch()
    }
    
    useEffect(()=> {
      getMovies(search)
    }, [search])
    
    const saveToLocalStorage = (items) => {
      localStorage.setItem('favlist_movies', JSON.stringify(items))}

      const saveToSessionStorage = (items) => {
        sessionStorage.setItem('favlist_movies', JSON.stringify(items))}

    
    return(<ResultContext.Provider value={{ search, setSearch, setResult, result, getMovies, fav, setFav, saveToLocalStorage, saveToSessionStorage}}>
        {children}
    </ResultContext.Provider>
    )

    }


