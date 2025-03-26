import React, { useState } from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import TabSelector from '../../components/TabSelector';
import BigButton from '../../components/UI/BigButton';
import ChallengeCard from '../../components/ChallengeCard';

const ItemSeparator = () => <View style={styles.itemSeparator} />;

export default function CrownChallengesScreen() {
    const navigation = useNavigation();
    const allChallenges = useSelector((state) => state.challenges.challenges);
    const [selectedCategory, setSelectedCategory] = useState('week');

    const challenges = allChallenges.filter(
        (ch) => ch.category === selectedCategory && !ch.completed
    );

    const handleCardPress = (challengeId) => {
        navigation.navigate('ChallengeDetails', { challengeId });
    };

    const handleCreateNewChallenge = () => {
        navigation.navigate('CreateChallenge');
    };

    const renderItem = ({ item }) => {
        return (
            <ChallengeCard
                item={item}
                onPress={() => handleCardPress(item.id)}
            />
        );
    };

    return (
        <View style={styles.gradientBackground}>
            <Image style={{position: 'absolute', flex: 1, width: '100%', height:'100%'}} source={require('../../assets/bg.png')} />
            <SafeAreaView style={styles.safeArea}>
                <Header title="Crown Challenges" />
                <TabSelector
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    labels={['Week', 'Month']}
                />
                <FlatList
                    data={challenges}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    ItemSeparatorComponent={ItemSeparator}
                    ListFooterComponent={
                        <BigButton
                            title="Create new challenge"
                            onPress={handleCreateNewChallenge}
                        />
                    }
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        marginHorizontal: 16,
    },
    listContent: {
        paddingBottom: 32,
    },
    itemSeparator: {
        height: 20,
    },
});
