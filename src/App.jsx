import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import Users2 from "./components/Users2";
import UserDetail from "./components/userDetail";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users2" element={<Users2 />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
