import GreyButton from "./GreyButton";
import { useNavigate } from "react-router-dom";

function Welcome() {

  
  const navigate = useNavigate();

  function navToSelectCategory(){
    navigate('/selectCategory')
  }
  function navToLeaderBoard(){
    navigate('/leaderBoard')
  }

  return (
    <>
      <div className="mt-5 pt-5 text-center" style={{minheight: "100vh"}}>
        <h1 className="pt-5  mt-5">Welcome to the Quiz app</h1>
        <GreyButton text="Play" onClick={() => navToSelectCategory()}/>
        <GreyButton text="Display leaderboard" onClick={() => navToLeaderBoard()}/>
      </div>
    </>
  );
}

export default Welcome;
