import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import { adicionar } from '../../store/reducers/carrinho'
import { favoritar, desfavoritar } from '../../store/reducers/favoritos'
import * as S from './styles'
import { useState } from 'react'

type Props = {
  produto: ProdutoType
  // estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

// const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const [estaNosFavoritos, setEstaNosFavoritos] = useState(false)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={
          () => {
            if (!estaNosFavoritos) {
              dispatch(favoritar(produto))
              setEstaNosFavoritos(true)
            } else {
              dispatch(desfavoritar(produto.id))
              setEstaNosFavoritos(false)
            }
          }
          // !estaNosFavoritos
          //   ? dispatch(favoritar(produto))
          //   : dispatch(desfavoritar(produto.id))
        }
        type="button"
      >
        {!estaNosFavoritos
          ? '+ Adicionar aos favoritos'
          : '- Remover dos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent

// import { Produto as ProdutoType } from '../../App'
// import * as S from './styles'

// type Props = {
//   produto: ProdutoType
//   aoComprar: (produto: ProdutoType) => void
//   favoritar: (produto: ProdutoType) => void
//   estaNosFavoritos: boolean
// }

// export const paraReal = (valor: number) =>
//   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
//     valor
//   )

// const ProdutoComponent = ({
//   produto,
//   aoComprar,
//   favoritar,
//   estaNosFavoritos
// }: Props) => {
//   return (
//     <S.Produto>
//       <S.Capa>
//         <img src={produto.imagem} alt={produto.nome} />
//       </S.Capa>
//       <S.Titulo>{produto.nome}</S.Titulo>
//       <S.Prices>
//         <strong>{paraReal(produto.preco)}</strong>
//       </S.Prices>
//       <S.BtnComprar onClick={() => favoritar(produto)} type="button">
//         {estaNosFavoritos
//           ? '- Remover dos favoritos'
//           : '+ Adicionar aos favoritos'}
//       </S.BtnComprar>
//       <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
//         Adicionar ao carrinho
//       </S.BtnComprar>
//     </S.Produto>
//   )
// }

// export default ProdutoComponent
