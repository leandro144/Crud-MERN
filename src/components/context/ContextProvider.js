import React, { createContext, useState } from 'react'

export const adddata = createContext("");

const ContextProvider = ({children}) => {

const [udata, setUdata] = useState("");

  return (
    <adddata.Provider>
        {{children}}
    </adddata.Provider>
  )
}

export default ContextProvider;