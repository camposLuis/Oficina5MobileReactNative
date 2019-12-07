import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, HeaderTitle, TTitle, Actions, Body, TBody } from './styles';

export default function Posts({ data }) {
  return (
    <Container>
      <HeaderTitle>
        <TTitle>{data.title}</TTitle>
      </HeaderTitle>

      <Body>
        <TBody>{data.body}</TBody>
      </Body>

      <Actions>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="create" size={25} color="#f9a825" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="event-busy" size={25} color="#f9a825" />
        </TouchableOpacity>
      </Actions>
    </Container>
  );
}
