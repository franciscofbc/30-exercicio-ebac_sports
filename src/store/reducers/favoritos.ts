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
      const p = action.payload

      // console.log(action)

      if (state.itens.find((pFind) => pFind.id === p.id)) {
        alert('Item já adicionado')
        // const favoritosSemProduto = state.itens.filter(
        //   (pFilter) => pFilter.id !== p.id
        // )
        // state.itens.push(favoritosSemProduto)
      } else {
        state.itens.push(p)
      }
    }
  }
})

console.log(favoritosSlice)
// console.log(favoritosSlice.reducer)

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
