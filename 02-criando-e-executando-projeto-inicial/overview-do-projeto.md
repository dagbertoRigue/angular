### Overview do projeto - Arquivos importantes
---  

1. node_modules  

Nesta pasta, estão todas as dependências que foram instaladas.  

2. package.json

Possui a lista de dependências "devDependencies", necessários para rodar o projeto, em tempo de desenvolvimento. Essas não são adicionadas no pacote que vai para produção.

3. angular.json  

Possui as configurações do projeto. Por exemplo, arquivo de estilo (css3 ou scss) , onde fica o src, o prefixo, localização do index, assets, localização do estilo, importação de scripts, etc.  

4. styles.scss  

Onde pode ser adicionado os estilos globais, por exemplo, os includes do Material, com os temas da aplicação.  

5. index.html  

Onde é incluído o angular Material.  

6. assets  

Nesta pasta é adicionado as imagens, audios e vídeos.

7. app

Nesta pasta, é onde fica o código da aplicação.

app/app.module.ts = adiciona-se os imports de cada elemento do angular Material.  
app/app-routing.module.ts = trata do roteamento da aplicação.  
app/app.component.scss = para cada componente criado, haverá um arquivo para html, um arquivo ts e um arquivo scss.
