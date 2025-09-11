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
* Conhecer o novo projeto que será trabalhado;
* Limpar o repositório para iniciar o projeto;
* Instalar os comandos, bibliotecas, fontes e estilos necessários.

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
* Configurar a estilização global (altura e largura do projeto)
* Criar estrutura de pastas para os componentes principais
* Importar e renderizar os componentes criados

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
* Criar os inputs necessários para o filtro
* Estruturar os componentes e arquivos principais
* Configurar o padding conforme o layout do projeto

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
		<S.CardFiltro ativo={props.ativo}>
			...
		</S.CardFiltro>
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
* Configurar variáveis dinâmicas para os filtros
* Desestruturar as propriedades necessárias para facilitar o uso
* Omitir propriedades dispensáveis nos styled components

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
		<S.CardFiltro ativo={ativo}>
			...
		</S.CardFiltro>
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


### Pontos importantes

## Aula 6 - Crie o estado de troca de botões
### Objetivos


### Pontos importantes

## Aula 7 - Parametrize cards de tarefa
### Objetivos


### Pontos importantes

## Aula 8 - Conheça Enums
### Objetivos


### Pontos importantes

## Aula 9 - Configure o Redux
### Objetivos


### Pontos importantes

## links
[projeto base](https://github.com/ogiansouza/minhas-tarefas)
[Figma]()
