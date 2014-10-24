//https://developer.mozilla.org/en-US/learn/javascript
//http://www.dreamincode.net/forums/topic/109965-javascript-features-you-should-never-use-alternatives/
//Нада ноду запускать и проверять...на глаз не получается...
QUnit.test("структура кода", function(assert) {
    var f = function() {
        var i = 1;
        return i;
    }
    assert.equal(f(), 1, "Должно вернуть 1!");
});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals
var aaa = 1;
QUnit.test("переменные", function(assert) {
    assert.equal(typeof foo, undefined, "foo не объявлено");
    assert.equal(aaa, 1, "ааа объявлено");

    var bbb = 1;
    assert.equal(bbb, 1, "bbb объявлено");
    assert.equal(typeof window['bbb'], 'undefined', "bbb не объявлено в глобальной области видимости (3я лекция)");
    assert.equal(typeof window.bbb, 'undefined', "bbb не объявлено в глобальной области видимости (3я лекция)");
    assert.equal(window.aaa, 1, "aaa объявлено в глобальной области видимости (3я лекция)");

    var firstName = "Doe", lastName = "Doe", age = 30 + 6; //про запятую http://habrahabr.ru/post/116827/
    assert.equal(typeof firstName, "string", "firstName объявлено");
    assert.equal(typeof lastName, "string", "lastName объявлено");
    assert.equal(age, 36, "age is correct");

    var a = new Object();
    //var c.blah = 10;
    assert.equal(a.blah, 10, "must be 10");

    var b = {};
    //b.value.prop = 2;
    //assert.equal(b.value.prop, 2, "must be 2");

    var c = "my string";
    var d = c + " is great!";
    assert.equal(d, "my string" + " is great!", "great!");

    var e = 40;
    var f = e / 8;
    assert.equal({bar: f}["bar"], 5, "is 5");

    var myvar = "my value";

    (function() {
        console.log(myvar); // undefined
        assert.equal(typeof myvar, '5', "should be undefined");
        var myvar = "local value";
    })();
    
    //const prefix = '212'; //es6
    //var coffees = ["French Roast"  "Colombian"  "Kona"];
});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements
QUnit.test("управляющие структуры", function(assert) {

    var j = 3;
    {
        var j = 1;
    }
    assert.equal(j, "3", "i?");

    var i = 0;
    if (j == 3) {
        i = 1;
    }
    else if (j == 1) {
        i = 2;
    }
    else {
        i = 3;
    }
    assert.equal(i, "100", "i?");

    var i = 0;
    //for (i=0; i<100; i++;) console.log(i);
    eval("for (i=0; i<100; i++;) {};");
    assert.equal(i, "100", "i=100");

});

/*
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures
 Стандарт ECMAScript определяет 6 типов данных:
 
 Number (Число)
 String(Строка)
 Boolean (Логический тип)
 Null (Null тип )
 Undefined (Неопределенный тип)
 Object (Объект)
 
 */
QUnit.test("Типы данных", function(assert) {
    //как работает преобразование и типы под капотом 
    //http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
    //
    //"странные" вещи с преобразованиями типов
    //http://www.dreamincode.net/forums/topic/109965-javascript-features-you-should-never-use-alternatives/
    // + http://jswtf.tumblr.com/ + http://wtfjs.com/
    log(typeof true); //"boolean"
    log(typeof Boolean(true)); //"boolean"
    log(typeof new Boolean(true)); //"object"
    log(typeof (new Boolean(true)).valueOf()); //"boolean"

    log(typeof "abc"); //"string"
    log(typeof String("abc")); //"string"
    log(typeof new String("abc")); //"object"
    log(typeof (new String("abc")).valueOf()); //"string"

    log(typeof 123); //"number"
    log(typeof Number(123)); //"number"
    log(typeof new Number(123)); //"object"
    log(typeof (new Number(123)).valueOf()); //"number"

    var a = "";
    !!a; //false

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
    assert.equal(typeof foo, "undefined", "Passed");
    var foo;
    assert.equal(typeof foo, "undefined", "Passed");
    assert.ok(foo === undefined, "Passed?");
    foo = 42;
    assert.equal(typeof foo, "number", "Passed");
    foo = "string";
    assert.equal(typeof foo, "string", "Passed");
    
    var bar = 12;
    assert.equal(typeof bar, "number", "what should it be?");
    bar.value = 34;
    assert.equal(typeof bar, "object", "what should it be?");
    assert.equal(bar, "valueofbar", "what should it be?");
    assert.equal(bar.valueOf(), "valueof bar", "what should it be?");
    
    var myList = ['home', , 'school', , ];
    assert.equal(myList.length, 20, "what should it be?");
    
    var myList2 = new Array(20);
    assert.equal(myList2.length, 0, "what should it be?");
    assert.equal(myList2[0], !undefined, "what should it be?");
});

QUnit.test("структуры данных", function(assert) {
    var o1 = new Object()
    var o2 = {}
    o1.test1 = 5
    o2["test2"] = 5
    var name = 'test1'
    o1[name] = 5
    var o3 = {
        test3: 5,
        bla: true
    }
    assert.equal(typeof foo, "undefined", "Passed");
});

QUnit.test("основы объектно-ориентированного программирования (ООП)", function(assert) {
    assert.equal(typeof foo, "undefined", "Passed");
});

QUnit.test("применение ООП в JavaScript и его особенности с ним", function(assert) {
    assert.equal(typeof foo, "undefined", "Passed");
});
