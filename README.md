# Perfil Rapido

App de rede social simples para capturar e exibir perfis de usuario de forma intuitiva e visualmente atraente. Desenvolvido com React Native e Expo.

## Funcionalidades

- Foto de perfil circular carregada de URL com `resizeMode="cover"`
- Botao para alternar entre 2 imagens de perfil
- Campo de texto para inserir o nome do usuario, sincronizado via `useState`
- Botao "Salvar" que exibe um alerta com o nome digitado
- Validacao: impede salvar com o campo vazio
- Layout responsivo com flexbox centralizado e `StyleSheet.create()`

## Tech Stack

- React Native
- Expo (blank template)
- TypeScript

## Como rodar

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

3. Abra o app Expo Go no celular e escaneie o QR code exibido no terminal.

Para rodar no navegador:

```bash
npx expo start --web
```

## Estrutura do projeto

```
profile-app/
  App.tsx          # Tela principal com imagem, input e botoes
  index.ts         # Ponto de entrada do app
  tsconfig.json    # Configuracao do TypeScript
  app.json         # Configuracao do Expo
  package.json     # Dependencias e scripts
  assets/          # Icones e splash screen
```
