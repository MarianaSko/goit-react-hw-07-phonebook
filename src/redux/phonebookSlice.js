import { createSlice } from "@reduxjs/toolkit"
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from "./operations"

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
}

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        setFilterAction: (state, { payload }) => {
            state.filter = payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.pending, state => {
                state.contacts.isLoading = true
            })
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.items = payload
                state.contacts.isLoading = false
            })
            .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
                state.contacts.isLoading = false
                state.contacts.error = payload
            })
            .addCase(deleteContactsThunk.pending, state => {
                state.contacts.isLoading = true
            })
            .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.items = state.contacts.items.filter(item => item.id !== payload.id)
                state.contacts.isLoading = false
            })

            .addCase(deleteContactsThunk.rejected, (state, { payload }) => {
                state.contacts.isLoading = false
                state.contacts.error = payload
            })
            .addCase(addContactsThunk.pending, state => {
                state.contacts.isLoading = true
            })
            .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.items.push(payload)
                state.contacts.isLoading = false
            })
            .addCase(addContactsThunk.rejected, (state, { payload }) => {
                state.contacts.isLoading = false
                state.contacts.error = payload
            })
    }
})

export const { setFilterAction } = phonebookSlice.actions
export const phonebookReducer = phonebookSlice.reducer