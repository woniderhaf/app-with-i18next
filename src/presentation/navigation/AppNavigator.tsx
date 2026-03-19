import { NavigationContainer } from '@react-navigation/native';
import { CommonGroups } from './groups';
import { useMemo } from 'react';
import Stack from './stack.ts';

const AppNavigator = () => {
  const CommonStackGroups = useMemo(CommonGroups, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>{CommonStackGroups}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
