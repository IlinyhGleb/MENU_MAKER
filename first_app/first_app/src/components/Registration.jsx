import {registrButton, registrData, registrTittle} from "../mockData/registrData";


export const RegisterTitleTemplate = ({registrTittle}) => {
    const {text} = registrTittle;

    return (<h3>{text}</h3>)
};

export const CreateInputTemplate = ({elements}) => {
    const {title, type, label } = elements;
    switch(type) {
        case "input":
          return <div className="form-wrapper">
          <label htmlFor="">{label}</label>
          <input className="form-control" placeholder={title}></input>
      </div>
        case "button":
          return (
            <button className="register_button">{title}</button>
          );
        default:
          return ``;
      }
};

export const CreateMapTemplate= ({elements}) => {
    return elements.map((element, index) => (
        <CreateInputTemplate key={index} elements={element} />
      ));
};

const Registration = () => {
    const {registrTittle,
        elements,
        registrButton} = registrData

    return (
        <>
        <div className="inner">
        <RegisterTitleTemplate registrTittle = {registrTittle} />
        <CreateMapTemplate elements={elements} />
        </div>
        </>
      );
};
export {Registration};