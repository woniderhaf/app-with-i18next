import StartView from './StartView.tsx';
import { ROUTES, StackScreenProps } from '../../navigation';

const StartScreen = (props: StackScreenProps<ROUTES.START>) => {
  return <StartView {...props} />;
};

export default StartScreen
