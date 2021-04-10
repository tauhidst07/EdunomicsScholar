import React, { useState, createContext } from 'react';
export const MyId = createContext();

export const MyIdProvider = (props) => {
  const [id, setId] = useState('');

  return(
    <MyId.Provider value={[id, setId]}>
      {props.children}
    </MyId.Provider>
  )
}
