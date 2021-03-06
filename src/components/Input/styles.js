import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 50px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.3)',
})`
  flex: 1;
  font-size: 18px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.8);
`;
