type RootStackParamList = {
  Landing: undefined;
  TeacherForm: undefined;
  Study: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export { AppStackNavigation as RootNavigation } from './AppStack';
