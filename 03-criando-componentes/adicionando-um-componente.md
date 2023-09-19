## Adicionando Componentes

##### Uma aplicação Angular é composta, basicamente, por componentes. Cada componente pode conter outros componentes, dando hierarquia aos objetos criados (componentes).  
##### Um componente é formado pela classe (Typescript), pelo Template (HTML) e pelo Estilo (CSS).  
##### Além disso, o componente possui outros elementos como, Diretivas, Injeção de dependências e Pipes.  
##### Arquitetura:  

![image](https://github.com/dagbertoRigue/angular/assets/58428043/429ce271-3198-4993-b618-85e35d105445)  

##### Lazy Modules : Os módulos da aplicação podem ser disponibilizados todos no carregamento inicial, ou podem ser carregados sob demanda (Lazy Module), para não onerar a sua inicialização.

##### Adicionando um componente
1. Acessar o site do Material:  

https://material.angular.io/

Na aba "Components", localizar os componentes no menu lateral esquerdo. 

2. Clique no componente escolhido para abrir as opções na tela, por exemplo, Slide toggle:  

Três opções vão estar disponíveis, "Overview", "API", "Examples".

3. Importar o módulo do componente para utilizá-lo:  

Clique na aba "API" e copie o código do import, por exemplo: "import {MatSlideToggleModule} from '@angular/material/slide-toggle';"  

Abra o arquivo do módulo que deseja incluir o componente, por exemplo, "app.module.ts", cole o texto no cabeçalho e após, adicione a chamada do importe em @NgModule... imports: [... ]

4. De volta ao site do material.angular, acesse a aba "Overview", ou "Examples" para mais componentes, e escolha um dos componentes fornecidos.

Clique no ícone "View code" para copiar o código do componente escolhido.
Feito isso, abra o arquivo app.component.html e copie o código para exibí-lo na tela.


