import StartView from './StartView.tsx';
import { ROUTES, StackScreenProps } from '../../navigation';
import { useTranslation } from 'react-i18next';
import { ROUTE_NAMESPACES } from '../../translations/route-namespaces.ts';

const StartScreen = (props: StackScreenProps<ROUTES.START>) => {
  const { t } = useTranslation(ROUTE_NAMESPACES[ROUTES.START]);

  return <StartView t={t} {...props} />;
};

export default StartScreen
