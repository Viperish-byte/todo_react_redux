import React from 'react';
import '../../styling/leftContainerStyles/menuOptionStyles.css'

type MenuOptionOwnProps = {
  label: string;
}

class MenuOption extends React.Component<MenuOptionOwnProps> {

  render() {
    return (
      <div className="menuOption">
        {this.props.label}
      </div>
    );
  }
}

export default MenuOption;