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
  -  - http://enderecoservidor.com/products
  - - http://enderecoservidor.com/clients

  - representação dos recursos
  - - json, xhtml, xml, html etc.

  - retornar mensagens auto descritivas 

 - HATEOAS (HyperText As The Engine Of Application State): basicamente é permitir que a aplicação retorne links.

 5. aplicação deve ser criada em camadas

 6. Codigo sob demanda.
