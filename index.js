const express = require('express')
const { idiomas,
    titles,
    techs,
    certifications,
    pers_competencias,
    perfil,
    experiencias,
    formacoes,
    info_adicionais
} = require('./dataSource.js')

app = new express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'));
app.listen(3000, function () {
    console.log('server ligado')
})

const params = {
    lang: 'pt',
    idiomas,
    titles,
    techs,
    certifications,
    pers_competencias,
    perfil,
    experiencias,
    formacoes,
    info_adicionais
}

app.get('/', function (request, response) {
    response.render('index', params)
})

// app.get('/en', function(request, response){
//     response.sendFile('index.html', { root: __dirname})
// })