"use client"

import { useContext, createContext, useState } from 'react'
import Resizer from "react-image-file-resizer";


const UserContext = createContext({});

export function useUser () {
    return useContext(UserContext);

}
export function UserProvider ({children}) {
    const [img, setImg] = useState('');
    const [profile, setProfile] = useState(false)

    const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });


    const uploadImage = async (event) => {
      try {
        const file = event.target.files[0];
        const image = await resizeFile(file);
        console.log(image);
        setImg(image)
        setProfile(true)

      } catch (err) {
        console.log(err);
      }
    };


    return(<UserContext.Provider value={{img, setImg, profile, uploadImage}}>
        {children}
    </UserContext.Provider>
    )
}