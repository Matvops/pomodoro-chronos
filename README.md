# 🍅 Chronos Pomodoro

Uma aplicação web intuitiva e customizável para implementar a **técnica Pomodoro** de forma eficiente. Desenvolvida como projeto de **portfolio** e **estudo** para aprimorar habilidades em desenvolvimento front-end moderno.


Link para o site: https://chronos-pomodoro-six-plum.vercel.app/

---

## 📋 Sobre o Projeto

O **Chronos Pomodoro** é uma ferramenta que ajuda você a gerenciar seu tempo de trabalho utilizando a técnica Pomodoro, que consiste em ciclos de foco e descanso. A interface é intuitiva, responsiva e permite total customização dos tempos de trabalho e descanso.

### Objetivos de Aprendizado

Este projeto foi desenvolvido com o objetivo de:
- ✅ Aprimorar habilidades em **TypeScript** e **JavaScript**
- ✅ Consolidar conhecimentos em **React** (Hooks, Context API, Reducers)
- ✅ Dominar **CSS Modules** para estilização modular e escalável
- ✅ Implementar gerenciamento de estado robusto
- ✅ Trabalhar com **Web Workers** para operações assíncronas
- ✅ Aplicar **padrões de arquitetura** limpa e organizada

---

## 🎯 Funcionalidades

### ✨ Funcionalidades Principais

- **Contador Regressivo Dinâmico**: Display em tempo real do tempo restante
- **Ciclos Pomodoro Inteligentes**: 
  - Ciclo de **Foco** (padrão 25 minutos)
  - Ciclo de **Descanso Curto** (padrão 5 minutos)
  - Ciclo de **Descanso Longo** (padrão 15 minutos após 4 ciclos)
- **Gerenciamento de Tarefas**: Crie, inicie, interrompa e acompanhe suas tarefas
- **Configurações Personalizáveis**: Customize os tempos de cada ciclo conforme sua preferência
- **Histórico de Tarefas**: Acompanhe todas as tarefas completadas e interrompidas
- **Persistência de Dados**: Seus dados são salvos automaticamente no `localStorage`
- **Notificações**: Alertas sonoros e mensagens visuais para melhor experiência
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

### 📱 Páginas e Seções

| Página | Descrição |
|--------|-----------|
| **Home** | Contador Pomodoro, formulário para criar tarefas e início/interrupção de ciclos |
| **Histórico** | Visualização de todas as tarefas completadas e interrompidas com datas e durações |
| **Configurações** | Personalização dos tempos de foco, descanso curto e descanso longo |
| **Sobre Pomodoro** | Informações sobre a técnica Pomodoro e dicas de produtividade |

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca JavaScript para construção de UIs
- **TypeScript 5.9.3** - Linguagem tipada baseada em JavaScript
- **React Router 7.13.1** - Roteamento entre páginas
- **CSS Modules** - Estilização modular e escalável

### Ferramentas e Utilidades
- **Vite 7.2.4** - Build tool rápido e otimizado
- **SWC** - Compilador de JavaScript/TypeScript super rápido
- **Lucide React 0.562.0** - Ícones SVG de alta qualidade
- **React Toastify 11.0.5** - Notificações elegantes
- **date-fns 4.1.0** - Manipulação e formatação de datas

### Desenvolvimento
- **ESLint 9.39.1** - Linter para análise de código
- **TypeScript ESLint** - Integração do ESLint com TypeScript
- **Node 24.10.1** - Runtime JavaScript

### Arquitetura

```
Web Worker (Timer)
       ↓
Context API + useReducer (State Management)
       ↓
React Components (UI)
       ↓
LocalStorage (Persistência)
```

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js v18+ instalado
- npm ou yarn instalado

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/pomodoro-chronos.git
   cd pomodoro-chronos
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra seu navegador em `http://localhost:5173`

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR |
| `npm run build` | Compila TypeScript e faz build para produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Analisa o código com ESLint |

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ButtonDefault/      # Botão padrão
│   ├── CountDown/          # Contador regressivo
│   ├── Cycles/             # Exibição dos ciclos
│   ├── Dialog/             # Modal/Diálogo
│   ├── FormHome/           # Formulário de tarefas
│   ├── Heading/            # Títulos
│   ├── InputDefault/       # Input de texto
│   ├── MessageContainer/   # Notificações
│   └── ...
├── contexts/            # Context API
│   └── TaskContext/
│       ├── TaskContextProvider.tsx  # Provider do contexto
│       ├── taskReducer.ts           # Redutor de ações
│       ├── taskActions.ts           # Tipos de ações
│       └── initialTaskState.ts      # Estado inicial
├── pages/               # Páginas da aplicação
│   ├── Home/               # Página principal
│   ├── History/            # Histórico de tarefas
│   ├── Settings/           # Configurações
│   └── AboutPomodoro/      # Sobre Pomodoro
├── models/              # Tipos e interfaces TypeScript
│   ├── TaskModel.ts        # Tipo de tarefa
│   └── TaskModelState.ts   # Tipo do estado
├── utils/               # Funções utilitárias
│   ├── formatDate.ts       # Formatação de datas
│   ├── parseSecondsToMinutes.ts  # Conversão de tempo
│   ├── getNextCycle.ts     # Lógica de ciclos
│   └── ...
├── workers/             # Web Workers
│   ├── timerWorker.js      # Worker do timer
│   └── TimerWorkerManager.ts  # Gerenciador do worker
├── styles/              # Estilos globais
│   ├── global.css          # Estilos globais
│   └── theme.css           # Variáveis de tema
├── adapters/            # Adaptadores
│   └── showMessage.ts      # Sistema de notificações
├── App.tsx              # Componente raiz
└── main.tsx             # Ponto de entrada
```

---

## 🔑 Conceitos Técnicos Implementados

### 1. **Context API + useReducer**
Sistema robusto de gerenciamento de estado centralizado para controlar todas as tarefas e configurações.

```typescript
// Exemplo de uso
const { task, dispatch } = useContext(TaskContext);
dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
```

### 2. **Web Worker**
Executa o timer em uma thread separada, evitando bloqueio da UI.

```typescript
// Timer roda em background sem impactar a interface
const worker = TimerWorkerManager.getInstance();
worker.postMessage(task);
```

### 3. **CSS Modules**
Estilização modular e escalável com escopo local.

```typescript
import style from './style.module.css';
<div className={style.countDown}>{time}</div>
```

### 4. **TypeScript**
Tipagem forte em toda a aplicação para maior segurança e autocompletar.

```typescript
type TaskModel = {
    id: string;
    name: string;
    durationInMinutes: number;
    // ... mais propriedades
};
```

### 5. **LocalStorage**
Persistência automática do estado da aplicação no navegador.

---

## 📊 Técnica Pomodoro Explicada

A técnica Pomodoro é um método de gerenciamento de tempo composto por:

1. **Foco (25 min)** - Trabalhe intensamente em uma tarefa
2. **Descanso Curto (5 min)** - Recupere-se rapidamente
3. **Foco (25 min)** - Segunda sessão de trabalho
4. **Descanso Curto (5 min)** - Descanse novamente
5. **Foco (25 min)** - Terceira sessão de trabalho
6. **Descanso Curto (5 min)** - Descanse novamente
7. **Foco (25 min)** - Quarta sessão de trabalho
8. **Descanso Longo (15 min)** - Descanse mais longo, depois reinicie o ciclo

---

## 💡 Aprendizados Principais

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

- ✅ Componentes funcionais e Hooks avançados do React
- ✅ Gerenciamento de estado com Context API e useReducer
- ✅ Tipagem completa com TypeScript
- ✅ Organização e arquitetura de projetos React
- ✅ Estilização modular com CSS Modules
- ✅ Integração com Web Workers
- ✅ Persistência de dados com localStorage
- ✅ Roteamento com React Router
- ✅ Boas práticas de desenvolvimento frontend
- ✅ Build e deployment com Vite

---

## 👨‍💻 Autor

Desenvolvido como projeto de **portfolio** e **estudo**. 

Se tiver sugestões ou encontrar bugs, fique à vontade para contribuir ou abrir uma issue!

---

## 🙏 Agradecimentos

Inspirado pela comunidade de desenvolvimento web e pelas melhores práticas da indústria.

---

**Desenvolvido com ❤️ e muito foco (com Pomodoros, é claro! 🍅)**
