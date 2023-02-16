const express = require('express');
const {response} = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 5009;
app.get('/index',(req,res)=>{
  let value=req.query.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${req.query.word}`).then(function(response){
      console.log(response);
      return response.json();
    }).then(data=>{
      res.render('index',{data});   
    }).catch((err)=>{
        console.log('err');
    }).finally(()=>{
        console.log('api calling finished');
    })
})
app.post('/index',(req,res)=>{
console.log(req);
res.render('index')
})
app.set('view engine','ejs');
app.use(express.static('public'));
//listen port
app.listen(port,()=>{
console.log(`server listen up ${port}`);
})
