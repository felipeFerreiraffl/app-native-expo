import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../colors/colors';

export default function Balance({ saldo, gastos }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -27,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: colors.fourthColor,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        color: colors.fourthColor,
        marginRight: 0,
    },
    balance: {
        fontSize: 22,
        color: colors.earned,
    },
    expenses: {
        fontSize: 22,
        color: colors.lost,
    }
})