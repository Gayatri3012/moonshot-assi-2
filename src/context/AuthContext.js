import { createContext, useReducer, useMemo, useEffect } from "react";


export const AuthContext = createContext({
    isAuthenticated: null,
    userId: null,
    updateAuthStatus: () => {},
    updateUserId: () => {},
})
  
 const authReducer = (state, action) => {
    const { type, payload } = action;

    if(type === 'UPDATE_AUTH_STATUS'){
        return {
          ...state,
          isAuthenticated: payload,
        }
    }

    if(type === 'UPDATE_USER_ID'){
      return {
        ...state,
        userId: payload
      }
    }

    return state;
};
  

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    isAuthenticated: false, 
    userId: null,
  });
  
  useEffect(() => {
    const checkAuthentication = async () => {
      const user = localStorage.getItem('userId');
      if(user){
        console.log(state.isAuthenticated);
        console.log(state.userId)
        await handleUpdateUserId(user);
        await handleUpdateAuthStatus(true);
      }
    }
    checkAuthentication()
  },[])

  const handleUpdateAuthStatus = async (authStatus) => {

    console.log('updating authentication status');
      dispatch({
          type: 'UPDATE_AUTH_STATUS',
          payload: authStatus ,
      })
  };

  const handleUpdateUserId = async (user_id) => {
    console.log('updating user id')
    dispatch({
      type: 'UPDATE_USER_ID',
      payload: user_id ,
    })
  }



  const contextValue = useMemo(() => ({
    isAuthenticated: state.isAuthenticated,
    userId: state.userId,
    updateAuthStatus: handleUpdateAuthStatus,
    updateUserId: handleUpdateUserId,
}), [state.isAuthenticated]);

  return <AuthContext.Provider value={contextValue}>
    {children}
    </AuthContext.Provider>;
};