import personalData, { saveData, sexData, sexHeader } from "../mockData/personalData";

export const HeaderTemplate = ({header}) => {
  return (
      <div className="personal_section_header">
          {header}
      </div>
  )
};

export const ParamHeaderTemplate = ({paramHeader}) => {
  return (
      <div className="personal_section_header">
          {paramHeader}
      </div>
  )
};

export const UserTemplate = ({userData}) => {
  const {title} = userData;
  return(
    <div className="personal_user">
      <div> { title } </div>
      <input ></input>   
    </div>
)};

export const UserListTemplate = ({userData}) => {
  return  userData.map((userData, index) => (
      <UserTemplate key ={index} userData={userData} />
      ))
};

export const ParamTemplate = ({paramData}) => {
  const {title} = paramData;
  return(
    <div className="personal_user">
      <div> { title } </div>
      <input ></input>   
    </div>
)};

export const ParamListTemplate = ({paramData}) => {
  return  paramData.map((paramData, index) => (
      <ParamTemplate key ={index} paramData={paramData} />
      ));
};

export const ActivityTemplate = ({activityData}) => {
  const {title} = activityData;
  return(
      <option> { title } </option>
)};

export const ActivityListTemplate = ({activityData}) => {
  return  activityData.map((activityData, index) => (
      
      <ActivityTemplate key ={index} activityData={activityData} />
    ));
};

export const SexListTemplate = ({sexData}) => {
  return  (
    <div>
        <input className="radio" type="radio" id="male" name="drone" value="male"/>
        <label for="male">Мужской</label>
        <input className="radio" type="radio" id="female" name="drone" value="female"  />
        <label for="female">Женский</label>
    </div> 
  )
};

export const SexHeaderTemplate = ({sexHeader}) => {
  return (
    <div className="personal_user"> {sexHeader} </div>
  )
};

export const SaveBtnTemplate = ({saveData}) => {
  const {title, href} = saveData
  return (
    <div>
      <button> {title} </button>
    </div>
  )
};

export const ExitBtnTemplate = ({exitData}) => {
  const {title, href} = exitData
  return (
    <div>
      <button> {title} </button>
    </div>
    
  )
};

export const Personal = () => {
    const { header, userData, paramHeader, paramData, activityData, saveData, exitData, sexData, sexHeader} = personalData;
    return (
      <>
          <div className="personal_section"> 
            <HeaderTemplate header = {header}/>
            <UserListTemplate userData={userData} />
            <ParamHeaderTemplate paramHeader={paramHeader} />
            <SexHeaderTemplate sexHeader={sexHeader} />
            <SexListTemplate sexData={sexData} />
            <ParamListTemplate paramData={paramData} />
            <div>Уровень активности</div>
            <select>
                <option> Выберите уровень активности</option>
                <ActivityListTemplate activityData={activityData} />
            </select>
            <div className="buttons">
              <button className="person_buttons_prm"> Назад </button>
              <button className="person_buttons"> Сохранить </button>
            </div>
          </div>
      </>
    );
  };

export default Personal;