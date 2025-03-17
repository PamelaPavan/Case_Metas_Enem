<h1 align="center">Case - Cadastro de Metas para ENEM</h1>

<p align="center">
  <img src="webpack/jhipster.png" alt="Imagem | jhipster">
</p>

## 📌 Índice

- [Objetivo](#objetivo)
- [Funcionalidades](#funcionalidades)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Base de Dados](#base-de-dados)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Autor](#autor)

## Objetivo

<p align="justify"> Criar uma aplicação completa do zero utilizando a ferramenta <strong>JHipster</strong> para o cadastro de metas dos alunos. Um aluno possui metas de notas nas 4 áreas do ENEM: linguagens, códigos e suas tecnologias; ciências humanas e suas tecnologias; ciências da natureza e suas tecnologias; e matemática e suas tecnologias. É necessário apenas o acesso de administrador (gerado automaticamente), e o próprio administrador cadastrar um aluno e, em seguida, cadastrar a meta de nota desse aluno. </p>


## Funcionalidades

<p align="justify"> <strong>1. Cadastro de Alunos:</strong> Permitir que o administrador cadastre alunos no sistema, armazenando informações básicas como o nome. </p>

<p align="justify"> <strong>2. Cadastro de Metas:</strong> Gerenciar metas de notas relacionadas às 4 áreas do ENEM, vinculando-as a cada aluno cadastrado. </p>

<p align="justify"> <strong>3. Gestão de Usuários:</strong> O sistema é restrito ao uso de um administrador, com credenciais padrão pré-definidas (admin/admin) geradas automaticamente. </p>

Exemplo de Uso Avaliado

1. Logar na plataforma utilizando as credenciais padrão de administrador (`admin/admin`).
2. Cadastrar um aluno chamado **Lucas**.
3. Criar uma meta com o valor de **800 pontos** para o aluno **Lucas**.

<p align="center"> <img src="webpack/funcionalidade.png" alt="Imagem | funcionalidade"> </p>

## Estrutura de pastas

<pre> ``` 
my-jhipster-app/
├── .mvn/                            # Arquivos de configuração do Maven
│   ├── wrapper/
├── .yo-rc.json                      # Configuração do JHipster
├── mvnw                             # Wrapper do Maven
├── mvnw.cmd                         # Wrapper do Maven para Windows
├── pom.xml                          # Arquivo de configuração do Maven
├── src/                             # Código fonte do projeto
│   ├── main/
│   │   ├── java/                    # Código Java
│   │   │   ├── com/
│   │   │   │   └── mycompany/       # Pacote do projeto
│   │   │   │       ├── config/      # Configurações do Spring
│   │   │   │       ├── domain/      # Classes de domínio (Entidades)
│   │   │   │       ├── repository/  # Repositórios (DAO)
│   │   │   │       ├── service/     # Lógica de negócio (Serviços)
│   │   │   │       ├── web/         # Controladores REST e Web
│   │   │   │       │   └── rest/    # Endpoints REST do aplicativo
│   │   │   │       │       └── MetaResource.java
│   │   ├── resources/
│   │   │   ├── config/              # Arquivos de configuração do Spring
│   │   │   ├── db/                  # Scripts de banco de dados
│   │   │   ├── static/              # Arquivos estáticos (CSS, JS, imagens)
│   │   │   ├── templates/           # Templates do Thymeleaf, caso aplicável
│   │   │   └── application.yml      # Configurações principais do aplicativo
│   │   └── webapp/
│   │       ├── app/                 # Código do frontend (Angular)
│   │       │   ├── app.module.ts    # Módulo principal do Angular
│   │       │   ├── components/      # Componentes do Angular
│   │       │   ├── services/        # Serviços do Angular
│   │       │   ├── shared/          # Componentes compartilhados
│   │       │   └── entities/        # Entidades do Angular
│   │       ├── index.html           # Página inicial do Angular
│   │       └── assets/              # Arquivos estáticos do frontend
│   └── test/                        # Testes do projeto
│       ├── java/
│       │   └── com/
│       │       └── mycompany/       # Testes do código Java
│       └── resources/
│           └── application.yml      # Configurações para os testes
├── target/                          # Diretório onde os arquivos gerados pelo Maven são armazenados
├── .gitignore                       # Arquivo para ignorar arquivos do Git
├── README.md                        # Arquivo de documentação do projeto
├── .editorconfig                    # Configuração do editor de código
└── LICENSE                          # Licença do projeto

```</pre>

## Base de Dados

<p align="justify"> O diagrama do modelo foi definido utilizando a ferramenta JHipster Domain Language (JDL), que descreve as entidades, seus atributos e os relacionamentos entre elas.
</p>

<p align="center">
  <img src="webpack/jdl.png" alt="Imagem | jdl" width="200px">
</p>

## Tecnologias Utilizadas

- **Backend:** Spring Boot (Java).
- **Frontend:** Angular.
- **Banco de Dados:** PostgreSQL (utilizado para desenvolvimento e produção).

## Arquitetura do Projeto

<p align="justify"> Este projeto JHipster utiliza arquitetura monolítica, ou seja, todos os componentes da aplicação estão interconectados e executados juntos. </p>

<p align="center"> <img src="webpack/arquitetura.png" alt="Imagem | arquitetura"> </p>

## Autor

<p>Pâmela Aliny Cleto Pavan</p>
e-mail: pamelaaliny@gmail.com 
