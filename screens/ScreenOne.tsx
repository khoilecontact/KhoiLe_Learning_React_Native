import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import defaultStyles from "../styles/styles";

const ScreenOne = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ParentComponent navigation={navigation} />
        </View>
    );
};

const ParentComponent = ({ navigation }) => {
    const [name, setName] = useState('KhoiLe');

    const handleNameChanged = (newName: string) => {
        setName(newName);
    };

    const navigateToScreenTwo = () => {
        navigation.navigate("ScreenTwo", {
          userName: name,
          handler: handleNameChanged
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <ChildComponent
                name={name}
                onNameChanged={handleNameChanged}
                buttonTitle="Go to Screen Two"
                onButtonClicked={navigateToScreenTwo}
            />
            <Text>My name is {name}</Text>
        </View>
    );
}

const ChildComponent = (props: {
    name: string | undefined;
    onNameChanged: ((text: string) => void) | undefined;
    buttonTitle: string | undefined;
    onButtonClicked: (() => void) | undefined;
}) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Enter your name: </Text>
            <TextInput style={defaultStyles.textInput} value={props.name} onChangeText={props.onNameChanged} />
            <Text>Your name is {props.name}</Text>
            <Button
                title={props.buttonTitle}
                onPress={props.onButtonClicked}
            />
        </View>
    );
}

export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});