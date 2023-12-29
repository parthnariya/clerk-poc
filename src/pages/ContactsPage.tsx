import { Link } from "react-router-dom";
 
export default function ContactsPage() {
  return (
    <>
      <h1>Contacts page</h1>
      <p>This is a protected page.</p>
 
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/">Return to Homepage</Link></li>
      </ul>
    </>
  );
}