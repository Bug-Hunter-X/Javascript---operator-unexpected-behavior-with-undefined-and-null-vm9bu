function foo(a,b){return a+b;}console.log(foo(1,undefined));//NaNconsole.log(foo(1,null));//1console.log(foo(undefined,1));//NaNconsole.log(foo(null,1));//1