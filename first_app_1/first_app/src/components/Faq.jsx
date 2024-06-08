
import { faqData } from "../mockData/faqData";

export const HeaderTemplate = ({ header }) => {
    return <h1 className="center_header">{header}</h1>;
};


export const Faq = () => {
  const { header} = faqData;
  // console.log(heroCtaButtons);
  return (
    <>
      <div className="faq_section_center">
        <HeaderTemplate header={header} />
      </div>
     
    </>
  );
};
