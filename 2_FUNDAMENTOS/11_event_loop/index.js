function a() {
    console.log("Executando a()");
}
function b() {
    console.log("Executando b()");
}
function c() {
    console.log("Executando c()");
    a();
    b();
}

/* as funções vão ser chamadas conforme suas ordens de chamadas
*/
c();