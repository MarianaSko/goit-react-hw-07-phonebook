import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65870e91468ef171392f3846.mockapi.io'

export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('/contacts')
        console.log(data);
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactsThunk = createAsyncThunk('deleteContacts', async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactsThunk = createAsyncThunk('addContacts', async (contact, thunkApi) => {
    try {
        const { data } = await axios.post('/contacts', contact)
        console.log(data);
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})