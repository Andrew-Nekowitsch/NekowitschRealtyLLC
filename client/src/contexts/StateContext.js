import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
	userProfile: false,
	rent: false
}

export const StateContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	return <StateContext.Provider value={{ activeMenu, }}>
		{children}
	</StateContext.Provider>
}

export function useStateContext() {
	return useContext(StateContext);
}