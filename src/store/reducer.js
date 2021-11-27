import Contact from "../models/Contact";

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const contact = new Contact(state.list.length, action.payload.name, action.payload.phone);
      return {
        list: [...state.list, contact]
      };
    
    case 'EDIT':
      return {
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
            item.phone = action.payload.phone;
          }
          return item;
        }) 
      };
    
    case 'DELETE':
      return {
        list: state.list.filter(item => item.id !== action.payload.id)
      };
      
    default:
      return state;
  }
}