import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    desfavoritar: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

// console.log(favoritosSlice)
// console.log(favoritosSlice.reducer)

export const { favoritar, desfavoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
