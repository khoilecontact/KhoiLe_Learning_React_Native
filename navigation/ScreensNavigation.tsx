import React from "react";
import ScreenTwo from '../screens/ScreenTwo';
import ScreenOne from '../screens/ScreenOne';

import {
    createStackNavigator,
    TransitionPresets
} from "@react-navigation/stack";

const Screens = createStackNavigator();

const ScreensStack = () => {
    return (
        <Screens.Navigator>
            <Screens.Screen
                name="ScreenOne"
                component={ScreenOne}
            />

            <Screens.Screen
                name="ScreenTwo"
                component={ScreenTwo}
                options={{
                    headerShown: false,
                }}
            />
        </Screens.Navigator>
    )
}

export default ScreensStack;