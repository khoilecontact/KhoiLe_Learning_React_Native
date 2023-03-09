import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const ScreenOne = ({ navigation }) => {
    return (
        <View>
            <ParentComponent navigation={navigation} />
        </View>
    );
};

const ParentComponent = ({ navigation }) => {
    const [name, setName] = useState('KhoiLe');

    const handleNameChanged = (newName: string) => {
        setName(newName);
    };

    return (
        <View>
            <ChildComponent 
                name={name}
                onNameChanged={handleNameChanged} 
                buttonTitle="Go to Screen Two"
                onButtonClicked={() => navigation.navigate("ScreenTwo")}
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
        <View>
            <Text>Enter your name: </Text>
            <TextInput style={styles.textInput} value={props.name} onChangeText={props.onNameChanged} />
            <Button title={props.buttonTitle} onPress={props.onButtonClicked} />
        </View>
    );
}

export default ScreenOne;

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
});