import { Personal } from '../components/Personal'
import { HeaderAccount } from '../components/HeaderAccount';

export const PersonalParams = () => {
    return (
      <>
        <section className="section account_section">
          <HeaderAccount />
        </section>  
        <section className="section personal_section">
          <Personal />
        </section>
      </>
    );
  };
  
 export default PersonalParams;