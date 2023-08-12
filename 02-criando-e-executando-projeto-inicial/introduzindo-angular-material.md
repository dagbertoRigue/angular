### Introduzindo Angular Material ao projeto criado
---  

1. Acesse o site Material (https://material.angular.io/)

2. Use o Angular CLI para configurar seu projeto Angular Material executando o seguinte comando, no terminal :

`ng add @angular/material`  

O comando  "ng add" instalará o Angular Material, o Component Dev Kit (CDK) e o Angular Animations, conforme as opções escolhidas durante a instalação.

3. Conferindo a adição do Angular Material:

Exibir um "slide toggle component" em seu aplicativo e verificar se tudo funciona.

3.1. Abrir o arquivo app.module.ts  
3.2. Incluir o import: `import { MatSlideToggleModule } from '@angular/material/slide-toggle';`  
3.3. Adicionar na chamada: `@NgModule ({
  imports: [
	...
    MatSlideToggleModule,
  ]
})`

3.4. Adicione a <mat-slide-toggle>tag ao app.component.htmlgosto assim:
`<mat-slide-toggle>Toggle me!</mat-slide-toggle>`

Execute o ng serve para visualizar.

