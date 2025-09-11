import * as S from './style'
import FiltroCard from '../../components/FiltroCard'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.CampoPesquisa type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Importantes" contador={1} />
        <FiltroCard legenda="Normais" contador={3} />
        <FiltroCard legenda="Urgentes" contador={4} />
        <FiltroCard legenda="Todas" contador={8} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
