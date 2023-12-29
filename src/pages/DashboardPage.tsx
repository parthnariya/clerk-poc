import { Link } from "react-router-dom";
 
export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page.</p>
 
      <ul>
        <li><Link to="/dashboard/contacts">Contacts</Link></li>
        <li><Link to="/">Return to Homepage</Link></li>
      </ul>
    </>
  );
}