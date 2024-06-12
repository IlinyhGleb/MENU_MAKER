import personalData from "../mockData/personalData";

export const HeaderTemplate = ({header}) => {
  return (
      <div className="personal_section_header">
          {header}
      </div>
  )
};

export const UserTemplate = ({userData}) => {
  const {title} = userData;
  return(
    <div className="personal_user">

      <div> { title } </div>
      <input > </input>   
    </div>
)};


export const Personal = () => {
    const { header, userData, paramHeader, paramData, activityData, saveData, exitData,} = personalData;
    return (
      <>
          <div className="personal_section"> 
            <HeaderTemplate header = {header}/>
          </div>
      </>
    );
  };

export default Personal;