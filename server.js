var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title:'article-one|Faiyaz',
    heading:'Article-one',
    date:'Aug 15,2017',
    content:`<p>
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
        </p>
        
        <p>
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
        </p>
        <p>
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
        </p>`
    
},
'article-two':{
title:'article-Two|Faiyaz',
    heading:'Article-Two',
    date:'Aug 15,2017',
    content:`<p>
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
            this is my 1st article.this is my 1st article.this is my 1st article.this is my 1st article.
        </p>`
    
}
};

function createTemplate(data){
    title=data.title;
    date=data.date;
    heading=data.heading;
    content=data.content;

var htmlTemplate=`<html>
    <head>
        <title>${title}</title>
        
            <link href="/ui/style.css"  rel="stylesheet"/>
        
     </head>
    <body>
    <div class="container">
    <div >
        <a href='/'>HOME</a>
    </div>
    <hr/>
    <h3>${heading}</h3>
    <div>
        ${date}
    </div>
    <div>
        ${content}
    </div>
    </div>
</body>
</html>
`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get(':/articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
