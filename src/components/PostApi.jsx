import { usePostData } from "../hooks/mutations";

function PostApi() {
  const { mutate } = usePostData();
 

  const clickHandler = () => {
    const data = {
      name: "erfan",
    };
    mutate(data, {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error.message),
    });
  };

  return <button onClick={clickHandler}>queryClient</button>;
}

export default PostApi;
