### Criando módulos

A criação do módulo permite a organização da aplicação de forma lógica.  
Todos os componentes criados dentro do módulo são visíveis apenas dentro do módulo.  
Para tornar o componente visível a outros módulos, é preciso "exportar" o componente.

```ng generate module nome_do_modulo --routing```

```ng g m nome_do_modulo --routing```

O "--routing" cria, juntamente com o módulo, o componente de roteamento.  
A configuração do roteamento permite orquestrar o que será renderizado na tela e configurar Lazy loading, por exemplo.