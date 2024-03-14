import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function HomePage() {
  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, isLoading, isError , error } = useQuery(["users"], fetchData);
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went Wrong {error.message}</div>
  return (
    <div>
      {data.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
 
export default HomePage;
