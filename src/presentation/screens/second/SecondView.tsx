import { IScreen } from '../../types';
import { ROUTES } from '../../navigation';
import { Text, View } from 'react-native';

const SecondView: IScreen<ROUTES.SECOND> = props => {
  const { t } = props;
  return (
    <View>
      <Text>{t('SecondScreen:title')}</Text>
    </View>
  );
};

export default SecondView;
