import '../../styling/leftContainerStyles/leftContainerStyles.css'
import MenuOption from './MenuOption';


const LeftContainer = (): JSX.Element => {




  return (
    <div className="leftContainer">
      <MenuOption label={"TODO"}/>
      <MenuOption label={"Sport"}/>
    </div>
  );
};

export default LeftContainer;