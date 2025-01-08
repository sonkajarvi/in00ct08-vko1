import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [age, setAge] = useState(0);
    const [limits, setLimits] = useState("");

    const calculate = () => {
        if (!age || age > 220) {
            setLimits("Failed to calculate limits :(");
            return;
        }

        const lower = (220 - age) * 0.65;
        const upper = (220 - age) * 0.85;
        setLimits(Math.floor(lower) + "-" + Math.floor(upper));
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Heart Rate Limits</Text>

        <Text>Age</Text>
        <TextInput
            style={styles.field}
            placeholder="E.g. 20"
            onChangeText={e => setAge(+e)}
            keyboardType="decimal-pad"
        />

        <Text>Limits</Text>
        <Text>{limits}</Text>

        <Button title="Calculate" onPress={calculate}>
        </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        marginTop: 50,
    },
    field: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    }
});
