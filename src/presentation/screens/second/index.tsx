import SecondView from './SecondView.tsx';
import { useTranslation } from 'react-i18next';
import { ROUTE_NAMESPACES } from '../../translations/route-namespaces.ts';
import { ROUTES, StackScreenProps } from '../../navigation';

const SecondScreen = (props: StackScreenProps<ROUTES.SECOND>) => {
  const { t } = useTranslation(ROUTE_NAMESPACES[ROUTES.SECOND]);

  return <SecondView t={t} {...props} />;
};

export default SecondScreen;
