import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { MoreVert, History, Home } from '@material-ui/icons';

export function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="footer"
    >
      <BottomNavigationAction label="Еще" icon={<MoreVert />} />
      <BottomNavigationAction label="Главная" icon={<Home />} />
      <BottomNavigationAction label="История" icon={<History />} />
    </BottomNavigation>
  );
}
