import { configureStore } from "@reduxjs/toolkit"
import { phonebookReducer } from "./phonebookSlice"

const reducer = {
    phonebook: phonebookReducer,
}

export const store = configureStore({
    reducer,
})

