# Tutorial: NodeJS/Express

## Descrição

- Repositório para armazenar a aplicativo construído seguindo tutorial de NodeJS/Express do MDN Docs.
- Fonte: https://developer.mozilla.org/en-US/docs/Learn/Server-side

## Objetivos 

### Aprender a...

- montar um servidor backend;
- integrar middleware de autenticação;
- integrar um banco de dados;
- concectar back com frontend.

### Construir...

- Base sólida em backend;
- Skills para estabelecer ambiente backend em meu projeto de <a href="https://github.com/Dian-New-Dev/mini-blog">mini-blog</a>.

## Passos para estabelecer o ambiente de desenvolvimento

1) instalar/atualizar node.js;

2) criar arquivo package.json:

```
npm init

```

3) instalar express: 

```
 npm install express
```

4) insalar eslint:

```
npm install eslint --save-dev
```

5) definir script para rodar eslint no package.json

```
"scripts": {

  "lint": "eslint src/js"

}
```

6) Instalar Express Application Generator

```
npm install express-generator -g
```

7) Criar um app Express

´´´
express nome-do-app
´´´

8) Instalar dependencias do Express, na pasta criada pelo comando anterior

```
npm install
```

9) Rodar o app:

```
# Run nome-do-projeto on Windows with Command Prompt
SET DEBUG=nome-do-projeto:* & npm start

# Run nome-do-projeto on Windows with PowerShell
SET DEBUG=nome-do-projeto:* | npm start
```

## Passos para criar a aplicação "Local Library Website" 

1) Criar o "esqueleto" do website com Express Application Generator;

```
express express-locallibrary-tutorial --view=pug
```

2) Substituir todos os "var" por "const"

3) Iniciar servidor na pasta do projeto express

```
SET DEBUG=express-locallibrary-tutorial:* & npm start
```

4) Instalar nodemon para reiniciar servidor sempre que site for alterado. Instalar como dependencia de desenvolvimento:

```
npm install --save-dev nodemon
```

5) Adicionar script no package.json para rodar nodemon

```
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  },
```

6) A partir de agora, inicia-se servidor com 
```
npm run devstart
```

7) A estrutura de arquivos deve estar assim:

```
express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

8) 

## Aprendizado

- Após seguir os passos do tutorial, percebi que ele estava indo para um lado que não parecia adequado para meu projeto.

- Após alguma pesquisa, descobri a diferenteça entre

1) SSR: O servidor possui a lógica para renderizar o HTML, o qual é enviado pronto para o cliente. O carregamento inicial é mais rapido, mas a interatividade é mais limitada.
- Aqui o servidor é mais utilizado, pois ele renderiza cada página antes de enviar.
- Recomendado para: projetos que precisam de melhor SEO, blogs, notícias, e-commerce

2) CSR: o cliente possui a lógica que gera o HTML no frontend. O carregamento inicial pode ser mais demorado, mas a interatividade é mais rapida e não exige recarregamentos.
- Aqui há menos carga sobre o servidor, que apenas envia dados em JSON a serem renderizados pelo front.
- Aplicações interativas, SPAs, dashboards.

- Conclusão: como construi meu blog com React, um tutorial voltado a SSR não me é apropriado. Voltarei a este tutorial quando precisar aprender SSR.
