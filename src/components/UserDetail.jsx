import { useParams } from "react-router-dom";
import { useUserDeteail } from "../hooks/queries";

function UserDetail() {
  const { id } = useParams();
  const { data } = useUserDeteail(id);
  console.log(data);

  return <div>salam - {id}</div>;
}

export default UserDetail;
