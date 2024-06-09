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
            <NumberTemplate number={number}/>
            <EmailTemplate email={email}/>
            <div className="center_write"> Напиши нам, мы все расскажем. </div>
        </div>
    ); 
};