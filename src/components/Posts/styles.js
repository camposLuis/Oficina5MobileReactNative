import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 15px 0 15px 0;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
  border-bottom-width: 1;
  border-color: #f9a825;
`;

export const TTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Actions = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom-width: 1;
  border-color: #f9a825;
`;

export const TBody = styled.Text`
  color: #999;
  font-size: 13px;
  padding: 20px;
`;
