
import { faqData } from "../mockData/faqData";
import imgFaq from "../assets/img/faq1.png";

export const HeaderTemplate = ({ header }) => {
    return <h1 className="center_header">{header}</h1>;
};

export const DescrTemplate = ({descr}) => {
  return <div className="faq_descr"> {descr} </div>;
};

export const FaqTemplate = ({faq}) => {
  const {question, answer} = faq;
  return(
    <div className="faq_structure">

       <img  src={imgFaq} alt="" />
      
      <div className="questAndAns">
        <div className="faq_queston"> {question} </div>
        <div className="faq_answer"> {answer} </div>  
      </div>   
      
    </div>
)};

export const FaqListTemplate = ({faq}) => {
  return (
    <ul>
      {faq.map((item, index) => (
        <FaqTemplate key={index} faq={item} />
    ))}
    </ul>
  );
};



export const Faq = () => {
  const { header, descr, faq} = faqData;
  // console.log(heroCtaButtons);
  return (
    <>
      <div className="faq_section_center">
        <HeaderTemplate header={header} />
        <DescrTemplate descr = {descr} />
      </div>
      <div className="faq_section_left">
        <FaqListTemplate faq = {faq} />
      </div>     
    </>
  );
};
