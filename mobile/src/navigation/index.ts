declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Landing: undefined;
      Study: undefined;
      TeacherForm: undefined;
    }
  }
}

export { AppStackNavigation as RootNavigation } from './AppStack';
