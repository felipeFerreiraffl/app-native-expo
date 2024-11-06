import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from './../../colors/colors';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
                {showValue ? (
                    <Text
                        style={data.type === 1 ? styles.value : styles.expenses}
                    >
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                ) : (
                    <View style={styles.skeleton}>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.fourthColor
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    date: {
        color: colors.fourthColor,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        color: colors.earned,
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: colors.lost,
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 8,
        width: 80,
        height: 10,
        backgroundColor: colors.fourthColor,
        borderRadius: 8,
    }
})