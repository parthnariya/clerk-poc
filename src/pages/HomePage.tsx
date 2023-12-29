import { Link } from "react-router-dom";
 
export default function HomePage() {
  return (
    <div>
      <h1>This is the Home page visible to all</h1>
      <div>
        <ul>
          <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </div>
  )
}