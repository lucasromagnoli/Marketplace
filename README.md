# Marketplace

API desenvolvida para fins acadêmicos. O sistema responsável por gerenciar anúncios.<br>
Onde clientes e compradores se cadastram, públicam seus anúncios e recebem ofertas de clientes.<br>
Ofertas, que podem ser aceitas ou recusadas pelo autor do anúncio.<br>
Confira abaixo as tecnologias utilizadas no projeto.<br>
API desenvolvida no bootcamp da Rocketseat GO Stack 6.0.

# Tecnologias

**MongoDB:** `Banco não relacional, ideal para uma aplicação que tem pouco relacionamente ou nenhum. Alto ganho de perfomance. Excelente para micro serviços.`

**Docker:** `Fornece uma camada adicional de abstração e automação de virtualização de nível de sistema operacional.<br>Ou seja, responsável pela virtualização do MongoDB e o Redis.`

**Mailtrap:** `É um sistema de SMTP fake, onde conseguimos utilizar para testar funções de envio de e-mail em uma caixa de entrada controlada.`

**Sentry:** `É um sistema de monitoramento de erro em tempo real, para ser utilizado em produção. Para mapeamento e tratamento de erros.<br>Caso aconteça algum erro no servidor, o mesmo é registrado no sistema Sentry.<br>Onde, conseguimos visualizar, qual foi o erro, qual documento, qual função ocasionou o mesmo.`

**Fila utilizando o Redis**`Uma estrutura de dados do servidor, no Redis é armazenado uma chave junto com o nome de uma função.<br>E quando está chave é chamada, ele executa a função. Então assim, conseguimos otimizar serviços como o envio de e-mail. <br> Onde respondemos a requisição do usuário antes do e-mail ser enviado e enviamos o e-mail em paralelo em back-end.`

# Pacotes

**Express:** `Responsável por construir aplicativos da Web e APIs.`

**Nodemon:** `Utilizado em desenvolvimento para automatizar o restart do servidor a cada modificação no código fonte.`

**ESlint**: `Utilizado em desenvolvimento para todos os membro da equipe manter um padrão de código.`

**Mongoose:** `Fornece um mapeamento de objetos do MongoDB similar ao ORM (Object Relational Mapping), ou ODM (Object Data Mapping) no caso do Mongoose. Isso significa que o Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.`

**BCryptJs:** `Responsável pela cripotografia das senhas de usuário.`

**JsonWebToken:** `Responsável pela autenticação do usuário.`

**Require-dir:** `Utilizado para importarmos um diretório em inteiro. Assim conseguimos evitar códigos repetidos.`

**Mongoose-paginate-v2:** `Responsável por paginar as requisições ao banco de dados.`

**Node-mailer:** `Responsável pelo envio de e-mails`

**Nodemailer-express-handlebars:** `Responsável em conjunto do Express-handlebars por gerenciar os templates de e viewEngines do serviço de envio de e-mail.`

**Express-handlebars:** `Responsável em conjunto do Nodemailer-express por gerenciar os templates de e viewEngines do serviço de envio de e-mail.`

**Kue:** `Responsável pelo sistema de Fila.`

**Joi:** `Facilita a criação de validações de requisições.`

**Express-validation:** `Junto do Joi é responsável pela validação das requisições.`

**Youch:** `Responsável por retornar os erros de uma maneira mais simples.`

**Express-async-handler:** `Responsável por fazer as promises retornarem exceptions.`

**@sentry/node:** `Necessário para utilziar a tecnologia Sentry. Onde registra e mapeia erros que acontecem em produção.`

**Dotenv:** `Utilizado para utilizarmos o sistema de environments`

# Comandos de configuração /#Docker

**Criar o container do banco de dados mongo:** `docker run --name mongonode -p 27017:27017 -d -t mongo`

**Criar o ontainer do banco de dados redis:** `docker run --name noderedis -p 6379:6379 -d -t redis:alpine`
