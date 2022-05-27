import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
	userProfile: false,
	rent: false,
	page: null,
}

export const StateContextProvider = ({ children }) => {
	const [activePage, setActivePage] = useState(true);
	return <StateContext.Provider value={{ activePage, setActivePage }}>
		{children}
	</StateContext.Provider>
}

export function useStateContext() {
	return useContext(StateContext);
}