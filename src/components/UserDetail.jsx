import { useParams } from "react-router-dom";
import { useGetDetail } from "../hooks/queries";

function UserDetail() {
  const { id } = useParams();
  const { data } = useGetDetail(id);
  console.log({ data });

  return <div>user - {id}</div>;
}

export default UserDetail;
