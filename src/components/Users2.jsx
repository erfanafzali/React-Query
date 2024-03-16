import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Users2() {
  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");
  const onSuccess = (data) => console.log("success", data);
  const onError = (error) => console.log("success", error.message);

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["users"],
    fetchData,
    {
      cacheTime: 50 * 1000,
      staleTime: 40 * 1000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: 10 * 1000,
      enabled: false,
      onSuccess,
      onError,
    }
  );

  console.log(isFetching);
  //   if (isLoading) return <div>Loading ...</div>;
  //   if (isError) return <div>Something went Wrong {error.message}</div>;
  return (
    <div>
      <button onClick={refetch}>Fetch</button>
      {isLoading && isFetching && <p>Loading...</p>}
      {data?.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Users2;
