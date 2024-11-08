import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from './../../colors/colors';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {


    return (
        <View style={styles.container}>
            <View
                style={styles.content}
            >
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.userButton}>
                    <Feather name='user' size={27} color={colors.secondColor} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor,
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 20,
        paddingEnd: 20,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    username: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
    },
    userButton: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})