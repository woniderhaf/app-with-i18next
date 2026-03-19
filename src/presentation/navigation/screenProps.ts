import ROUTES from './routes.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import StackParamList from './param-list.ts';

export type StackScreenProps<T extends ROUTES> = NativeStackScreenProps<
  StackParamList,
  T
>;
