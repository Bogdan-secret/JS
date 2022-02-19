// function MyArray(){
//     this.length = 10;
//     this.type = 'array';
// }

// MyArray.isMyArray = (arg) => {
//     if (arg instanceof MyArray) {
//         return true;
//     }
//     return false;
// }

// const myArrayPrototype = {
//     whoes:'mine',
//     includes: function () {
//         return this.length;
//     },
//     indexOf: function (arg) {
//         return arg.indexOf();
//     },
//     slice: function() {
//         return this.slice(arg);
//     },
//     push: function(arg) {
//         return this.push(arg);
//     },
//     pop: function(arg) {
//         return this.delete(arg);
//     },
//     concat: function(arg) {
//         return this.concat(arg);
//     },
//     unshift:function(arg) {
//         return this.unshift(arg);
//     },
//     shift:function(arg) {
//         return this.shift(arg);
//     }
// }
// MyArray.prototype = Object.assign(MyArray.prototype, myArrayPrototype);


// console.log(new MyArray());
