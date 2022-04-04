let express = require('express');
let body_parser = require('body-parser');
let home_router = require('./routes/home_router');
let definition_router = require('./routes/definition_router');
let prefix_router = require('./routes/prefix_router');


let handlebars = require('express-handlebars').create(
    {defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
      }, 
    helpers: {section: function(name,options){
        if(!this._sections) this._sections = {}
        this._sections[name] = options.fn(name);
        return null;
    },
    getTime: function(date,options){
        return date.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
    }},
    partialsDir: __dirname + '/views/partials'}
    );



let app = express();
app.set('port',process.env.PORT || 2000);
app.use(express.static(__dirname + '/public'));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.use('/',home_router);
app.use('/definitions',definition_router);
app.use('/prefixes',prefix_router);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(app.get('port'),function(){
    console.log('Сервер запущен на http://localhost:' + app.get('port') + ' для закрытия нажмите CTRL-C');
}); 