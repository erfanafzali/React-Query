import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  console.log(id);
  return <div>salam - {id}</div>;
}

export default UserDetail;
