import { IScreen } from '../../types';
import { ROUTES } from '../../navigation';
import { Text, View } from 'react-native';

const FirstView: IScreen<ROUTES.FIRST> = props => {
  const { t } = props;

  return (
    <View>
      <Text>{t('FirstScreen:title')}</Text>
    </View>
  );
};

export default FirstView;
