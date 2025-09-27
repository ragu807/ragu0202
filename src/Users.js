import { useParams } from "react-router-dom"
export const Users = () => {
    const {id}=useParams();
  return (
    <>
    <div>Users</div>
    <h1>{id}</h1>
    </>
  )
}
