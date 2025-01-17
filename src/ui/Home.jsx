import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center">
      <h1 className="text-3xl text-center font-semibold  mb-8 sm:my-16  ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
           Straight out of the oven, straight to you.
        </span>
      </h1>
      {
        username === '' ? (
          
          <CreateUser />
        ) : (
          <Button to={'/menu'} >
            Continue ordering, {username}
          </Button>
        )
      }
    </div>
  );
}

export default Home;
