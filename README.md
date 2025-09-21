# Módulo 31/32 - Projeto 5 (Todo list)

## Menu

[Aula 1 - Entenda o Projeto](#aula-1---entenda-o-projeto)  
[Aula 2 - Faça a configuração inicial](#aula-2---faça-a-configuração-inicial)  
[Aula 3 - Construa o componente de filtro](#aula-3---construa-o-componente-de-filtro)  
[Aula 4 - Parametrize os filtros](#aula-4---parametrize-os-filtros)  
[Aula 5 - Construa o card da tarefa](#aula-5---construa-o-card-da-tarefa)  
[Aula 6 - Crie o estado de troca de botões](#aula-6---crie-o-estado-de-troca-de-botões)  
[Aula 7 - Parametrize cards de tarefa](#aula-7---parametrize-cards-de-tarefa)  
[Aula 8 - Conheça Enums](#aula-8---conheça-enums)  
[Aula 9 - Configure o Redux](#aula-9---configure-o-redux)  
[Aula 10 - Remova uma tarefa](#aula-10---remova-uma-tarefa)  
[Aula 11 - Edite uma tarefa](#aula-11---edite-uma-tarefa)  
[Aula 12 - Pesquise tarefas](#aula-12---pesquise-tarefas)  
[Aula 13 - Filtre tarefas](#aula-13---filtre-tarefas)  
[Aula 14 - Exiba os resultados da filtragem](#aula-14---exiba-os-resultados-da-filtragem)  
[Aula 15 - Conheça React Router DOM](#aula-15---conheça-react-router-dom)  
[Aula 16 - Navegue entre rotas](#aula-16---navegue-entre-rotas)  
[Aula 17 - Crie uma tarefa](#aula-17---crie-uma-tarefa)  
[Aula 18 - Marque uma tarefa como concluida](#aula-18---marque-uma-tarefa-como-concluída)  


## Aula 1 - Entenda o Projeto

### Objetivos

- Conhecer o novo projeto que será trabalhado;
- Limpar o repositório para iniciar o projeto;
- Instalar os comandos, bibliotecas, fontes e estilos necessários.

### Pontos importantes

**1. Preparação do projeto:**

- Fazer fork do [projeto base](https://github.com/ogiansouza/minhas-tarefas) (já vem com eslint, prettier e editorconfig)
- Clonar o repositório

**2. Instalação de dependências:**

- Instalar dependências do projeto:
  - `npm i`
- Corrigir problemas de lint:
  - `npx eslint --fix`
- Instalar styled-components:
  - `npm i styled-components`
- Instalar tipos do styled-components:
  - `npm i --D @types/styled-components`
- Instalar Redux Toolkit e React Redux:
  - `npm i react-redux @reduxjs/toolkit`

**3. Extensões recomendadas:**

- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) para autocomplete e destaque de sintaxe do CSS-in-JS
  - Observação: para funcionar corretamente, utilize arquivos com extensão `.jsx` ou `.tsx`.

**4. Fontes e estilos:**

- Utilizar a fonte Roboto no projeto
  - Importação feita no `EstiloGlobal` do styled-components

## Aula 2 - Faça a configuração inicial

### Objetivos

- Configurar a estilização global (altura e largura do projeto)
- Criar estrutura de pastas para os componentes principais
- Importar e renderizar os componentes criados

### Pontos importantes

**1. Estrutura de pastas e componentes:**

- Criar pasta `container` dentro de `src` para organizar os componentes principais:
  - `BarraLateral`: responsável pela pesquisa e filtro
  - `ListaDeTarefas`: responsável por exibir os cards de tarefas
- Cada componente tem seu próprio container estilizado usando styled-components

**2. Organização da BarraLateral:**

- Possui uma caixa de pesquisa para buscar tarefas
- Contém 6 filtros, que funcionam como botões dinâmicos
  - Cada filtro exibe a quantidade de itens que se encaixam na categoria
  - As categorias dos filtros são:
    - Pendentes
    - Concluídas
    - Urgentes
    - Importantes
    - Normal
    - Todas
  - A quantidade de itens em cada filtro é atualizada dinamicamente conforme o estado das tarefas

**3. Organização dos cards de tarefa:**

- Cada card é composto por:
  - Checkbox
  - Título
  - Tags
  - Descrição
  - Dois botões (com 4 variações: editar, remover, salvar, cancelar)

**4. Renderização dos componentes:**

- Criar as constantes dos componentes e exportar como default
- Importar e renderizar os componentes no `App.tsx`

**5. Observações de sintaxe:**

- Para exibir aspas em mensagens HTML, utilizar o caractere especial `&quot;`

## Aula 3 - Construa o componente de filtro

### Objetivos

- Criar os inputs necessários para o filtro
- Estruturar os componentes e arquivos principais
- Configurar o padding conforme o layout do projeto

### Pontos importantes

**1. Estrutura dos componentes de filtro:**

- Criado o componente `FiltroCard` para representar os filtros da BarraLateral
- Utilizados três styled components:
  - `CardFiltro`: envolve todo o filtro
  - `Contador`: exibe a quantidade de itens
  - `Label`: exibe o nome da categoria

**2. Importação dos styled components:**

- Utilizado o padrão `import * as S from './styles'` para importar todos os styled components de uma vez
- Os componentes são utilizados como `S.CardFiltro`, `S.Contador` e `S.Label`, facilitando a organização

**3. Dicas de CSS:**

- Usar tamanhos dinâmicos como `vh` para altura responsiva
- Ao usar operador ternário no styled-components, envolver a expressão entre parênteses e colocar aspas nos valores do CSS:
  - Exemplo: `${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')}`

**4. Uso de props em componentes:**

- Definir o tipo das props no arquivo principal do componente:

  ```ts
  export type Props = {
    ativo?: boolean
  }

  const FiltroCard = (props: Props) => (
    <S.CardFiltro ativo={props.ativo}>...</S.CardFiltro>
  )
  ```

- Importar o tipo das props no styled-components e definir que o componente pode receber essas propriedades:

  ```ts
  import { Props } from '.'

  export const CardFiltro = styled.div<Props>`
  	padding: 8px;
  	border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  	...
  `
  ```

- Passar a prop diretamente no componente para definir se está ativo:
  ```ts
  <FiltroCard ativo />
  ```

## Aula 4 - Parametrize os filtros

### Objetivos

- Configurar variáveis dinâmicas para os filtros
- Desestruturar as propriedades necessárias para facilitar o uso
- Omitir propriedades dispensáveis nos styled components

### Pontos importantes

**1. Criação de props dinâmicas para os filtros:**

- Adicionadas props para contador de atividades e legenda do filtro, tornando o componente dinâmico
- Exemplo de definição das props:
  ```ts
  export type Props = {
    ativo?: boolean
    contador: number
    legenda: string
  }
  ```

**2. Desestruturação das props:**

- Utilizada desestruturação para deixar o componente mais compacto e legível:
  ```ts
  const FiltroCard = ({ ativo, contador, legenda }: Props) => (
    <S.CardFiltro ativo={ativo}>...</S.CardFiltro>
  )
  ```

**3. Uso de Omit para styled components:**

- Criado um tipo específico para o styled component, omitindo propriedades que não são usadas no CSS:

  ```ts
  type CardAtivo = Omit<Props, 'contador' | 'legenda'>

  export const CardFiltro = styled.div<CardAtivo>`
  	...
  `
  ```

**4. Correção de erro nas props:**

- Ao adicionar novas propriedades, alguns componentes ficaram sem todas as props necessárias
- Solução: passar manualmente as props faltantes, por exemplo:
  ```ts
  <FiltroCard legenda="Importantes" contador={1} />
  ```

## Aula 5 - Construa o card da tarefa

### Objetivos

- Criar a pasta `tarefa` em `components` para organizar os cards de tarefa
- Estilizar o card com padding, fontes, cores e tags conforme o layout
- Configurar a barra de ações dos cards
- Usar overflow para permitir scroll no conteúdo principal

### Pontos importantes

**1. Estrutura e comportamento do card de tarefa:**

- O card exibe título, descrição, tags, checkbox e barra de ações
- Ao clicar em editar, a descrição vira um `<textarea>`, permitindo alteração do texto
- Quando em modo edição, o título do card recebe o prefixo "Editando: "
- Os botões do card mudam conforme o estado (editar, remover, salvar, cancelar)

**2. Estilização e layout:**

- Criação da pasta `tarefa` dentro de `components` para separar o card
- Utilização de `height: 100vh` e `overflow-y: scroll` no `<main>` para que apenas o conteúdo principal tenha scroll, mantendo a BarraLateral fixa
  ```ts
  export const ContainerMain = styled.main`
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
  `
  ```
- No `<textarea>`, uso de `border: none; background-color: transparent;` para que, quando não selecionado, não pareça um campo de edição
- Propriedade `resize: none` no `<textarea>` para impedir que o usuário redimensione o campo

**3. Observações importantes:**

- `display: block` faz o elemento ocupar toda a largura disponível
- `display: inline-block` faz o elemento ocupar apenas a largura necessária

## Aula 6 - Crie o estado de troca de botões

### Objetivos

- Implementar o estado de edição dos cards de tarefa usando useState
- Praticar o uso do operador ternário para renderização condicional
- Componentizar os botões de ação do card

### Pontos importantes

**1. Estado de edição com useState:**

- Criado o estado `estaEditando` no componente Tarefa para alternar entre modo de visualização e edição
- Exemplo:
  ```ts
  const [estaEditando, setEstaEditando] = useState(false)
  ```

**2. Renderização dinâmica dos botões:**

- Utilizado operador ternário para exibir botões diferentes conforme o estado:
  ```ts
  <S.BarraAcoesCard>
    {estaEditando ? (
      <>
        <S.BotaoCard>Salvar</S.BotaoCard>
        <S.BotaoCard>Cancelar</S.BotaoCard>
      </>
    ) : (
      <>
        <S.BotaoCard>Editar</S.BotaoCard>
        <S.BotaoCard>Remover</S.BotaoCard>
      </>
    )}
  </S.BarraAcoesCard>
  ```

**3. Controle do valor do textarea:**

- No React, o valor do textarea pode ser controlado via prop `value`, diferente do HTML puro
  ```ts
  <S.DescricaoCard value={descricao} />
  ```

**4. Renderização dinâmica das tarefas:**

- Utilizado um array de objetos para representar as tarefas
- Renderização dos cards feita com map, passando as props necessárias:
  ```ts
  {
    tarefas.map((t) => (
      <li key={t.titulo}>
        <Tarefa
          descricao={t.descricao}
          prioridade={t.prioridade}
          status={t.status}
          titulo={t.titulo}
        />
      </li>
    ))
  }
  ```

## Aula 7 - Parametrize cards de tarefa

type TagProps = {
prioridade?: string
status?: string
}

### Objetivos

- Criar arquivo TypeScript para centralizar as cores do projeto
- Aprender a verificar status e prioridade nas props para estilização dinâmica

### Pontos importantes

**1. Uso de variáveis de cor:**

- Criado o arquivo `variaveis.ts` em `styles` para armazenar as cores utilizadas no projeto
- As cores são importadas e usadas nos styled components, por exemplo:
  ```ts
  background-color: ${variaveis.verde};
  ```

**2. Definição de tipos para as tags:**

- Criado o tipo `TagProps` para definir as props aceitas pelo componente de tag:
  ```ts
  type TagProps = {
    prioridade?: string
    status?: string
  }
  ```

**3. Função para cor dinâmica:**

- Função criada para retornar a cor de fundo da tag conforme status ou prioridade:
  ```ts
  function retornaCorDeFundo(props: TagProps): string {
    if ('status' in props) {
      if (props.status === 'pendente') return variaveis.amarelo
      if (props.status === 'concluida') return variaveis.verde
    } else if ('prioridade' in props) {
      if (props.prioridade === 'urgente') return variaveis.vermelho
      if (props.prioridade === 'importante') return variaveis.amarelo2
    }
    return '#ccc'
  }
  ```
- Exemplo de uso no styled component:
  ```ts
  export const TagCard = styled.span<TagProps>`
    background-color: ${(props) => retornaCorDeFundo(props)};
  `
  ```

**4. Observação:**

- Na próxima aula será ensinado como fazer essa lógica usando enums para maior organização e segurança de tipos

## Aula 8 - Conheça Enums

### Objetivos

- Entender o conceito de enums
- Implementar enums no projeto para status e prioridade
- Utilizar enums para facilitar a verificação e manutenção dos parâmetros

### Pontos importantes

**1. O que são enums:**

- Enums (enumeradores) são listas de constantes que facilitam a organização e o uso de valores fixos no código
- Exemplo clássico: enum para DiasDaSemana

**2. Implementação no projeto:**

- Criada a pasta `utils/enums` e o arquivo `tarefa.ts` para centralizar os enums utilizados nas tarefas
- Foram criados enums para status e prioridade das tarefas
- Após criar os enums, todos os arquivos que utilizam esses parâmetros foram atualizados para usar os enums, garantindo maior consistência

**3. Vantagens do uso de enums:**

- Facilita a manutenção: ao adicionar ou alterar valores, basta modificar o enum
- Torna o código mais seguro e fácil de entender, evitando erros de digitação e valores inválidos
- Permite definir tipos específicos para props e funções, melhorando a tipagem do projeto

**4. Observação:**

- Ao adicionar novos valores, basta atualizar o enum e os arquivos que dependem dele

## Aula 9 - Configure o Redux

### Objetivos

- Praticar o uso de reducers no projeto
- Utilizar o returnType para tipagem do estado global
- Integrar o Provider para fornecer a store Redux a todos os componentes

### Pontos importantes

**1. Estrutura da store Redux:**

- Criada a pasta `store` em `src` para organizar os arquivos relacionados ao Redux
- Para cada reducer, criar um arquivo específico para sua configuração
- Exemplo de configuração da store:

  ```ts
  import { configureStore } from '@reduxjs/toolkit'

  const store = configureStore({
    reducer: {
      // reducers
    }
  })

  export type RootReducer = ReturnType<typeof store.getState>
  ```

**2. Exemplo de reducer:**

- Estrutura básica de um reducer usando createSlice:

  ```ts
  import { createSlice, PayloadAction } from '@reduxjs/toolkit'

  const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState: [],
    reducers: {
      remover: (state, action: PayloadAction<number>) => {
        return state.filter((tarefa) => tarefa.id !== action.payload)
      }
    }
  })

  export const { remover } = tarefasSlice.actions
  export default tarefasSlice.reducer
  ```

**3. Uso de models para classes:**

- Criada a pasta `models` para armazenar classes do frontend
- O nome do arquivo da classe deve começar com letra maiúscula
- Após criar a classe de tarefa, importar para o reducer e instanciar objetos no initialState
- Exemplo: criar 3 tarefas para compor o estado inicial

**4. Integração com Provider e Redux:**

- Após criar a estrutura do reducer e da store, adicionar o Provider ao App para conectar o React ao Redux
- Substituir a constante de tarefas pelo useSelector para buscar as informações do reducer

**5. Observações:**

- Exportar sempre as actions e reducers para facilitar a integração
- A estrutura facilita a manutenção e escalabilidade do projeto

## Aula 10 - Remova uma tarefa

### Objetivos

- Implementar a função de remoção de tarefa no componente
- Praticar o uso do dispatch do Redux
- Corrigir problemas de estrutura do estado e seguir boas práticas

### Pontos importantes

**1. Uso do dispatch para remover tarefa:**

- Criada a constante `dispatch` no componente Tarefa, utilizando a biblioteca react-redux
- A função de remover é executada no onClick do botão, enviando a id da tarefa para o reducer

**2. Estrutura do initialState e problemas comuns:**

- Inicialmente, o estado do reducer foi definido como um array diretamente, o que pode causar problemas de serialização no Redux Toolkit
- A solução foi criar um objeto para o estado inicial, com um atributo `itens` que armazena o array de tarefas
- Exemplo:

  ```ts
  type TarefasState = {
    itens: Tarefa[]
  }

  const initialState: TarefasState = {
    itens: [
      {
        id: 1,
        titulo: 'Estudar JavaScript',
        prioridade: enums.Prioridade.NORMAL,
        status: enums.Status.PENDENTE,
        descricao: 'Ler documentação do MDN'
      }
    ]
  }
  ```

**3. Atualização do reducer para boas práticas:**

- O reducer foi ajustado para filtrar as tarefas pelo id, atualizando o array de itens:
  ```ts
  const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState,
    reducers: {
      remover: (state, action: PayloadAction<number>) => {
        state.itens = state.itens.filter(
          (tarefa) => tarefa.id !== action.payload
        )
      }
    }
  })
  ```

**4. Uso do useSelector para acessar o estado:**

- No container ListaDeTarefas, a desestruturação foi ajustada para acessar o atributo `itens` do estado:
  ```ts
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  ```

**5. Observação sobre serialização:**

- Para evitar problemas com non-serializable items, o estado deve ser sempre um objeto simples, sem instâncias de classes ou funções construtoras
- O ideal é criar um tipo para o estado, definir uma constante para os itens e garantir que o estado seja serializável

## Aula 11 - Edite uma tarefa

### Objetivos

- Construir funções para editar tarefas
- Aprender sobre componentes controlados (controlled components)
- Organizar o código para reduzir repetições e melhorar a clareza

### Pontos importantes

**1. Controle do textarea com useState e useEffect:**

- Para permitir edição do textarea, foi criado um estado local `descricao` usando useState
- O valor inicial de `descricao` é definido via useEffect, que verifica se existe uma descrição original e atualiza o estado:
  ```ts
  const [descricao, setDescricao] = useState('')
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])
  ```
- O textarea é controlado pelo estado e só pode ser editado quando `estaEditando` for true:
  ```ts
  <S.DescricaoCard
    disabled={!estaEditando}
    value={descricao}
    onChange={(e) => setDescricao(e.target.value)}
  />
  ```

**2. Função editar no reducer:**

- Adicionada a função editar ao reducer de tarefas:
  ```ts
  editar: (state, action: PayloadAction<Tarefa>) => {
    const IndexTarefa = state.itens.findIndex((t) => t.id === action.payload.id)
    if (IndexTarefa >= 0) {
      state.itens[IndexTarefa] = action.payload
    }
  }
  ```
- A validação do índice garante que só edita se encontrar a tarefa (findIndex retorna -1 se não encontrar)

**3. Função para salvar edição:**

- Criada a função salvarEdicao, que executa o dispatch da action editar e altera o estado de edição:
  ```ts
  function salvarEdicao() {
    dispatch(editar({ titulo, prioridade, status, descricao, id }))
    setEstaEditando(false)
  }
  ```

**4. Observação sobre o uso do spread:**

- No reducer de remoção, o uso do spread (`...`) não é necessário, pois o filter já retorna um novo array, mas o professor na aula escreveu assim:

  ```ts
  state.itens = [
    ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
  ]
  ```

- A sugestão do gpt é:
  ```ts
  state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
  ```

## Aula 12 - Pesquise tarefas

### Objetivos

- Criar tipagem para o filtro de tarefas;
- Implementar funções para o campo de busca;
- Renderizar a lista de tarefas filtrada corretamente.

### Pontos importantes

**1. Criação do reducer de filtro:**

- Foi criado um novo reducer chamado `filtro`, responsável por filtrar as atividades exibidas.
- O tipo do filtro recebe:
  - `termo`: texto digitado pelo usuário;
  - `criterio`: pode ser 'prioridade', 'status' ou 'todas';
  - `valor`: opcional, usado quando o filtro é por prioridade ou status (utiliza enums).

**Exemplo de tipagem e slice:**

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})
export const { alterarTermo } = filtroSlice.actions
export default filtroSlice.reducer
```

**2. Integração do termo de busca na lista de tarefas:**

- No componente da lista, usamos o termo do filtro para renderizar as tarefas:
  ```ts
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  ```
- A mensagem e a renderização passam a usar a variável `termo`.

**3. Função de busca/filter:**

- Para buscar tarefas pelo termo, criamos uma função que filtra o array de tarefas:
  ```ts
  const filtrarTarefas = () => {
    return itens.filter((item) =>
      item.titulo.toLowerCase().includes(termo.toLowerCase())
    )
  }
  ```
- O uso de `toLowerCase` permite que o usuário digite sem se preocupar com maiúsculas/minúsculas.
- A função `filtrarTarefas()` substitui o uso direto de `itens` no map para renderizar a lista filtrada.

**Resumo:**

- O reducer de filtro centraliza o termo de busca.
- A lista de tarefas é renderizada conforme o termo digitado.
- O código fica mais organizado e fácil de manter.

## Aula 13 - Filtre tarefas

### Objetivos

- Implementar funções para filtrar tarefas por prioridade ou status;
- Exibir o contador de tarefas filtradas;
- Refatorar props dos componentes para o novo filtro;
- Corrigir erros e melhorar a lógica de filtragem.

### Pontos importantes

**1. Função alterarFiltro no reducer:**

- Adicionada a função `alterarFiltro` ao reducer de filtro, permitindo alterar o critério e valor do filtro (prioridade, status ou todas).
- Exemplo:
  ```ts
  alterarFiltro: (
    state,
    action: PayloadAction<{
      criterio: string
      valor?: enums.Prioridade | enums.Status
    }>
  ) => {
    state.criterio = action.payload.criterio
    state.valor = action.payload.valor
  }
  ```

**2. Atualização do FiltroCard e BarraLateral:**

- O componente `FiltroCard` recebeu uma nova prop chamada `criterio`, que indica o tipo de filtro aplicado.
- Utilizado `dispatch` e `useSelector` para atualizar e ler o filtro global.
- A prop `ativo` do card agora depende da combinação de `criterio` e `valor` selecionados, garantindo que apenas o card ativo fique destacado.

**3. Contador de tarefas filtradas:**

- A prop `contador` foi removida do card e substituída por uma constante calculada dinamicamente, mostrando a quantidade de tarefas que se encaixam no filtro selecionado.
- Exemplo:
  ```ts
  const contador = itens.filter(/* lógica do filtro */).length
  ```

**4. Renderização condicional dos cards:**

- Criada uma função para renderizar os cards conforme o critério de pesquisa selecionado.
- Por padrão, o critério é 'todas', exibindo todos os cards; ao clicar em um filtro, o critério e valor são atualizados e apenas as tarefas correspondentes são exibidas.

**5. Interatividade e UX:**

- Adicionado `cursor: pointer` ao `CardFiltro` para indicar que é clicável.
- O título da lista de tarefas muda conforme o filtro e quantidade de resultados encontrados.

**6. Refino das props e tipagem:**

- As props do filtro foram ajustadas: apenas `criterio` é obrigatório, `termo` e `valor` são opcionais.
- Utilização dos enums para garantir segurança de tipos nos filtros.

**7. Correções e melhorias:**

- Corrigidos erros de renderização e lógica de filtro.
- Garantido que o filtro funcione corretamente para todos os critérios (prioridade, status, todas).

**Resumo:**

- O sistema de filtro agora permite selecionar por prioridade ou status, exibe o número de tarefas filtradas, destaca o card ativo e atualiza a lista dinamicamente.
- As props e tipagem dos componentes foram ajustadas para maior clareza e segurança.
- O código ficou mais organizado, interativo e fácil de manter.

## Aula 14 - Exiba os resultados da filtragem

### Objetivos

- Exibir os resultados dos filtros de tarefas;
- Melhorar a performance e organização do código de renderização;
- Estilizar as mensagens de resposta do filtro conforme o layout.

### Pontos importantes

**1. Função para mensagem de resultado:**

- Criada uma função para gerar a mensagem de resultado da filtragem, evitando repetição de código e facilitando a manutenção.
- Utilizado operador ternário para montar a frase conforme o termo pesquisado e quantidade de tarefas encontradas.

**Exemplo:**

```ts
const textoPesquisa = (quantidade: number) => {
  const complemento = termo && termo.length > 0 ? ` com o termo '${termo}'` : ''
  if (quantidade <= 0) {
    return `Nenhuma tarefa foi encontrada${complemento}`
  } else {
    return `Você possui ${quantidade} tarefas registradas${complemento}`
  }
}
const mensagem = textoPesquisa(tarefas.length)
<S.Resultado>{mensagem}</S.Resultado>
```

**2. Estilização da mensagem:**

- Criado o componente `Resultado` no styled-components para estilizar a mensagem conforme o Figma.
- A mensagem é exibida sempre que o filtro é aplicado, melhorando o feedback visual ao usuário.

**3. Boas práticas de renderização:**

- Guardar a mensagem em uma constante antes do return do componente evita lógica repetida e deixa o código mais limpo.
- Utilizar funções auxiliares para textos dinâmicos facilita manutenção e testes.

**Resumo:**

- A exibição dos resultados do filtro ficou mais clara, organizada e estilizada.
- O código está mais performático e fácil de manter, seguindo boas práticas de React.

## Aula 15 - Conheça React Router DOM

### Objetivos

- Conhecer e instalar a biblioteca React Router DOM para navegação entre páginas;
- Compreender o conceito de Single Page Application (SPA);
- Aprender a criar rotas, componentes e elementos usando React Router.

### Pontos importantes

**1. O que é SPA (Single Page Application):**

- Diferente de páginas tradicionais, uma SPA não recarrega o navegador a cada navegação. O conteúdo é trocado dinamicamente, proporcionando uma experiência mais fluida ao usuário.

**2. Instalação do React Router DOM:**

- Instale a biblioteca com:
  ```sh
  npm i react-router-dom
  ```

**3. Estrutura básica de rotas:**

- Importe os principais recursos no `App.tsx`:
  ```ts
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  ```
- Crie uma pasta `pages` em `src` para organizar as páginas da aplicação.
- Exemplo de página Home:

  ```ts
  // src/pages/Home/index.tsx
  import BarraLateral from '../../containers/BarraLateral'
  import ListaDeTarefas from '../../containers/ListaDeTarefas'

  const Home = () => (
    <>
      <BarraLateral />
      <ListaDeTarefas />
    </>
  )
  export default Home
  ```

**4. Configuração das rotas:**

- No `App.tsx`, crie uma constante para as rotas:
  ```ts
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/novo',
      element: <h1>Nova Tarefa</h1>
    }
  ])
  ```
- No return do `App.tsx`, substitua os componentes antigos pelo `RouterProvider`:
  ```ts
  <RouterProvider router={rotas} />
  ```

**Resumo:**

- O React Router DOM permite criar rotas dinâmicas e navegação sem recarregar a página.
- A estrutura SPA proporciona uma experiência mais rápida e moderna para o usuário.
- A configuração das rotas é simples e modular, facilitando a manutenção do projeto.

## Aula 16 - Navegue entre rotas

### Objetivos

- Criar a página de cadastro de uma nova tarefa;
- Estilizar e adicionar botões de navegação;
- Utilizar o componente `Link` do React Router DOM para navegação entre rotas.

### Pontos importantes

**1. Criação da página de cadastro:**

- Adicionada uma nova página chamada `Cadastro` na pasta `pages`.
- No arquivo de rotas, o path `/novo` agora renderiza o componente `Cadastro`.

**2. Componente BotaoAdicionar:**

- Criado o componente `BotaoAdicionar` para facilitar a navegação até a página de cadastro.
- O botão foi estilizado para seguir o layout do projeto.

**3. Uso do componente Link:**

- O `Link` do `react-router-dom` é utilizado para navegação interna, substituindo a tag `<a>` tradicional.
- O `Link` recebe a prop `to` (em vez de `href`) para definir o destino da navegação.
- Exemplo de uso:
  ```ts
  import { Link } from 'react-router-dom'
  ;<Circulo to="/novo">+</Circulo>
  ```
- O componente `Circulo` pode ser um styled-component baseado no `Link` para aplicar estilos personalizados.

**4. Vantagens do Link:**

- O `Link` permite navegação sem recarregar a página, mantendo o comportamento SPA.
- Facilita a criação de menus, botões e navegação entre diferentes partes da aplicação.

**Resumo:**

- Agora a aplicação possui navegação entre páginas usando o `Link` do React Router DOM.
- A página de cadastro foi criada e pode ser acessada facilmente pelo botão estilizado.

## Aula 17 - Crie uma tarefa

### Objetivos

- Criar uma nova página para adicionar tarefas;
- Estilizar e estruturar o formulário de cadastro;
- Utilizar atributos HTML e enums para inputs dinâmicos;
- Implementar o reducer de cadastro e navegação após criar tarefa.

### Pontos importantes

**1. Estrutura do formulário:**

- O formulário de cadastro segue o design do Figma e é composto por:
  - Input de texto para o título
  - Textarea para a descrição
  - Inputs do tipo radio para prioridade
  - Botão para cadastrar nova tarefa
- Para garantir que apenas um radio seja selecionado, todos usam o mesmo atributo `name`.

**2. Reaproveitamento de layout e estilos:**

- A área de cadastro utiliza o container da barra lateral, exibindo apenas o botão de voltar.
- O formulário é construído dentro de um container próprio para facilitar o espaçamento e organização.
- Estilos do container de tarefas e outros elementos foram movidos para o `EstiloGlobal` para evitar duplicidade e facilitar a manutenção.

**3. Inputs dinâmicos com enums:**

- Para evitar repetição, os valores do enum de prioridade são transformados em array e renderizados dinamicamente:
  ```tsx
  {
    Object.values(enums.Prioridade).map((prioridade) => (
      <S.Opcao key={prioridade}>
        <input
          value={prioridade}
          name="prioridade"
          type="radio"
          id={prioridade}
          defaultChecked={prioridade === enums.Prioridade.NORMAL}
          onChange={({ target }) =>
            setPrioridade(target.value as enums.Prioridade)
          }
        />
        <label htmlFor={prioridade}>{prioridade}</label>
      </S.Opcao>
    ))
  }
  ```

**4. Controle de estado e envio:**

- O formulário utiliza React para controlar os campos:
  ```ts
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  ```
- O envio do formulário executa a função `cadastrarTarefa`:
  ```tsx
  <S.Form onSubmit={cadastrarTarefa}>
  ```

**5. Função de cadastro e navegação:**

- A função de cadastro cria uma nova tarefa e despacha para o reducer:
  ```ts
  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    const tarefaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9 // id temporário
    )
    dispatch(cadastrar(tarefaAdicionar))
  }
  ```
- Após cadastrar, utiliza o hook do React Router DOM para redirecionar:
  ```ts
  import { useNavigate } from 'react-router-dom'
  const navigate = useNavigate()
  navigate('/')
  ```

**Resumo:**

- O formulário de cadastro é dinâmico, reutiliza estilos e componentes, e utiliza enums para inputs.
- O cadastro de tarefas é feito via reducer e, ao finalizar, o usuário é redirecionado para a home.

## Aula 18 - Marque uma tarefa como concluída

### Objetivos

- Adicionar e integrar um checkbox para marcar tarefas como concluídas;
- Implementar a lógica de alteração do status da tarefa (pendente/concluída);
- Aplicar renderização condicional e navegação entre páginas;
- Gerar id dinâmico ao cadastrar tarefas.

### Pontos importantes

**1. Action para alterar status:**
- Criada uma nova action no reducer de tarefas chamada `alteraStatus`.
- Ela verifica se o id da tarefa existe e altera o status para `CONCLUIDA` se o checkbox estiver marcado, ou para `PENDENTE` se estiver desmarcado.

**2. Checkbox no componente Tarefa:**
- Adicionado um input do tipo checkbox para cada tarefa.
- O atributo `checked` recebe a expressão `status === enums.Status.CONCLUIDA` para marcar o checkbox se a tarefa estiver concluída.
- O evento `onChange` chama a função `alterarStatusTarefa`, que executa o dispatch da action passando o id e o valor do checkbox (`e.target.checked`).
  ```tsx
  <input
    type="checkbox"
    checked={status === enums.Status.CONCLUIDA}
    onChange={alterarStatusTarefa}
  />
  ```

**3. Renderização condicional do título:**
- Para exibir "Editando: " antes do título ao editar, foi usada a renderização condicional:
  ```tsx
  {estaEditando && <em>Editando: </em>}
  ```
- O React só renderiza o que está à direita do `&&` se o valor à esquerda for verdadeiro.
- Equivalente a `{estaEditando ? <em>Editando: </em> : null}`.
- A tag `<em>` deixa o texto em itálico.

**4. BarraLateral com prop mostrarFiltros:**
- Criado um tipo para a prop `mostrarFiltros` (booleano) na BarraLateral.
- Se `mostrarFiltros` for true, renderiza a barra de pesquisa e filtros; se false, renderiza apenas o botão de voltar para a home.

**5. Botão de voltar para home:**
- O botão de voltar usa o mesmo estilo do botão de editar.
- O evento de clique usa o hook `useNavigate` para redirecionar para a home:
  ```ts
  import { useNavigate } from 'react-router-dom'
  const navigate = useNavigate()
  const voltarHome = () => navigate('/')
  ```

**6. Id dinâmico ao cadastrar tarefas:**
- O reducer de cadastro foi ajustado para gerar o id automaticamente:
  - Se não houver tarefas, o id é 1.
  - Se houver, o id é o último id + 1.
- Isso evita a necessidade de passar o id manualmente ao criar uma nova tarefa.

**Resumo:**
- Agora é possível marcar tarefas como concluídas com o checkbox, alterar o status, navegar entre páginas e cadastrar tarefas com id dinâmico.

Depois voltar aos comentários e ver como faz a solução dos erros do console.
## links

[projeto base](https://github.com/ogiansouza/minhas-tarefas)
