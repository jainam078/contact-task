// contactsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../types";

interface ContactsState extends Array<Contact> {}

const contactsFromStorage =
  JSON.parse(localStorage.getItem("contacts") as string) || [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsFromStorage as ContactsState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push({ ...action.payload, id: state.length.toString() + 1 });
      localStorage.setItem("contacts", JSON.stringify(state));
    },
    updateContact: (
      state,
      action: PayloadAction<{ id: string; updatedContact: Contact }>
    ) => {
      const { id, updatedContact } = action.payload;
      const index = state.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedContact };
        localStorage.setItem("contacts", JSON.stringify(state));
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state = state.filter((contact) => contact.id !== id);
      localStorage.setItem("contacts", JSON.stringify(state));
      return state;
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
