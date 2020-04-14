import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { View, FlatList ,Text, Image, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }

    async function loadIncidents(){
        const res = await api.get(`incidents`);
        incidents.push(res.data)
        setIncidents(incidents);
    }

    useEffect(() => {
        loadIncidents();
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <Text style={styles.title}>
                Bem-Vindo(a)
            </Text>
            <Text style={styles.description}>
                Escolha casos abaixo e salve o dia!
            </Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => incidents.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item: incident}) => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>
                        Ong:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {incident.name}
                    </Text>

                    <Text style={styles.incidentProperty}>
                        Caso:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {incident.title}
                    </Text>

                    <Text style={styles.incidentProperty}>
                        Valor:
                    </Text>
                    <Text style={styles.incidentValue}>
                        R$ {incident.value}
                    </Text>
                    <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}> 
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}