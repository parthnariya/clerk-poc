import { Link } from "react-router-dom";
 
export default function ProfilePage() {
  return (
    <>
      <h1>Profile page</h1>
      <p>This is a protected page.</p>
 
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/">Return to Homepage</Link></li>
      </ul>
    </>
  );
}