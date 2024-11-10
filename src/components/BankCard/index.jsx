import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../colors/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../../fonts/fonts';

export default function BankCard({ title, number, type }) {
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.mainColor, colors.thirdColor]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <FontAwesome style={styles.icon} name='money' size={15} color={colors.fourthColor} />
            <View style={styles.mainContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.number}>{number}</Text>
            </View>
            <View style={styles.bottomContent}>
                <Text style={styles.type}>{type}</Text>
                <Image />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 14,
        borderRadius: 10,
    },
    mainContent: {
        margin: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        margin: 15
    },
    cardTitle: {
        fontFamily: fonts.regularFont,
        fontSize: 15,
        color: colors.white
    },
    number: {
        fontFamily: fonts.regularFont,
        fontSize: 15,
        color: colors.white
    },
    type: {
        margin: 25,
        fontFamily: fonts.regularFont,
        fontSize: 18,
        color: colors.white
    },
});