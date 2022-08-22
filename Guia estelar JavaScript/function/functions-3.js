// Function hoisting

sayMyName();

function sayMyName() {
    console.log('duds')
}

//Desta forma acontece o hoisting da função. Hoisting é o termo que explica essa situação, em português ele significa “içamento”, ou “elevação” e foi citado pela primeira vez no ECMAScript® 2015 Language Specification. O Hoisting permite que você execute funções antes das suas declarações. Na prática, inicialmente as declarações de funções são colocadas na memória durante a fase de compilação e, mesmo assim, permanecem no mesmo lugar que estão digitadas.