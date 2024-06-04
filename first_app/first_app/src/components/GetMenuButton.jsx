

const GetMenuButton = ({OnMenuGenerated}) => {
    
    return (
        <>
        <div>
          <button onClick={OnMenuGenerated}>Нажми меня</button>
        </div>
        </>
      );
};

export {GetMenuButton};