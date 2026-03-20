import FirstView from './FirstView.tsx';
import { ROUTES, StackScreenProps } from '../../navigation';

const FirstScreen = (props: StackScreenProps<ROUTES.FIRST>) => {
  return <FirstView {...props} />;
};

export default FirstScreen;
