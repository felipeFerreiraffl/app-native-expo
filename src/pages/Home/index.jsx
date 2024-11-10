import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { colors } from '../../colors/colors';
import { fonts } from '../../fonts/fonts';
import BankCard from '../../components/BankCard';

const list = [
    {
        id: 1,
        label: 'Boleto conta-luz',
        value: '300,50',
        date: '18/08/2024',
        type: 0
    },
    {
        id: 2,
        label: 'Pix - Cliente X',
        value: '50,00',
        date: '09/09/2024',
        type: 1
    },
    {
        id: 3,
        label: 'Salário',
        value: '2300,00',
        date: '05/09/2024',
        type: 1
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name={"Felipe Ferreira"} />
            <Balance saldo={'2000,00'} gastos={'-300,00'} />
            <Actions />
            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
            <Text style={styles.title}>Cartões</Text>
            <BankCard title={'Cartão Felipe'} number={'**** 0198'} type={'Débito'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    title: {
        fontSize: 21,
        fontFamily: fonts.boldFont,
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
})