
import axios from "axios";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const GetMenuButton = ({OnMenuGenerated}) => {
  const OnMenuGeneratedMine = async () => {
    await sleep(300);
    await axios.get('/get/gramms')
  .then( res=>{
    if(res.data.isResult){
      console.log(res.data.menu_breakfast);
      OnMenuGenerated(res.data.menu_breakfast, res.data.menu_lunch, res.data.menu_dinner, res.data.menu_snack);
      window.location.href = "#menu";
    }
    else{
     
    }
  })
  .catch(err=> console.log(err))
}
    return (
        <>
        <div>
          <button onClick={OnMenuGeneratedMine}>Нажми меня</button>
        </div>
        </>
      );
};

export {GetMenuButton};