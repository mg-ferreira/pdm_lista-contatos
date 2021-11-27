import React from "react";
import { Container, List, RoundButton, Icon, Title, Subtitle, ListItem } from '../styles';
import NoContact from "../components/NoContact";
import { useSelector } from "react-redux";


const ContactList = ({ navigation }) => {
  const contactList = useSelector(lista => lista.contacts.list);

  return (
    <Container color='dark'>
      
      <Container>
        {contactList.length > 0 ?
          <List 
            data={contactList} 
            renderItem={contact => (
              <ListItem
                onPress={() => navigation.navigate('NovoContato', {contato: contact.item})}
              >
                <Title color='dark'>{contact.item.name}</Title>
                <Subtitle color='dark'>{contact.item.phone}</Subtitle>
              </ListItem>
            )} 
            keyExtractor={contact => contact.id} 
          />
          :
          <NoContact/>
        }
      </Container>

      <Container align='flex-end' justify='flex-end' padding={30} height={100}>
        <RoundButton onPress={() => navigation.navigate('NovoContato')}>
          <Icon name='add' size={24}/>
        </RoundButton>
      </Container>
    </Container>
  )
}

export default ContactList;