import Stack from '../stack.ts';
import ROUTES from '../routes.ts';
import { FirstScreen, SecondScreen, StartScreen } from '../../screens';

const CommonGroups = () => {
  return (
    <Stack.Group>
      <Stack.Screen name={ROUTES.START} component={StartScreen} />
      <Stack.Screen name={ROUTES.FIRST} component={FirstScreen} />
      <Stack.Screen name={ROUTES.SECOND} component={SecondScreen} />
    </Stack.Group>
  );
};

export default CommonGroups;
