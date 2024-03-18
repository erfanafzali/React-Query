import { Link } from "react-router-dom";
import { useGetData } from "../hooks/queries";

function GetApi() {
  const { data, isLoading, isPending, isError, error } = useGetData();
  console.log("data", { data });
  console.log("isLoading", isLoading);
  console.log("isPending", isPending);
  console.log("isError", isError);
  console.log("error", error);

  return (
    <div>
      {data?.data.map((item) => {
        return (
          <Link to={`/GetAPI/${item.id}`} key={item.id}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

export default GetApi;
