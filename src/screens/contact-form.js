import React, { useState, useEffect } from "react";
import { Container, Button, ButtonText } from '../styles';
import Input from '../components/Input';

import { useDispatch } from "react-redux";
import { addContact, deleteContact, editContact } from '../store/actions';


const ContactForm = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: '', phone: '' });

  const saveContact = () => {
    if (!contact.name || !contact.phone)
      return alert('Preencha os dados do contato');
    
    if (route.params?.contato)
      dispatch(editContact(contact))
    else
      dispatch(addContact(contact));
    
    navigation.goBack();
  }

  const remove = () => {
    dispatch(deleteContact(contact.id));
    navigation.goBack();
  }

  useEffect(() => {
    if (route.params?.contato)
      setContact(route.params.contato)
  }, []);

  return (
    <Container color='dark' padding={20} justify='flex-start'>
      
      <Container  justify='space-around' height={200}>
        <Input 
          type='text' 
          placeholder='Nome' 
          value={contact.name} 
          onChangeText={text => setContact({ ...contact, name: text })}
          icon='person'
        />

        <Input 
          type='text' 
          placeholder='Telefone' 
          value={contact.phone} 
          onChangeText={text => setContact({ ...contact, phone: text })} 
          keyboardType='phone-pad'
          maxLength={11}
          icon='call'
        />
      </Container>

      <Container>
        <Button type='primary' onPress={() => saveContact()}>
          <ButtonText color='black'>Salvar</ButtonText>
        </Button>

        {route.params &&
          <Button type='transparent' onPress={() => remove()}>
            <ButtonText color='primary'>Excluir</ButtonText>
          </Button>
        }
      </Container>
    </Container>
  )
}

export default ContactForm;