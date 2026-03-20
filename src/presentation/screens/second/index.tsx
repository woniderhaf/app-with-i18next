import SecondView from './SecondView.tsx';
import { ROUTES, StackScreenProps } from '../../navigation';

const SecondScreen = (props: StackScreenProps<ROUTES.SECOND>) => {
  return <SecondView {...props} />;
};

export default SecondScreen;
