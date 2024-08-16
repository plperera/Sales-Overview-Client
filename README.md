# React Project Base

Esta é uma base para iniciar novos projetos React, semelhante ao Create React App.

## Estrutura do Projeto

- **src/**: Diretório principal do código-fonte.
  - **assets/**: Arquivos estáticos como fontes e imagens.
  - **components/**: Componentes reutilizáveis.
  - **hooks/**: Hooks personalizados.
  - **pages/**: Componentes de páginas.
  - **services/**: Lógica de API e serviços.
  - **styles/**: Estilos globais e temas.
  - **utils/**: Funções utilitárias.
  - **App.js**: Componente raiz do aplicativo.
  - **Routes.js**: Configuração de rotas.
  - **index.js**: Ponto de entrada do React.

## Configuração de Variáveis de Ambiente

Use um arquivo `.env` para configurar variáveis de ambiente.

## Alias de Importação

Alias de importação estão configurados para facilitar os imports:
- `@assets/*`
- `@components/*`
- `@hooks/*`
- `@pages/*`
- `@services/*`
- `@styles/*`
- `@utils/*`

## Iniciar o Projeto

Para iniciar o projeto, execute:

```bash
npm install
npm start
```