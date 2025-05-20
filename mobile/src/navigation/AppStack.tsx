import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen } from '~/screens';
import { TeacherFormScreen } from '~/screens';
import { StudyTabsNavigation } from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

export function AppStackNavigation() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={LandingScreen} />
        <Screen name="TeacherForm" component={TeacherFormScreen} />
        <Screen name="Study" component={StudyTabsNavigation} />
      </Navigator>
    </NavigationContainer>
  );
}
