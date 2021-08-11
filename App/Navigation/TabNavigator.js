<<<<<<< HEAD
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Components/Home'
import AddTask from '../Components/AddTask'
import About from '../Components/About'
import TabBar from '../Components/TabBar'

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{ icon: 'home' }}
            />
            <Tab.Screen
                name="Add Task"
                component={AddTask}
                initialParams={{ icon: 'pluscircle' }}

            />
            <Tab.Screen
                name="About"
                component={About}
                initialParams={{ icon: 'infocirlce' }}
            />
        </Tab.Navigator >
    );
};
=======
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Components/Home'
import AddTask from '../Components/AddTask'
import About from '../Components/About'
import TabBar from '../Components/TabBar'

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{ icon: 'home' }}
            />
            <Tab.Screen
                name="Add Task"
                component={AddTask}
                initialParams={{ icon: 'pluscircle' }}

            />
            <Tab.Screen
                name="About"
                component={About}
                initialParams={{ icon: 'infocirlce' }}
            />
        </Tab.Navigator >
    );
};
>>>>>>> 64a7a3e9194f75f4cce5740b1a5f53d882352233
export default TabNavigator;