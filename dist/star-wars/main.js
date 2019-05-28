(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_planets_planets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/planets/planets.component */ "./src/app/views/planets/planets.component.ts");
/* harmony import */ var _views_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/planet-details/planet-details.component */ "./src/app/views/planet-details/planet-details.component.ts");





var routes = [
    { path: '', redirectTo: '/planets', pathMatch: 'full' },
    {
        path: 'planets',
        component: _views_planets_planets_component__WEBPACK_IMPORTED_MODULE_3__["PlanetsComponent"]
    },
    {
        path: 'planets/:id',
        component: _views_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_4__["PlanetDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-menu></app-navbar-menu>\n\n<main class=\"bg-light\">\n \n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-left: 150px; }\n  .main-content .language-container {\n    position: fixed;\n    bottom: 2%;\n    z-index: 9999;\n    left: 3%;\n    width: 14%; }\n  .main-content .language-container .language-select {\n      box-shadow: none;\n      -webkit-appearance: none;\n      font-weight: 600;\n      font-size: 15px;\n      color: #24292e;\n      text-align: center;\n      -moz-text-align-last: center;\n           text-align-last: center;\n      padding: 8px 40px 8px 16px;\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ebeced;\n      -o-border-image: initial;\n         border-image: initial;\n      border-radius: 32px;\n      overflow: hidden;\n      background: none white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2liYS9Eb2N1bWVudHMvU3Rhcl93YXJfUHJvamVjdHMvc3dhcGlfYXBwcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBSUksZUFBZTtJQUNmLFVBQVU7SUFDVixhQUFhO0lBQ2IsUUFBUTtJQUNSLFVBQVUsRUFBQTtFQVJkO01BV00sZ0JBQWdCO01BQ2hCLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGNBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQiw0QkFBdUI7V0FBdkIsdUJBQXVCO01BQ3ZCLDBCQUEwQjtNQUMxQixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLHFCQUFnQztNQUNoQyx3QkFBcUI7U0FBckIscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsc0JBQW1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuXG4gIC5sYW5ndWFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbGVmdDogMyU7XG4gICAgd2lkdGg6IDE0JTtcblxuICAgIC5sYW5ndWFnZS1zZWxlY3Qge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogcmdiKDM2LCA0MSwgNDYpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHggNDBweCA4cHggMTZweDtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzNSwgMjM2LCAyMzcpO1xuICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kOiBub25lIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'star-wars';
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.configs.ts":
/*!********************************!*\
  !*** ./src/app/app.configs.ts ***!
  \********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var Config = {
    apiScheme: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_SCHEME,
    apiDomain: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_DOMAIN,
    appEnv: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? 'production' : 'local',
    toApiUrl: function (path) {
        // tslint:disable-next-line:max-line-length
        return this.apiScheme + "://" + this.apiDomain + "/api/" + path;
    },
    // used to test the envionnement
    in_mode: function (env) {
        return env === this.appEnv;
    }
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_planets_planets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/planets/planets.component */ "./src/app/views/planets/planets.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/planet-details/planet-details.component */ "./src/app/views/planet-details/planet-details.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _views_components_navbar_menu_navbar_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/components/navbar-menu/navbar-menu.component */ "./src/app/views/components/navbar-menu/navbar-menu.component.ts");
/* harmony import */ var _pipes_numeral_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/numeral.pipe */ "./src/app/pipes/numeral.pipe.ts");

















// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](httpClient);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _views_planets_planets_component__WEBPACK_IMPORTED_MODULE_10__["PlanetsComponent"],
                _views_planet_details_planet_details_component__WEBPACK_IMPORTED_MODULE_13__["PlanetDetailsComponent"],
                _views_components_navbar_menu_navbar_menu_component__WEBPACK_IMPORTED_MODULE_15__["NavbarMenuComponent"],
                _pipes_numeral_pipe__WEBPACK_IMPORTED_MODULE_16__["NumeralPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"].forRoot(),
                // App modules
                _services_services_module__WEBPACK_IMPORTED_MODULE_11__["ServicesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_14__["AppComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: AppComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentsModule", function() { return AppComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _planet_search_planet_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planet-search/planet-search.component */ "./src/app/components/planet-search/planet-search.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppComponentsModule = /** @class */ (function () {
    function AppComponentsModule() {
    }
    AppComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TypeaheadModule"].forRoot()
            ],
            declarations: [
                _planet_search_planet_search_component__WEBPACK_IMPORTED_MODULE_3__["PlanetSearchComponent"]
            ],
            exports: [
                _planet_search_planet_search_component__WEBPACK_IMPORTED_MODULE_3__["PlanetSearchComponent"]
            ]
        })
    ], AppComponentsModule);
    return AppComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/planet-search/planet-search.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/planet-search/planet-search.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\" class=\"form-group mt-2\">\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">\n        <i class=\"fas fa-search\"></i>\n      </span>\n    </div>\n    <input\n      #searchBox\n      id=\"search-box\"\n      class=\"form-control\"\n      type=\"search\"\n      placeholder=\"Search planets\"\n      (input)=\"search(searchBox.value)\" />\n  </div>\n\n  <div class=\"form-text text-muted\" *ngIf=\"searching\"> Searching ... </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/planet-search/planet-search.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/planet-search/planet-search.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-text {\n  background-color: #ffffff;\n  border: 1px solid #ffffff; }\n\n#search-box {\n  border: 0;\n  height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2liYS9Eb2N1bWVudHMvU3Rhcl93YXJfUHJvamVjdHMvc3dhcGlfYXBwcy9zcmMvYXBwL2NvbXBvbmVudHMvcGxhbmV0LXNlYXJjaC9wbGFuZXQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFNBQVM7RUFDVCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYW5ldC1zZWFyY2gvcGxhbmV0LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cblxuI3NlYXJjaC1ib3gge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogNjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/planet-search/planet-search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/planet-search/planet-search.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlanetSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetSearchComponent", function() { return PlanetSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PlanetSearchComponent = /** @class */ (function () {
    function PlanetSearchComponent(planetService) {
        this.planetService = planetService;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PlanetSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planets$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.planetService.searchPlanets(term); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.searching = false; }));
        this.subscriptions.push(this.planets$.subscribe(function (planets) {
            _this.result.emit(planets);
        }, function (error) {
            console.log('Error occured while searching', error);
        }, function () { return _this.searching = false; }));
    };
    PlanetSearchComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    PlanetSearchComponent.prototype.search = function (value) {
        this.searching = true;
        this.searchTerms.next(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PlanetSearchComponent.prototype, "result", void 0);
    PlanetSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planet-search',
            template: __webpack_require__(/*! ./planet-search.component.html */ "./src/app/components/planet-search/planet-search.component.html"),
            styles: [__webpack_require__(/*! ./planet-search.component.scss */ "./src/app/components/planet-search/planet-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]])
    ], PlanetSearchComponent);
    return PlanetSearchComponent;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Planet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _planet_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet.model */ "./src/app/models/planet.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Planet", function() { return _planet_model__WEBPACK_IMPORTED_MODULE_0__["Planet"]; });




/***/ }),

/***/ "./src/app/models/planet.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/planet.model.ts ***!
  \****************************************/
/*! exports provided: Planet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planet", function() { return Planet; });
/**
 * Represent a planet instance and helps have closed
 * model logics
 */
var Planet = /** @class */ (function () {
    function Planet(data) {
        if (data === void 0) { data = {}; }
        this.build(data);
    }
    Planet.prototype.build = function (data) {
        this.climate = data.climate;
        this.created = data.created;
        this.diameter = data.diameter;
        this.edited = data.edited;
        this.films = data.films;
        this.gravity = data.gravity;
        this.name = data.name;
        this.orbital_period = data.orbital_period;
        this.population = data.population;
        this.residents = data.residents;
        this.rotation_period = data.rotation_period;
        this.surface_water = data.surface_water;
        this.terrain = data.terrain;
        this.url = data.url;
        // test that planet url includes number and use it to retrieve
        // planet details
        if (data.url && /(\d+)/.test(data.url)) {
            var result = /(\d+)/.exec(data.url);
            this.id = result[0];
        }
    };
    return Planet;
}());



/***/ }),

/***/ "./src/app/pipes/numeral.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/numeral.pipe.ts ***!
  \***************************************/
/*! exports provided: NumeralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumeralPipe", function() { return NumeralPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);



var NumeralPipe = /** @class */ (function () {
    function NumeralPipe() {
    }
    /**
     * Form population number to human readable format for
     * less caracteres
     * Eg: K for thousands, M for millions and B for billions
     * @param {sting} value number to format
     * @param args numeral format to used
     */
    NumeralPipe.prototype.transform = function (value, args) {
        return (value === 'unknown') ? 0 : numeral__WEBPACK_IMPORTED_MODULE_2__(value).format(args);
    };
    NumeralPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'numeral'
        })
    ], NumeralPipe);
    return NumeralPipe;
}());



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");


var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    /**
     * Compose query params used for requests
     * @param filters
     */
    BaseService.prototype.toHttpParams = function (filters) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        console.log(filters);
        // tslint:disable-next-line:forin
        for (var key in filters) {
            params = params.set(key, filters[key]);
        }
        return params;
    };
    /**
     * Parse returned response to simple object schema
     * @param data
     * @param key
     * @param klass
     */
    BaseService.prototype.toPaginateRecords = function (data, key, klass) {
        var records = data[key].map(function (d) { return new _models__WEBPACK_IMPORTED_MODULE_1__[klass](d); });
        return {
            records: records,
            meta: {
                count: data.count,
                next: data.next,
                previous: data.previous
            }
        };
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: BaseService, PlanetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"]; });

/* harmony import */ var _planet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planet.service */ "./src/app/services/planet.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanetService", function() { return _planet_service__WEBPACK_IMPORTED_MODULE_1__["PlanetService"]; });





/***/ }),

/***/ "./src/app/services/planet.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/planet.service.ts ***!
  \********************************************/
/*! exports provided: PlanetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetService", function() { return PlanetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.configs */ "./src/app/app.configs.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var PlanetService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlanetService, _super);
    function PlanetService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    /**
     * get all the planets resources
     * @param filters any search params to filter request
     */
    PlanetService.prototype.getPlanets = function (page, filters) {
        var _this = this;
        if (filters === void 0) { filters = {}; }
        var params = this.toHttpParams(Object.assign({ page: page }, filters));
        return this.http.get(_app_configs__WEBPACK_IMPORTED_MODULE_4__["Config"].toApiUrl('planets/'), { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (planets) {
            return _this.toPaginateRecords(planets, 'results', 'Planet');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getPlanets', this.onErrorData())));
    };
    /* GET planets whose name contains search term */
    PlanetService.prototype.searchPlanets = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.onErrorData());
        }
        return this.http.get(_app_configs__WEBPACK_IMPORTED_MODULE_4__["Config"].toApiUrl("planets/?search=" + term))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (planets) {
            return _this.toPaginateRecords(planets, 'results', 'Planet');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('searchPlanets', this.onErrorData())));
    };
    /**
     * Get single planet by id
     * @param id
     */
    PlanetService.prototype.getPlanet = function (id) {
        return this.http.get(_app_configs__WEBPACK_IMPORTED_MODULE_4__["Config"].toApiUrl("planets/" + id + "/"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError("getPlanet id=" + id)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PlanetService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: Should send the error to remote logging infrastructure
            // But for test purpose log to console
            console.error(operation + " failed: " + error.message, error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        };
    };
    /**
     * In case there is an http error, dont't break the app
     * and return an empty result
     */
    PlanetService.prototype.onErrorData = function () {
        var emptyResult = {
            count: 0,
            results: [],
            next: null,
            previous: null
        };
        return this.toPaginateRecords(emptyResult, 'results', 'Planet');
    };
    PlanetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PlanetService);
    return PlanetService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _planet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planet.service */ "./src/app/services/planet.service.ts");




var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                _planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/views/components/navbar-menu/navbar-menu.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/components/navbar-menu/navbar-menu.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white\" id=\"sidebar\">\n  <div class=\"container-fluid\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidebarCollapse\" aria-controls=\"sidebarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <a class=\"navbar-brand text-center mr-0\" href=\"\">\n      <strong>LOGO</strong>\n    </a>\n\n    <div class=\"collapse navbar-collapse\" id=\"sidebarCollapse\">\n     \n      <ul class=\"navbar-nav\">\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link active-menu\" routerLink=\"/planets\">\n            <i class=\"fas fa-globe-americas\"></i>\n            <p>{{ 'planets.planets' | translate }}</p>\n          </a>\n        </li>\n        \n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/components/navbar-menu/navbar-menu.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/components/navbar-menu/navbar-menu.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar[class*=fixed-] {\n  z-index: 1030; }\n\n@media (min-width: 768px) {\n  .navbar-brand {\n    text-align: center;\n    padding: 1rem 0;\n    border-bottom: 1px solid #ddd; }\n  .navbar-vertical.navbar-expand-md {\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    max-width: 150px;\n    padding: 0;\n    overflow-y: auto; }\n    .navbar-vertical.navbar-expand-md.fixed-left {\n      left: 0;\n      border-width: 0 1px 0 0; }\n    .navbar-vertical.navbar-expand-md > [class*=container] {\n      flex-direction: column;\n      align-items: stretch;\n      min-height: 100%;\n      padding-left: 0;\n      padding-right: 0;\n      flex-wrap: nowrap;\n      display: flex;\n      justify-content: space-between; }\n    .navbar-vertical.navbar-expand-md .navbar-collapse {\n      flex: 1;\n      display: flex;\n      flex-direction: column; }\n    .navbar-vertical.navbar-expand-md .navbar-nav {\n      flex-direction: column; }\n      .navbar-vertical.navbar-expand-md .navbar-nav .nav-item {\n        padding: 1rem 0;\n        text-align: center;\n        border-bottom: 1px solid #ddd;\n        width: 100%; }\n        .navbar-vertical.navbar-expand-md .navbar-nav .nav-item a > i {\n          font-size: 40px;\n          line-height: 1.2; }\n        .navbar-vertical.navbar-expand-md .navbar-nav .nav-item a > p {\n          font-weight: 200;\n          margin-bottom: 0; }\n        .navbar-vertical.navbar-expand-md .navbar-nav .nav-item a.active-menu {\n          color: #503bff !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2liYS9Eb2N1bWVudHMvU3Rhcl93YXJfUHJvamVjdHMvc3dhcGlfYXBwcy9zcmMvYXBwL3ZpZXdzL2NvbXBvbmVudHMvbmF2YmFyLW1lbnUvbmF2YmFyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQTZCLEVBQUE7RUFHL0I7SUFFSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7SUFUcEI7TUFZTSxPQUFPO01BQ1AsdUJBQXVCLEVBQUE7SUFiN0I7TUFpQk0sc0JBQXNCO01BQ3RCLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsYUFBYTtNQUNiLDhCQUE4QixFQUFBO0lBeEJwQztNQTRCTSxPQUFPO01BQ1AsYUFBYTtNQUNiLHNCQUFzQixFQUFBO0lBOUI1QjtNQWtDTSxzQkFBc0IsRUFBQTtNQWxDNUI7UUFxQ1EsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsV0FBVyxFQUFBO1FBeENuQjtVQTJDVSxlQUFlO1VBQ2YsZ0JBQWdCLEVBQUE7UUE1QzFCO1VBZ0RVLGdCQUFnQjtVQUNoQixnQkFBZ0IsRUFBQTtRQWpEMUI7VUFvRFUseUJBQXlCLEVBQUEsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb21wb25lbnRzL25hdmJhci1tZW51L25hdmJhci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcltjbGFzcyo9Zml4ZWQtXSB7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB9XG5cbiAgLm5hdmJhci12ZXJ0aWNhbCB7XG4gICAgJi5uYXZiYXItZXhwYW5kLW1kIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICYuZml4ZWQtbGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCAxcHggMCAwO1xuICAgICAgfVxuXG4gICAgICAmPltjbGFzcyo9Y29udGFpbmVyXSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC5uYXZiYXItY29sbGFwc2Uge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgYSA+IGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhID4gcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5hY3RpdmUtbWVudSB7XG4gICAgICAgICAgICBjb2xvcjogIzUwM2JmZiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/components/navbar-menu/navbar-menu.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/components/navbar-menu/navbar-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavbarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarMenuComponent", function() { return NavbarMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarMenuComponent = /** @class */ (function () {
    function NavbarMenuComponent() {
    }
    NavbarMenuComponent.prototype.ngOnInit = function () { };
    NavbarMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-menu',
            template: __webpack_require__(/*! ./navbar-menu.component.html */ "./src/app/views/components/navbar-menu/navbar-menu.component.html"),
            styles: [__webpack_require__(/*! ./navbar-menu.component.scss */ "./src/app/views/components/navbar-menu/navbar-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarMenuComponent);
    return NavbarMenuComponent;
}());



/***/ }),

/***/ "./src/app/views/planet-details/planet-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/planet-details/planet-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-light mt-2\" (click)=\"goBack()\"> < Go Back </button>\n    </div>\n    <div class=\"col-sm-12 col-md-6 mx-auto py-5 mt-5\">\n      <p class=\"loading\" *ngIf=\"loading\"> {{ 'planets.loading' | translate }} </p>\n\n      <div class=\"card shadow-sm\" *ngIf=\"planet\">\n        <div class=\"card-body\">\n          <div class=\"container\" *ngIf=\"planet\">\n            <dl class=\"row\">\n              <dt class=\"col-sm-2 col-md-3\">\n                <b class=\"\">{{ 'planets.name' | translate }}</b>\n              </dt>\n              <dd class=\"col-sm-10 col-md-9\"> {{ planet.name }} </dd>\n\n              <dt class=\"col-sm-2 col-md-3\">\n                <b class=\"\">{{ 'planets.climate' | translate }}</b>\n              </dt>\n              <dd class=\"col-sm-10 col-md-9\"> {{ planet.climate }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.diameter' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.diameter }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.gravity' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.gravity }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.orbital_period' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.orbital_period }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.population' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.population }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.rotation_period' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.rotation_period }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.surface_water' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.surface_water }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.land' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.terrain }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.creation_date' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.created | date:'medium' }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.url' | translate }}</b>\n              </dt>\n              <dd class=\"col-md-9\"> {{ planet.url }} </dd>\n\n              <dt class=\"col-md-3\">\n                <b class=\"\">{{ 'planets.films' | translate }}</b>\n              </dt>\n              <div class=\"col-md-9\">\n                <span *ngFor=\"let sFilms of planet.films\"> {{ sFilms }} </span>\n              </div>\n            </dl>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-12 col-md-3 py-5 other-topics\">\n      <h5>\n        {{ 'planets.similar_planets' | translate }}\n        <small class=\"text-muted\" *ngIf=\"searching\">\n          <i class=\"fas fa-spinner fa-spin\"></i>\n        </small>\n      </h5>\n\n      <div class=\"text-left overflow-single\" *ngFor=\"let sPlanet of suggests | slice:0:5\">\n        <div class=\"p-3\">\n          <a class=\"more-topics\" routerLink=\"/planets/{{ sPlanet.id }}\">\n            <span class=\"more-title\"> {{ sPlanet.name }} </span>\n            (<small class=\"text-muted\">{{ 'planets.population' | translate }}</small>&nbsp;<b> {{ sPlanet.population | numeral:'0 a' }} </b>)\n            <i class=\"fas fa-chevron-right float-right custom-chevron\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/planet-details/planet-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/planet-details/planet-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-bold {\n  font-family: sans-serif;\n  font-weight: 500; }\n\n.other-topics {\n  overflow-y: auto;\n  height: 640px;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06); }\n\n.other-topics .overflow-single {\n    align-items: center !important;\n    margin-bottom: 2rem;\n    background: #fff;\n    text-align: center;\n    border-radius: 0 0 5px 5px;\n    border: 1px solid rgba(0, 0, 0, 0.08);\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);\n    margin: 1rem 0; }\n\n.other-topics .overflow-single .more-topics {\n      color: #503bff; }\n\n.other-topics .overflow-single .more-topics h3 {\n        font-size: 20px;\n        color: #555; }\n\n.other-topics .overflow-single .more-topics .more-title {\n        font-family: sans-serif; }\n\n.other-topics .overflow-single .more-topics .custom-chevron {\n        line-height: 1.5 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2liYS9Eb2N1bWVudHMvU3Rhcl93YXJfUHJvamVjdHMvc3dhcGlfYXBwcy9zcmMvYXBwL3ZpZXdzL3BsYW5ldC1kZXRhaWxzL3BsYW5ldC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUNBQXdDLEVBQUE7O0FBSDFDO0lBTUksOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQ0FBb0M7SUFDcEMseUNBQXdDO0lBQ3hDLGNBQWMsRUFBQTs7QUFibEI7TUFnQk0sY0FBYyxFQUFBOztBQWhCcEI7UUFrQlEsZUFBZTtRQUNmLFdBQVcsRUFBQTs7QUFuQm5CO1FBdUJRLHVCQUF1QixFQUFBOztBQXZCL0I7UUEyQlEsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wbGFuZXQtZGV0YWlscy9wbGFuZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ub3RoZXItdG9waWNzIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiA2NDBweDtcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgLjA2KTtcblxuICAub3ZlcmZsb3ctc2luZ2xlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wOCk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgLjA2KTtcbiAgICBtYXJnaW46IDFyZW0gMDtcblxuICAgIC5tb3JlLXRvcGljcyB7XG4gICAgICBjb2xvcjogIzUwM2JmZjtcbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLm1vcmUtdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgLmN1c3RvbS1jaGV2cm9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/planet-details/planet-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/planet-details/planet-details.component.ts ***!
  \******************************************************************/
/*! exports provided: PlanetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDetailsComponent", function() { return PlanetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var PlanetDetailsComponent = /** @class */ (function () {
    function PlanetDetailsComponent(route, planetService, location) {
        this.route = route;
        this.planetService = planetService;
        this.location = location;
        this.subscriptions = [];
        this.loading = false;
        this.suggests = [];
    }
    PlanetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.route.params.subscribe(function (params) {
            _this.loading = true;
            var id = params['id'];
            _this.planetService.getPlanet(id)
                .subscribe(function (planet) {
                _this.planet = planet;
            }, function (error) {
                console.log('an error has occured', error);
            }, function () {
                _this.loading = false;
                _this.getMorePlanets();
            });
        }));
    };
    PlanetDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.subscriptions = [];
    };
    PlanetDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    /**
     * Get similar planets based on the planet which details use is viewing.
     * First we retrieve planets that contains third first "host planet's" letters
     * and if the result length is less than one, then we search by last two letters
     * in "host planet" name.
     * the goal is to have at least two similares planets.
     *
     * The result shown to user should not contain the "Host planet"
     * @param {boolean} reverse
     */
    PlanetDetailsComponent.prototype.getMorePlanets = function (reverse) {
        var _this = this;
        if (reverse === void 0) { reverse = false; }
        this.searching = true;
        var term = reverse ? this.planet.name.slice(-2) :
            this.planet.name.substring(1, 3);
        this.subscriptions.push(this.planetService.searchPlanets(term)
            .subscribe(function (planets) {
            if (!reverse && (planets.records.length <= 1)) {
                return _this.getMorePlanets(true);
            }
            _this.suggests = planets.records
                .filter(function (item) {
                return item.name !== _this.planet.name;
            });
        }, function (error) {
            console.log('error', error);
        }, function () { return _this.searching = false; }));
    };
    PlanetDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planet-details',
            template: __webpack_require__(/*! ./planet-details.component.html */ "./src/app/views/planet-details/planet-details.component.html"),
            styles: [__webpack_require__(/*! ./planet-details.component.scss */ "./src/app/views/planet-details/planet-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["PlanetService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PlanetDetailsComponent);
    return PlanetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/planets/planets.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/planets/planets.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Search bar -->\n  <div class=\"row sticky-top\">\n    <div class=\"col-12 py-2 bg-light\">\n      <app-planet-search (result)=\"onSearchResult($event)\"></app-planet-search>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-auto px-0 carousel-container\">\n        <carousel>\n          <slide>\n            <img src=\"../../../assets/images/Geonosis_AotC.png\" alt=\"first slide\" class=\"img-fluid\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3 class=\"carousel-title\">Haruun Kal</h3>\n              <p class=\"carousel-short-desc\">{{ 'planets.a_solitary' | translate }}</p>\n            </div>\n          </slide>\n          <slide>\n            <img src=\"../../../assets/images/mustafar-tall.jpg\" alt=\"second slide\" class=\"img-fluid\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3 class=\"carousel-title\">Aleen Minor</h3>\n              <p class=\"carousel-short-desc\">{{ 'planets.a_planet' | translate }}</p>\n            </div>\n          </slide>\n        </carousel>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 my-4 text-center\">\n      <h1 class=\"planete-title pt-2 pb-4\">{{ 'planets.star_wars_planets' | translate }}</h1>\n      <div class=\"fa-2x\" *ngIf=\"loading\">\n        <i class=\"fas fa-spinner fa-spin\"></i>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-start\" *ngIf=\"planets?.records.length\">\n    <div class=\"col-md-3 mb-4\" *ngFor=\"let planet of planets.records\">\n      <a class=\"card shadow bg-white planete-details\" routerLink=\"/planets/{{ planet.id }}\">\n        <div class=\"bg-holder bg-card\"></div>\n        <div class=\"card-body\">\n          <span class=\"start-wars\">Star War's</span>\n          <h3 class=\"card-title\">\n            {{ planet.name }}\n          </h3>\n\n          <div class=\"mb-2 description\">\n            {{ 'planets.population' | translate }}\n            <span class=\"badge badge-light rounded-pill ml-2\"> {{ planet.population | numeral: '0 a' }} </span>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"planets?.meta\">\n    <div class=\"col-md-12 mx-auto\">\n      <pagination\n        [totalItems]=\"planets.meta.count\"\n        [maxSize]=\"10\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(ngModel)]=\"currentPage\"\n        ></pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/planets/planets.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/planets/planets.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none !important; }\n\n.carousel-container .img-fluid {\n  width: 100%;\n  height: auto; }\n\n.carousel-container .carousel-title {\n  font-size: 1.2rem !important; }\n\n.carousel-container .carousel-short-desc {\n  font-size: 25px !important; }\n\n.planete-title {\n  font-size: 36px;\n  padding-top: 15px;\n  font-weight: 200; }\n\n.shadow {\n  box-shadow: rgba(210, 175, 255, 0.25) 0px 8px 32px !important; }\n\n.planete-details {\n  border: 0; }\n\n.planete-details .bg-holder {\n    position: absolute;\n    width: 100%;\n    min-height: 100%;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    will-change: transform,opacity,filter;\n    -webkit-backface-visibility: hidden;\n    z-index: 0; }\n\n.planete-details .bg-card {\n    background-size: contain;\n    background-position: right; }\n\n.planete-details .card-body .start-wars {\n    text-align: center;\n    display: block;\n    color: #b1b1ae;\n    font-size: 12px; }\n\n.planete-details .card-body .card-title {\n    color: #333;\n    font-size: 20px;\n    text-transform: capitalize;\n    text-align: center; }\n\n.planete-details .card-body .description {\n    text-align: center;\n    margin-bottom: 1rem !important;\n    color: #adadaa;\n    font-size: 14px; }\n\n.planete-details .card-body .description .rounded-pill {\n      text-transform: capitalize; }\n\n.planete-details:hover {\n  background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);\n  box-shadow: none;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  transition: all 1s; }\n\n.planete-details:hover .card-body h3, .planete-details:hover .card-body .description {\n    color: white;\n    transition: all 1s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2liYS9Eb2N1bWVudHMvU3Rhcl93YXJfUHJvamVjdHMvc3dhcGlfYXBwcy9zcmMvYXBwL3ZpZXdzL3BsYW5ldHMvcGxhbmV0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUVJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSGhCO0VBT0ksNEJBQTRCLEVBQUE7O0FBUGhDO0VBVUksMEJBQTBCLEVBQUE7O0FBSTlCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw2REFBNkQsRUFBQTs7QUFHL0Q7RUFDRSxTQUFTLEVBQUE7O0FBRFg7SUFJSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLFVBQVUsRUFBQTs7QUFaZDtJQWdCSSx3QkFBd0I7SUFDeEIsMEJBQTBCLEVBQUE7O0FBakI5QjtJQXNCTSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBekJyQjtJQTZCTSxXQUFXO0lBQ1gsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTs7QUFoQ3hCO0lBb0NNLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUF2Q3JCO01BMENRLDBCQUEwQixFQUFBOztBQU1sQztFQUNFLDZEQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFKcEI7SUFRTSxZQUFZO0lBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wbGFuZXRzL3BsYW5ldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJvdXNlbC1jb250YWluZXIge1xuICAuaW1nLWZsdWlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY2Fyb3VzZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcm91c2VsLXNob3J0LWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5wbGFuZXRlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMjEwLCAxNzUsIDI1NSwgMC4yNSkgMHB4IDhweCAzMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wbGFuZXRlLWRldGFpbHMge1xuICBib3JkZXI6IDA7XG5cbiAgLmJnLWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLG9wYWNpdHksZmlsdGVyO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAuYmctY2FyZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB9XG5cbiAgLmNhcmQtYm9keSB7XG4gICAgLnN0YXJ0LXdhcnMge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogI2IxYjFhZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2FkYWRhYTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgLnJvdW5kZWQtcGlsbCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucGxhbmV0ZS1kZXRhaWxzOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgIzUwM2JmZiAwJSwgIzgyOTNmZiAxMDAlKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG5cbiAgLmNhcmQtYm9keSB7XG4gICAgaDMsIC5kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgfVxuICB9XG5cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/planets/planets.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/planets/planets.component.ts ***!
  \****************************************************/
/*! exports provided: PlanetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsComponent", function() { return PlanetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PlanetsComponent = /** @class */ (function () {
    function PlanetsComponent(planetService, activatedRoute) {
        this.planetService = planetService;
        this.activatedRoute = activatedRoute;
        this.loading = false;
        this.subscriptions = [];
    }
    PlanetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (params) {
            var data = _this.parseQueryParams(params);
            _this.currentPage = data.page;
            _this.loadPlanets(data.page, data.filters);
        }));
    };
    PlanetsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.subscriptions = [];
    };
    PlanetsComponent.prototype.loadPlanets = function (page, filters) {
        var _this = this;
        if (filters === void 0) { filters = {}; }
        this.loading = true;
        return this.planetService
            .getPlanets(page, filters)
            .subscribe(function (planets) {
            _this.planets = planets;
        }, (function (error) {
            console.log('An error has occured', error);
        }), function () { return _this.loading = false; });
    };
    PlanetsComponent.prototype.onPageChanged = function (event) {
        this.loadPlanets(event.page);
    };
    PlanetsComponent.prototype.onSearchResult = function (planets) {
        if (!planets.records.length) {
            this.loadPlanets(1);
        }
        else {
            this.planets = planets;
        }
    };
    PlanetsComponent.prototype.parseQueryParams = function (params) {
        // tslint:disable-next-line:radix
        var page = parseInt(params['page']) || 1;
        // tslint:disable-next-line:radix
        var search;
        search = params['search'];
        var filters = search ? { search: search } : null;
        return { page: page, filters: filters };
    };
    PlanetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planets',
            template: __webpack_require__(/*! ./planets.component.html */ "./src/app/views/planets/planets.component.html"),
            styles: [__webpack_require__(/*! ./planets.component.scss */ "./src/app/views/planets/planets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["PlanetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PlanetsComponent);
    return PlanetsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
var environment = {
    production: false,
    API_SCHEME: 'https',
    API_DOMAIN: 'swapi.co',
};
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/iba/Documents/Star_war_Projects/swapi_apps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map