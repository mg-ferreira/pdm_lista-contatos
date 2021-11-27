import styled from "styled-components";
import theme from './theme.json';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'center'};
  padding: ${(props) => props.padding || 0}px;
  margin-vertical: ${(props) => props.mv || 0}px;
  margin-horizontal: ${(props) => props.mh || 0}px;
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  border-radius: ${props => props.radius || 0}px;
  z-index: ${(props) => props.zIndex || 1};
`;

export const Title = styled.Text`
  font-size: ${props => props.small ? 18 : 20}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.color ? theme.colors[props.color] : theme.colors.white};
  text-align: ${props => props.align || 'center'};
`;

export const Subtitle = styled.Text`
  font-size: ${props => props.small ? 14 : 16}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => props.color ? theme.colors[props.color] : theme.colors.white};
  text-align: ${props => props.align || 'center'};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: ${(props) => props.compact ? 5 : 15}px;
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  background: ${(props) => props.type ? theme.colors[props.type] : theme.colors.primary};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${props => props.color ? theme.colors[props.color] : theme.colors.black};
`;

export const TextInput = styled.TextInput`
  width: ${props => props.width || '100%'};
  padding: 0 15px;
  height: 40px;
  color: ${theme.colors.black};
  margin-horizontal: ${props => props.mH || 0}px;
`; 

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
  padding-horizontal: 15px;
  padding-top: 10px;
`;

export const ListItem = styled.TouchableOpacity`
  background: ${props => theme.colors[props.color] || theme.colors.white};
  border-radius: 15px;
  margin-vertical: 8px;  
  padding: 15px;
  align-items: center;
  justify-content: space-around;
`;

export const RoundButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: ${props => props.color ? theme.colors[props.color] : theme.colors.primary};
  justify-content: center;
  align-items: center;
  position: ${props => props.float ? 'absolute' : 'relative'};
  top: ${props => props.top || 0}px;
  margin-bottom: ${props => props.bottom || 0}px;
  left: ${props => props.left || 0}px;
  margin-right: ${props => props.right || 0}px;
  z-index: ${props => props.zIndex || 1};
`;

export const Icon = styled(MaterialIcons)`
  color: ${props => theme.colors[props.color] || theme.colors.dark};
`;

export const Image = styled.Image`
  opacity: 0.7;
`;