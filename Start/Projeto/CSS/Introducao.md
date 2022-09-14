# Introdução

## O que significa CSS?

* Cascading Style Sheet <!-- folha de estilo em cascata>
* Código para criar estilos no HTML
* HTML é a estrutura, e o CSS é a beleza
* Não é uma linguagem de programação
* É uma linguagem style sheet

# Comentários

* Não ira afetar o seu código
* Ajuda a lembrar blocos de código
* Nunca esqueça de fechar um coment[ario aberto

Comentários começam com '/* e terminam com */'

/* básico */

# Anatomia

'''css

h1 {
	color: blue;
	font-size: 60px;
	background: gray;
}
'''

* Selector
* Declaration
* Properties
+ Property Value

# Selector

Conecta um elemento HTML com o CSS

## Tipos

* Global selector '*'
* Elemnt/Type selector 'h1, h2, p, div'
* Id Selector '#Box, #Container'
* Class Selector '.red, .m-4'
* Attribute selector, Pseudo-class, Pseudo-element, e outros

# Rules

* @import serve para incluir um CSS externo.
* @media são regras condicionais para vários dispositivos.
* @font-face é para colocar fontes externas.
* @keyframes serve para as animations do CSS.

# Shorthand

 /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;

# Funções

* Nome seguido de abre fecha parentesis
* Recebe argumento

## Exemplo

'''css
	@import url"http://urlaqui.com/style.css);
	{
		color: rgb(255, 0, 100);
		width: calc(100% - 10px);
	}
'''	