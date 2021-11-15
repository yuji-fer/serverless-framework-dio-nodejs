# API Node.js com Serverless Framework na cloud AWS

[Código de refererência](https://github.com/cassianobrexbit/dio-live-serverless-2907)

## Requisitos
-   Possuir conta na AWS e instalar o AWS CLI;
-   Instalar o Node.js
-   Instalar o serverless framework

### Atualizar pacotes do projeto

```
npm i
```

### Configurar conta da AWS via AWS CLI
-   Acessar o serviço IAM e criar um usuário com acesso programático e política de acesso 'AdministratorAccess'. **Salvar as credenciais**.
-   Com as credenciais, configurar a conta via AWS CLI.

```
aws configure
```

### Criar tabela no serviço DynamoDB
-   O nome da tabela deve ser 'ItemTable' e a chave primária 'id', tipo 'String'.

### Alterar o arquivo properties.yml
-   É necessário alterar as propriedades do arquivo pois se tratam de configurações específicas de cada usuário.

### Realizar o deploy via serverless framework

```
serverless deploy
```

Se tudo ocorrer sem problemas, toda a infraestrutura será provisionada na AWS. No API Gateway, é possível obter as URL's externas para realizar as chamadas de POST, GET (por item e todos) e PUT.

**Se sua conta for do tipo 'Free', não esqueça de encerrar os serviços após o teste.**