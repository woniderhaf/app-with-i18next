import { Button, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTES } from '../../navigation';
import { IScreen } from '../../types';
import { useState } from 'react';
import { ILanguage } from '../../translations/types';
import { ScreenTranslationImpl } from '../../translations';
import { IScreenTranslationTFunction } from '../../translations/screenTranslation/IScreenTranslationTFunction.ts';

interface IStartViewModel {
  t: IScreenTranslationTFunction<[ROUTES.START, 'common']>;
  getLanguage(): ILanguage;
  changeLanguage(language: ILanguage): void;
}

const StartViewModel = (): IStartViewModel => {
    const { getT, getLanguage, changeLanguage } = new ScreenTranslationImpl();

    const t = getT([ROUTES.START, 'common'])

    return { t, getLanguage, changeLanguage };
}

const StartView: IScreen<ROUTES.START> = props => {
  const { navigation } = props;

  const { t, getLanguage, changeLanguage } = StartViewModel()
  const safeAreaInsets = useSafeAreaInsets();


  const [language, setLanguage] = useState<ILanguage>(getLanguage());

  const changeLang = () => {
    changeLanguage(language === 'ru' ? 'en' : 'ru');
    setLanguage(getLanguage());
  };

  return (
    <View style={{ paddingTop: safeAreaInsets.top }}>
      <Text>{language}</Text>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>{t('title')}</Text>
      <Button title={t('common:button')} onPress={changeLang} />
      <View style={{ height: 10 }} />
      <Button
        title={'open first screen'}
        onPress={() => navigation.navigate(ROUTES.FIRST)}
      />
      <View style={{ height: 10 }} />
      <Button
        title={'open second screen'}
        onPress={() => navigation.navigate(ROUTES.SECOND)}
      />
    </View>
  );
};

export default StartView;
