import React from 'react';
import { Container, Icon, TextInput } from '../styles';


const Input = ({ icon, label, value, onChange, ...props }) => {

  return (
    <Container row color='light' padding={20} radius={15} height={60} justify='space-around'>
      {icon &&
        <Icon name={icon} size={22} mH={8}/>
      }
      <TextInput 
        value={value} 
        onChangeText={onChange} 
        width='95%'
        {...props}
      />
    </Container>
  )
}

export default Input;