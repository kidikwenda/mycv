express = require('express')
app = new express()


app.use(express.static(__dirname + '/'));
app.listen(3000, function(){
    console.log('server ligado')
})

app.get('/', function(request, response){
    response.sendFile('index.html', { root: __dirname})
})

app.get('/en', function(request, response){
    response.sendFile('index.html', { root: __dirname})
})