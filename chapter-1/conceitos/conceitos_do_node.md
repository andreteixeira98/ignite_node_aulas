# Conceitos importantes

## O QUE É O NODE?
1. o node é uma plataforma que permite executar codigo javascript no lado dos servidor.

2. o node funciona atraves do event loop que fica escutando uma 'call stack' do eventos (funções). o processo de escuta do event loop é single thread mas apos a escuta, a execução é multthread que tem por padrão 4 threads.

3. API Application Programming Interface (interface de programação de aplicativos).

4. conjunto de especificações de um conjunto de aplicações

5. documentação para desenvolvedor

## REST 
1. Representation State Transfer (transferencia representacional de estado)

2. Modelo de Arquitetura

## Regras do REST
1. Client-Server: cliente e servidor desconhecem o que está sendo implementado pelo outro lado. cada um faz seu papel sem se preocupar com o que esta sendo implementado pelo outro. uma observação! o cliente tambem pode ser um outro servidor.

2. stateless: o servidor nao armazena estado

3. cache: possivel a implementação de cache
4.  interface uniforme
    - identificação dos recursos
     - http://enderecoservidor.com/products
    - http://enderecoservidor.com/clients

    - representação dos recursos
    - json, xhtml, xml, html etc.

    - retornar mensagens auto descritivas 

    - HATEOAS (HyperText As The Engine Of Application State): basicamente é permitir que a aplicação retorne links.

 5. aplicação deve ser criada em camadas

 6. Codigo sob demanda.

## metodos requisição http

1. GET - leitura
2. POST - Criação
3. PUT - Atualização total
4. DELETE - Deleção
5. PATCH - Atualização Parcial

## codigos http

* os codigos http servem para indicar os tipos de retornos da API.
* o codigo é descrito de 3 digitos onde o primeiro indica qual é a sua categoria

* 1xx : Informativo - solicitação aceita ou processe continua em andamento
* 2xx : confirmação
  * 200 - Requisição bem sucedida
  * 201 - Created Geralmente usado para POST apos uma inserção (criação).

* 3xx : redirecionamento
  * 301 : Moved Permanently
  * 302: Moved

* 4xx: Erro do Cliente
  * 400 - Bad Request
  * 401 - Unauthorized
  * 403 - Forbidden
  * 404 - Not Found
  * 422 - Unprocessabla Entity

* 5xx: Erro no servidor
  * 500: internal server error
  * 502: Bad Gateway

## parametros das requisições

* Header Params - parametros do cabeçalho da requisição

* Query Params - 
  * http://enderecosite.com/search?page=2&limit=50

  * <p style="color:blue"> chave</p>
  * <p style="color:yellow">valor</p>
  * <p style="color:red">separador</p>

* Route Params
  * http://endereco.com/users/{id}

* Body Params
   ```json 
        {
          "name":"andre",
          "username":"andre98"
        }
    ```

## Boas praticas de API REST

* Utilização correta dos metodos HTTP
* Utilização correta dos status  no retorno das  respostas
* Padrão de nomeclatura
  * Busca de Usuarios - GET
    * <p style="color:blue">  http://endereco.com/v1/users</p>
  * Busca de usuarios por id -GET
    * <p style="color:blue">  http://endereco.com/v1/users/1</p>
  
  * Busca endereço do usuarios por id -GET
    * <p style="color:blue">  http://endereco.com/v1/users/1/address </p>

  * Deleção de um  usuarios por id - DELETE 
    * <p style="color:blue">  http://endereco.com/v1/users/1</p>

  * Atualização de um  usuarios - PATCH 
    * <p style="color:blue">  http://endereco.com/v1/users/1/newdatas</p>