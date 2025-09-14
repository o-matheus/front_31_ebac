# Módulo 31 - Projeto 5 (Todo list)

## Menu

[Aula 1 - Entenda o Projeto](#aula-1---entenda-o-projeto)
[Aula 2 - Faça a configuração inicial](#aula-2---faça-a-configuração-inicial)
[Aula 3 - Construa o componente de filtro](#aula-3---construa-o-componente-de-filtro)
[Aula 4 - Parametrize os filtros](#aula-4---parametrize-os-filtros)
[Aula 5 - Construa o card da tarefa](#aula-5---construa-o-card-da-tarefa)
[Aula 6 - Crie o estado de troca de botões ](#aula-6---crie-o-estado-de-troca-de-botões)
[Aula 7 - Parametrize cards de tarefa ](#aula-7---parametrize-cards-de-tarefa)
[Aula 8 - Conheça Enums ](#aula-8---conheça-enums)
[Aula 9 - Configure o Redux](#aula-9---configure-o-redux)

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
  {tarefas.map((t) => (
    <li key={t.titulo}>
      <Tarefa
        descricao={t.descricao}
        prioridade={t.prioridade}
        status={t.status}
        titulo={t.titulo}
      />
    </li>
  ))}
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

## links
[projeto base](https://github.com/ogiansouza/minhas-tarefas)
[Figma]()
