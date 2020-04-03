import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image ,TouchableOpacity, Linking} from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';


export default function Detail() {
    const navigation = useNavigation ();
    const message = 'Olá APAD estou entrando em contato para falar sobre o atropelamento da cadelinha';

    function navigateBack()
    {
        navigation.goBack();
    }

    function sendMail()
    {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha Atropelada',
            recipients: ['lucassarri@hotmail.com'],
            body: message
        });
    }

    function sendWhatsApp ()
    {
        Linking.openURL(`whatsapp://send?text=${message}&phone=999156932`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>
                    Ong:
                </Text>
                <Text style={styles.incidentValue}>
                    APAD
                </Text>
                <Text style={styles.incidentProperty}>
                    Caso:
                </Text>
                <Text style={styles.incidentValue}>
                    Cachorro Atropelado
                </Text>
                <Text style={styles.incidentProperty}>
                    Valor:
                </Text>
                <Text style={styles.incidentValue}>
                    $ 120,00
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>
                    Salve o Dia!
                </Text>
                <Text style={styles.heroTitle}>
                    Seja o herói deste caso.
                </Text>
                <Text style={styles.heroDescription}>
                    Entre em contato:
                </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText} > WhatsApp </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText} > Email </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}