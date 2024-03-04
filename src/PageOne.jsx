import { Link } from "react-router-dom"

const PageOne = () =>{
  return(
    <div>
      <h1>this is Page One</h1>
      <Link to="/">Click to back</Link>
    </div>
  )
}

export default PageOne;