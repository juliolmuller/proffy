import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TeachersListScreen } from '~/screens';
import { FavoritesScreen } from '~/screens';

const { Navigator, Screen } = createBottomTabNavigator();

export function StudyTabsNavigation() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          marginLeft: 24,
          fontFamily: 'Archivo700',
          fontSize: 13,
        },
        tabBarIconStyle: {
          flexGrow: 0,
          height: 20,
          width: 20,
        },
        tabBarActiveBackgroundColor: '#ebebf5',
        tabBarActiveTintColor: '#32264d',
        tabBarInactiveBackgroundColor: '#fafafc',
        tabBarInactiveTintColor: '#c1bccc',
      }}
    >
      <Screen
        name="TeachersList"
        component={TeachersListScreen}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name="easel"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name="heart"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
