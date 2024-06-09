import { contactsData } from "../mockData/contactsData";

export const HeaderTemplate = ({ questions }) => {
    return <div className="center_header">{ questions }</div>;
};

export const NumberTemplate = ({ number }) => {
    return <div className="contacts_center_info"> { number } </div>;
};

export const EmailTemplate = ({ email }) => {
    return <div className="contacts_center_info"> { email } </div>;
};

export const Contacts = () => {
    const { questions, number, email } = contactsData;
    return(
        <div className="contacts_section_center">
            <HeaderTemplate questions={questions}/>
            <div className="center_header"> Напиши нам, мы все расскажем. </div>
            <NumberTemplate number={number}/>
            <EmailTemplate email={email}/>
            
        </div>
    ); 
};