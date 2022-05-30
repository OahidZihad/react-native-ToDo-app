import {StyleSheet, Text, ScrollView, View, RefreshControl} from 'react-native';
import React, {useState} from 'react';

const ListScrollRefresh = () => {
  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 9, item: 'Item 9'}]);
    setRefreshing(false);
  };

  return (
    <View style={styles.body}>
      <ScrollView
        horizontal={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {Items.map(element => {
          return (
            <View style={styles.item} key={element.key}>
              <Text style={styles.text}>{element.item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListScrollRefresh;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 56,
    fontStyle: 'italic',
    margin: 10,
  },
});
