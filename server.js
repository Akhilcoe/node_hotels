// function add(a,b){
//     return a+b;
// }
// var add=function(a,b){
//     return a+b;
// }
// var add=(a,b)=>{return a+b};

// var add=(a,b)=>a+b;

// var result=add(10,5);
// console.log(result);

// (function(){
//     console.log(`prince is added`);
// })()


// function callback(){
//     console.log(`now adding is successful complete`);
// }
// const add=function(a,b,callback)
// {
//     var result=a+b;
//     console.log(`result:` +result);
//     callback();
// }
// //  add(6,500000,function(){
// //     console.log(`add completed`);
// //  });
// add(5,90000,()=>{
//     console.log(`add completed`);
// })
// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi'+ user.username + '!\n',()=>{
//     console.log('file is created');
// });
// console.log(os);

// const notes=require('./notes.js')
// var _ = require('lodash');
// console.log(`server is running`);
// var age=notes.age;
// var result=notes.addnumber(age+18,10);
// console.log(age);
// console.log('result is now '+result);

// var data=["person","person",1,2,1,2,'name','age','2'];
// var filter=_.uniq(data);
// console.log(filter);

// console.log(_.isString(true));

// function calculatecirclearea(radius)
// {
//     return Math.PI*radius**2;
// }
// console.log(calculatecirclearea(5));
// console.log(calculatecirclearea(10));


// function performOperation(num1,num2,operationcallback){
//     return operationcallback(num1,num2);
// }
// function add(x,y){
//     return x+y;
// }
// function subtract(x,y)
// {
//     return x-y;
// }
// function multiply(x,y)
// {
//     return x*y;
// }
// function divide(x,y)
// {
//     return x/y;
// }

// console.log(performOperation(10,5,add));
// console.log(performOperation(10,5,subtract));
// console.log(performOperation(10,5,multiply));
// console.log(performOperation(10,5,divide));


// const fs=require('fs');

// fs.readFile('notes.txt','utf8',(err,data)=>{
//     if(err){
//         console.error("error reading file:",err);
//         return;
//     }
//     console.log(data);
// });

// const os=require('os');
// console.log("total memory",os.totalmem());
// console.log("free memory",os.freemem());
// console.log("platform",os.platform);
// console.log("number of cpu cores",os.cpus().lenght);

// const _ = require('lodash');
// function sumofevennumbers(numbers){
//     const evennumbers=_.filter(numbers,num=>num%2===0);
//     return _.sumBy(evennumbers);
// }
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log(sumofevennumbers(numbers));





const express=require('express');
const app = express()
 const db=require('./db');
 const bodyParser=require('body-parser');
 app.use(bodyParser.json()); //req.body
 
 const MenuItem=require('./models/MenuItem'); 
app.get('/', function(req, res) {
  res.send('Hello Worlds')
})

  // const data=req.body
  // const newPerson=new Person(data);
  // newPerson.save((error,savedPerson)=>{
  //   if(error){
  //     console.log('error saving person',error);
  //     res.status(500).json({error:'Internal server error'})
  //   }
  //   else
  // {
  //   console.log('data saved successfully');
  //   res.status(200).json(savedPerson);
  // }
  // })






const personRoutes=require('./routes/personRoutes');
const menuIemRoutes=require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menuItem',menuIemRoutes);
app.listen(3000,()=>{
    console.log('listening on port 3000')
})