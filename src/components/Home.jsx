import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/GetAPI">Get</Link>
      <br />
      <Link to="/PostAPI">Post</Link>
    </div>
  );
}

export default Home;
