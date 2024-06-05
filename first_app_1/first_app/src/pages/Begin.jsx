import {Header} from "../components/Header";
import {BeginMenu} from "../components/BeginMenu";


const Begin = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>  
      <section className="section hero_section ">
        <BeginMenu />
      </section>
    </>
  );
};

export {Begin};
