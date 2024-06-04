import {Registration} from "../components/Registration";
import {Header} from "../components/Header";

const Registr = () => {
  return (
    <>
     <section className="section header">
        <Header />
      </section>
      
      <section className="section registration">
        <Registration />
      </section>
    </>
  );
};

export {Registr};
