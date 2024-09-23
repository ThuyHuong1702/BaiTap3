import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',  
    isRead: false,  
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: 'people', 
    isRead: false, 
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    icon: 'people',  
    isRead: true,  
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên  hệ thống.',
    time: '20/08/2020, 06:00',
    icon: 'people',  
    isRead: false,  
  },
  {
    id: '5',
    title: 'Công việc sắp hết hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle', 
    isRead: true,  
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',  
    isRead: true, 
  },
];

const Item = ({ title, description, time, icon, isRead }) => (
  <View style={[styles.item, isRead ? styles.readItem : styles.unreadItem]}>
    <View style={styles.titleContainer}>
      <Icon
        name={icon}
        size={24}
        color={isRead ? '#999' : '#0066FF'}
        style={styles.icon}
      />
      <View>
        <Text style={[styles.title, isRead ? styles.readText : styles.unreadText]}>
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  </View>
);


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Thông báo</Text>
    </View>
  );
};


const Footer = () => {
  return (
    <View style={styles.footer}>
      <Icon name="home" size={30} color="#999" />
      <Icon name="search" size={30} color="#999" />
      <Icon name="add-circle" size={50} color="#0066FF" />
      <Icon name="notifications" size={30} color="#0066FF" />
      <Icon name="account-circle" size={30} color="#999" />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView horizontal={true}> 
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            description={item.description}
            time={item.time}
            icon={item.icon}
            isRead={item.isRead}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 80,  
  },
  item: {
    padding: 20,
    elevation: 1,
  },
  unreadItem: {
    backgroundColor: '#e0f7ff', 
  },
  readItem: {
    backgroundColor: '#f9f9f9', 
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  unreadText: {
    fontWeight: 'bold',  
  },
  readText: {
    fontWeight: 'normal', 
    color: '#999',  
  },
  description: {
    fontSize: 15,
    color: '#333',
    marginTop: 4,
  },
  time: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  list: {
    marginTop: 80, 
  },
});

export default App;
