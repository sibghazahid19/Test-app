import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, Button, TouchableOpacity ,Text} from 'react-native';
import { fetchItems } from '../../../core/api/fetchData';
import Card from '@components/Card';
import { styles } from './Styles';
import Colors from '../../../res/theme/Colors';

const HomeScreen: React.FC = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const items = await fetchItems();
      setData(items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  const renderItem = ({ item }: { item: any }) => (
    <Card item={item} onPress={() => navigation.navigate('Details', { item })} />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} color={Colors.blue} />
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }
          />
          <View style={styles.bottomView}>
          <TouchableOpacity onPress={handleRefresh} style={styles.button}>
            <Text style={styles.buttonText}>Refresh List</Text>
          </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
