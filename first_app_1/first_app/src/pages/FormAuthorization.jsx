import {SignIn} from "../components/SignIn";


const FormAuthorization = ({onClickSignIn}) => {
  return (
    <>
      <section className="registration">
        <SignIn onClickSignIn={onClickSignIn}/>
      </section>
    </>
  );
};

export {FormAuthorization};
