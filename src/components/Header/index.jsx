import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from './../../colors/colors';
import { fonts } from './../../fonts/fonts';
import { LinearGradient } from 'expo-linear-gradient';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {


    return (
        <LinearGradient 
            style={styles.container}
            colors={[colors.mainColor, colors.thirdColor]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View
                style={styles.content}
            >
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.userButton}>
                    <Feather name='user' size={27} color={colors.secondColor} />
                </TouchableOpacity>

            </View>
        </LinearGradient>
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
        fontFamily: fonts.boldFont,
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