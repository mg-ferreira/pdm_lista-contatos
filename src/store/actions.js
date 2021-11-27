export const addContact = contact => {
  return {
    type: 'ADD',
    payload: {
      name: contact.name,
      phone: contact.phone
    }
  }
}

export const editContact = (contact) => {
  return {
    type: 'EDIT',
    payload: {
      id: contact.id,
      name: contact.name,
      phone: contact.phone
    }
  }
}

export const deleteContact = (contactId) => {
  return {
    type: 'DELETE',
    payload: {
      id: contactId
    }
  }
}
