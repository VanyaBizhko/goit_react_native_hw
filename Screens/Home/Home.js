import { Text, View } from "react-native";
import PostsScreen from '../PostsScreen/PostsScreen'
import ProfileScreen from '../ProfileScreen/ProfileScreen'
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen'
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function Posts() {
  return (
    <PostsScreen/>
   
  );
}


function CreatePosts() {
  return (
    <CreatePostsScreen/>
  );
}

function Profile() {
  return (
    <ProfileScreen/>
  );
}



export default function Home() { 
const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "CreatePosts") {
            iconName= "add-circle";
          } else if (route.name === "Posts") {
            iconName = "grid-outline";
          }else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
          inactiveTintColor: "#212121CC",
          labelStyle: { display: 'none' },
        style: {
          backgroundColor: 'fff',
        },
        tabStyle: {
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
        },
      }
      }
    >
      <Tabs.Screen name="Posts" component={Posts} options={{title: 'Публікації', 
      headerRight: () => (
        <TouchableOpacity style={{paddingRight: 16}}><Icon name="log-out" color={'#BDBDBD'} size={24}/></TouchableOpacity>
      ),}}/>
          <Tabs.Screen name="CreatePosts" component={CreatePosts} />
          <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );


}