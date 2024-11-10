import { Text, StyleSheet, TouchableOpacity, ScrollView, tex } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from './../../colors/colors';
import { fonts } from '../../fonts/fonts';
import { LinearGradient } from 'expo-linear-gradient';

export default function Actions() {
    return (
        <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >

            <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                    style={styles.areaButton}
                    colors={[colors.thirdColor, colors.fourthColor]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <AntDesign name='addfolder' size={26} color={'#000'} />
                </LinearGradient>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                    style={styles.areaButton}
                    colors={[colors.thirdColor, colors.fourthColor]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <AntDesign name='tagso' size={26} color={'#000'} />
                </LinearGradient>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                    style={styles.areaButton}
                    colors={[colors.thirdColor, colors.fourthColor]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <AntDesign name='creditcard' size={26} color={'#000'} />
                </LinearGradient>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                    style={styles.areaButton}
                    colors={[colors.thirdColor, colors.fourthColor]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <AntDesign name='barcode' size={26} color={'#000'} />
                </LinearGradient>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                    style={styles.areaButton}
                    colors={[colors.thirdColor, colors.fourthColor]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <AntDesign name='setting' size={26} color={'#000'} />
                </LinearGradient>
                <Text style={styles.labelButton}>Configurações</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 40,
    },
    areaButton: {
        backgroundColor: colors.fourthColor,
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontFamily: fonts.boldFont,
    }
})