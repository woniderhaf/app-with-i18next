import { Text, View } from 'react-native';
import { IScreen } from '../../types';
import { ROUTES } from '../../navigation';
import { ScreenTranslationImpl } from '../../translations';

const SecondView: IScreen<ROUTES.SECOND> = () => {
  const { getT } = new ScreenTranslationImpl();
  const t = getT(ROUTES.SECOND);

  return (
    <View>
      <Text>{t('title')}</Text>
    </View>
  );
};

export default SecondView;
