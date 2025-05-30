//// [tests/cases/compiler/mergedDeclarations2.ts] ////

//// [mergedDeclarations2.ts]
enum Foo {
    b
}
enum Foo {
    a = b
}

module Foo {
    export var x = b
}

//// [mergedDeclarations2.js]
var Foo;
(function (Foo) {
    Foo[Foo["b"] = 0] = "b";
})(Foo || (Foo = {}));
(function (Foo) {
    Foo["a"] = b;
    if (typeof Foo.a !== "string") Foo[Foo.a] = "a";
})(Foo || (Foo = {}));
(function (Foo) {
    Foo.x = b;
})(Foo || (Foo = {}));
