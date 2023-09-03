import { Navigate } from 'react-router-dom'

export const PrivateRoutes=({children})=>{
  let isAuthorized =  localStorage.getItem("token")
  return(
    isAuthorized ? children : <Navigate to="/" />
  )
}

export const PublicRoutes=({children})=>{
  let isAuthorized =  localStorage.getItem("token")
  return(
     !isAuthorized ? children : <Navigate to={'/dashboard/blogArticles'} />
  )
}