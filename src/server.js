"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("angular2-universal-polyfills");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var compression = require("compression");
// Angular 2
var core_1 = require("@angular/core");
// Angular 2 Universal
var angular2_express_engine_1 = require("angular2-express-engine");
// App
var node_module_1 = require("./node.module");
// enable prod for faster renders
core_1.enableProdMode();
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
// Express View
app.engine('.html', angular2_express_engine_1.createEngine({
    ngModule: node_module_1.MainModule,
    providers: []
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.set('json spaces', 2);
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('dev'));
function cacheControl(req, res, next) {
    // instruct browser to revalidate in 60 seconds
    res.header('Cache-Control', 'max-age=60');
    next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(cacheControl, express.static(path.join(ROOT, 'dist/client'), { index: false }));
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: "http://localhost:" + app.get('port')
    });
}
// Our page routes
exports.routes = [
    'about',
    'home',
    'contact'
];
app.get('/', ngApp);
exports.routes.forEach(function (route) {
    app.get("/" + route, ngApp);
    // Route pattern
    app.get("/" + route + "/*", ngApp);
});
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
// Server
var server = app.listen(app.get('port'), function () {
    console.log("Listening on: http://localhost:" + server.address().port);
});
//# sourceMappingURL=server.js.map