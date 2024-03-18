import { useAddPost } from "../hooks/mutations";

function Form() {
  const { mutate, isLoading, data } = useAddPost();
  console.log(isLoading, data);



  
  const sendHandler = () => {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    mutate(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <button onClick={sendHandler}>Send</button>
    </div>
  );
}

export default Form;
