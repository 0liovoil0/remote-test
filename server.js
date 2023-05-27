const express = require('express')
const history = require('connect-history-api-fallback');

const app = express()
app.use(history())
app.use(express.static(__dirname+'/static'))

app.get('/person',(req,res)=>{
   res.send({
      name:'张三',
      age:18,
      school:'油专'
   })
})



//端口监听
app.listen(5005,(err)=>{
   if(!err) console.log('服务器启动成功@@@@@@');
})