# 🌿 WorkWell – App de Bem-Estar Corporativo

Gestão de bem-estar, atividades e apoio psicológico em um só lugar.

## Integrantes

-   **Nome:** Enzo G. Marsola  
    **RM:** 556310 - 2TDSPK

-   **Nome:** Luiz Paulo F. Fernandes  
    **RM:** 555497 - 2TDSPF
-   **Nome:** Rafael de Souza Pinto  
    **RM:** 555130 - 2TDSPY

## 📝 Descrição

O **WorkWell** é um aplicativo mobile construído com **Expo** e **React Native** para promover o bem-estar de colaboradores. Ele oferece:

-   Check-in diário de humor
-   Acompanhamento de participação mensal em atividades
-   Inscrição em eventos de bem-estar corporativo
-   Apoio psicológico: agendamento, cancelamento e histórico de consultas
-   Histórico integrado de atividades e consultas no perfil

Persistência simples via **AsyncStorage** (consultas e inscrições). Navegação usando **Expo Router**.                               |

## 🔐 Login de Teste

Use as credenciais abaixo para entrar:

```
Usuário: workwelladm
Senha:   ww1234
```

Após login a sessão é persistida; o logout limpa os dados e retorna à tela de login.

## ⚙️ Pré-requisitos

-   [Node.js 18+](https://nodejs.org/)
-   [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
-   Emulador Android / iOS ou aplicativo **Expo Go**

## 🚀 Executando o Projeto

```powershell
# Clonar
git clone https://github.com/luizpaulo73/workwell.git
cd workwell

# Instalar dependências
npm install

# Iniciar Metro
npm start
```

## 🛠 Tecnologias

-   React Native / Expo
-   Expo Router
-   AsyncStorage
-   Lucide React Native (ícones)
-   TypeScript (parcial – base TS + componentes JSX)