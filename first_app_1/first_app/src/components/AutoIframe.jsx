import headerData from "../mockData/headerData";

export const AutoIframe = ({ onClickSignIn }) => {
    const href ="/authorization";
    return (
        <iframe id = "iframe" src={href}/>
      
    );
};
  