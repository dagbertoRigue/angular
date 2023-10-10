Para personalizar os temas do Angular Material, consultar o site do Material, https://material.angular.io e acessar via menu a Aba Guide.  
Existem documentações para personalizar sua paleta, (inclusive criar suas próprias paletas), personalizar componentes, etc.  

Para testar, vou usar a paleta Indigo e a paleta Blue:  

A alteração para a visão global do app:  

Abrir o arquivo, na raiz do app: src/styles.scss  

Incluir o código:  
```
@import '@angular/material/theming';
@include mat-core();

$custom-app-primary: mat-palette($mat-blue);
$custom-app-secondary: mat-palette($mat-indigo, A200, A400, A700);
$custom-app-warn: mat-palette($mat-red);

$custom-theme: mat-light-theme($custom-app-primary, $custom-app-secondary, $custom-app-warn);

@include angular-material-theme($custom-theme);
```
Expĺicando cada linha:
```@import '@angular/material/theming';``` - Importa o theming para utilizar as paletas disponíveis, conforme a documentação.  
```@include mat-core();``` - Include padrão da documentação, conforme solicitado pelo Material.  

```$custom-app-primary: mat-palette($mat-blue);``` - Definição das cores padrão, primary, secondary e warn.   
```$custom-app-secondary: mat-palette($mat-indigo,``` - A200, A400, A700); Definição das cores padrão, primary, secondary e warn.    
```$custom-app-warn: mat-palette($mat-red);``` - Definição das cores padrão, primary, secondary e warn.  

É possível fazer um mix de cores da paleta. (como na secondary)  

```$custom-theme: mat-light-theme($custom-app-primary, $custom-app-secondary, $custom-app-warn);``` - define o tema light.   
As cores são mais claras e o background ficará branco. O tema Dark também pode ser configurado.  
  

```@include angular-material-theme($custom-theme);``` - Include conforme solicita a documentação.   

Material Design Color Palettes: https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors  
Material 3: https://m3.material.io/