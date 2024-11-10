import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from './../../colors/colors';
import { fonts } from '../../fonts/fonts';
import { LinearGradient } from 'expo-linear-gradient';

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
                    <LinearGradient 
                        style={styles.skeleton}
                        colors={[colors.thirdColor, colors.fourthColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                    </LinearGradient>
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
        fontFamily: fonts.boldFont,
    },
    date: {
        color: colors.fourthColor,
        fontFamily: fonts.boldFont,
    },
    value: {
        fontSize: 16,
        color: colors.earned,
        fontFamily: fonts.boldFont,
    },
    expenses: {
        fontSize: 16,
        color: colors.lost,
        fontFamily: fonts.boldFont,
    },
    skeleton: {
        marginTop: 8,
        width: 80,
        height: 10,
        borderRadius: 8,
    }
})