### Adicionando Componentes
---  
#### Uma aplicação Angular é composta, basicamente, por componentes. Cada componente pode conter outros componentes, dando hierarquia aos objetos criados (componentes).  
---
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


