import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/users">User</Link>
      <Link to="/users2">User2</Link>
    </div>
  );
}

export default HomePage;
