import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">CareerTrack Lite</h1>

      {user ? <p>Welcome {user.email}</p> : <p>Not Logged In</p>}
    </div>
  );
};

export default Home;
