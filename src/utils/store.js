import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [empList, setEmpList] = React.useState([]);

  const store = {
    empList: [empList, setEmpList],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}