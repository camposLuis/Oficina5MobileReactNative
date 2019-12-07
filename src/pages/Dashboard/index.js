import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Post from '~/components/Posts';

import { Container, Title, List } from './styles';

function Dashboard({ isFocused }) {
  const [posts, setPosts] = useState([]);

  async function loadAppointments() {
    const response = await api.get('posts');

    setPosts(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <List
          data={posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Post onCancel={() => {}} data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={{ fontSize: 14, color: tintColor, alignSelf: 'center' }}>
      Posts
    </Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={25} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
