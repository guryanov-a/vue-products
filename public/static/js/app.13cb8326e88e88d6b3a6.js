webpackJsonp([1],{100:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"products"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col col-sm-9"},[i("div",{staticClass:"products__top"},["grid"===t.view?i("div",{staticClass:"products__settings"},[i("ul",{staticClass:"filters filters--main"},t._l(t.sortKinds,function(e){return i("li",{staticClass:"filters__item"},[i("button",{staticClass:"filter filter--main",on:{click:function(i){t.sortProducts(e)}}},[t._v(t._s(e))])])}))]):t._e(),t._v(" "),"list"===t.view?i("div",{staticClass:"products__quantity"},[t._v("Number of products: "+t._s(t.numberOfProducts))]):t._e(),t._v(" "),i("div",{staticClass:"view-toggles"},[i("label",{staticClass:"view-toggles__title"},[t._v("Change view")]),t._v(" "),i("ul",{staticClass:"view-toggles__list"},t._l(t.viewToggles,function(e){return i("li",{staticClass:"view-toggles__item",class:{active:t.isViewActive(e)}},[i("button",{staticClass:"view-toggle",on:{click:function(i){t.changeView(e)}}},[t._v(t._s(e))])])}))]),t._v(" "),"list"===t.view?i("div",{staticClass:"products__quantity"},[t._v("Number of products: "+t._s(t.numberOfProducts))]):t._e()]),t._v(" "),i("main",["grid"===t.view?i("products-grid",{staticClass:"products__list"},t._l(t.products,function(t){return i("product-grid",{key:t.id,staticClass:"products__item",attrs:{image:t.image,title:t.title}})})):t._e(),t._v(" "),"list"===t.view?i("products-list",{staticClass:"products__list"},t._l(t.products,function(e){return e.isFiltered?i("product-list",{key:e.id,staticClass:"products__item",attrs:{image:e.image,title:e.title,description:e.description,tags:e.tags}}):t._e()})):t._e()],1)]),t._v(" "),i("div",{staticClass:"col col-sm-3"},[i("aside",[i("div",{staticClass:"products__filters filters filters--aside"},[i("h2",{staticClass:"filters__title"},[t._v("Sort by:")]),t._v(" "),t._l(t.filters,function(e){return i("div",{staticClass:"filter-group"},[i("h3",{staticClass:"filter-group__title"},[t._v(t._s(e.name))]),t._v(" "),i("ul",{staticClass:"filter-list"},t._l(e.items,function(e){return i("li",{staticClass:"filter-list__item filter"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:e.isActive},on:{click:function(i){t.toggleFilter(e)}}}),i("label",[t._v(t._s(e.name))])])}))])})],2)])])])])])},a=[];e.a={render:s,staticRenderFns:a}},101:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("products")],1)},a=[];e.a={render:s,staticRenderFns:a}},102:function(t,e,i){"use strict";var s=i(27),a=i(103);s.a.use(a.a);var r=new a.a.Store({state:{products:[{id:1,title:"Barracuda rolling shutter",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.",link:"http://google.com",image:"http://via.placeholder.com/240x255",popularity:201,releaseDate:"2015-10-01",tags:[{name:"types",items:["roll shutter","insect screen","garage screen"]},{name:"openings",items:["doors","windows","mall","skylight"]},{name:"applications",items:["insect","shading"]}],isFiltered:!0},{id:2,title:"Magnum rolling shutter",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.",link:"http://google.com",image:"http://via.placeholder.com/240x255",popularity:50,releaseDate:"2016-10-05",tags:[{name:"types",items:["accordion shutter","security grill","roll screen"]},{name:"openings",items:["windows","balcony"]},{name:"applications",items:["insect","energy savings"]}],isFiltered:!0},{id:3,title:"Bertha-57 rolling shutter",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.",link:"http://google.com",image:"http://via.placeholder.com/240x255",popularity:300,releaseDate:"2016-10-07",tags:[{name:"types",items:["roll shutter","garage screen"]},{name:"openings",items:["doors","glass roofs"]},{name:"applications",items:["hurricane","kiosk"]}],isFiltered:!0},{id:4,title:"RC-37 rolling shutter",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.",link:"http://google.com",image:"http://via.placeholder.com/240x255",popularity:1,releaseDate:"2016-10-06",tags:[{name:"types",items:["roll shutter","accordion shutter"]},{name:"openings",items:["doors","windows"]},{name:"applications",items:["hurricane","insect"]}],isFiltered:!0},{id:5,title:"RC-42 rolling shutter",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.",link:"http://google.com",image:"http://via.placeholder.com/240x255",popularity:0,releaseDate:"2016-10-08",tags:[{name:"types",items:["roll shutter","accordion shutter"]},{name:"openings",items:["doors","windows"]},{name:"applications",items:["hurricane","insect"]}],isFiltered:!0}],filteredProducts:[],filters:[{name:"types",items:[{name:"roll shutter",isActive:!1},{name:"accordion shutter",isActive:!1},{name:"security grill",isActive:!1},{name:"roll screen",isActive:!1},{name:"insect screen",isActive:!1},{name:"garage screen",isActive:!1}]},{name:"openings",items:[{name:"doors",isActive:!1},{name:"windows",isActive:!1},{name:"glass roofs",isActive:!1},{name:"vans",isActive:!1},{name:"skylight",isActive:!1},{name:"garage",isActive:!1},{name:"kiosk",isActive:!1},{name:"mall",isActive:!1},{name:"balcony",isActive:!1}]},{name:"applications",items:[{name:"hurricane",isActive:!1},{name:"insect",isActive:!1},{name:"security",isActive:!1},{name:"privacy",isActive:!1},{name:"energy savings",isActive:!1},{name:"shading",isActive:!1}]}],sortKinds:["Newest","A-Z","Popular"],viewToggles:["Grid","List"],view:"grid"},mutations:{changeView:function(t,e){t.view=e},filterProduct:function(t,e){t.filteredProducts=e},updateProducts:function(t,e){t.products=e}}});e.a=r},39:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(27),a=i(40),r=i(102);s.a.config.productionTip=!1,new s.a({el:"#app",store:r.a,template:"<App/>",components:{App:a.a}})},40:function(t,e,i){"use strict";function s(t){i(41)}var a=i(43),r=i(101),n=i(0),o=s,c=n(a.a,r.a,o,null,null);e.a=c.exports},41:function(t,e){},43:function(t,e,i){"use strict";var s=i(44);e.a={name:"app",components:{Products:s.a}}},44:function(t,e,i){"use strict";function s(t){i(45)}var a=i(46),r=i(100),n=i(0),o=s,c=n(a.a,r.a,o,null,null);e.a=c.exports},45:function(t,e){},46:function(t,e,i){"use strict";var s=i(47),a=i.n(s),r=i(79),n=(i.n(r),i(81)),o=i(84),c=i(88),l=i(91),u=i(94),m=i(97);e.a={name:"products",components:{ProductsGrid:n.a,ProductGrid:o.a,ProductsList:c.a,ProductList:l.a,ProductsFilters:u.a,ProductsSettings:m.a},computed:{products:function(){return this.$store.state.filteredProducts},sortKinds:function(){return this.$store.state.sortKinds},viewToggles:function(){return this.$store.state.viewToggles},filters:function(){return this.$store.state.filters},view:function(){return this.$store.state.view},numberOfProducts:function(){return this.$store.state.products.length},activeFilters:function(){var t=[];return this.$store.state.filters.forEach(function(e){var i={},s=[];e.items.forEach(function(t){t.isActive&&s.push(t)}),s.length&&(i.name=e.name,i.items=s,t.push(i))}),t}},methods:{isViewActive:function(t){return t.toLowerCase()===this.view},changeView:function(t){this.$store.commit("changeView",t.toLowerCase())},filterProducts:function(){var t=this.$store.state.products,e=this.activeFilters,i=[];t.forEach(function(t){var s=t.tags,n=!1;e.length||(n=!0),(n=e.every(function(t){for(var e=0;e<s.length;e+=1)if(t.name===s[e].name){var i=function(){var i=s[e].items;return{v:t.items.every(function(t){return r.includes(i,t.name)})}}();if("object"===(void 0===i?"undefined":a.a(i)))return i.v}return!1}))&&i.push(t)}),this.$store.commit("filterProduct",i)},toggleFilter:function(t){t.isActive=!t.isActive,this.filterProducts()},sortProducts:function(t){switch(t){case"Newest":this.sortByNewest();break;case"A-Z":this.sortByAlphabet();break;case"Popular":this.sortByPopularity();break;default:console.log("sortProducts: unexpected case")}this.filterProducts()},sortByNewest:function(){var t=this.$store.state.products;t.sort(function(t,e){var i=new Date(t.releaseDate).getTime(),s=new Date(e.releaseDate).getTime();return i>s?-1:i<s?1:0}),this.$store.commit("updateProducts",t)},sortByAlphabet:function(){var t=this.$store.state.products;t.sort(function(t,e){return t.title<e.title?-1:t.title>e.title?1:0}),this.$store.commit("updateProducts",t)},sortByPopularity:function(){var t=this.$store.state.products;t.sort(function(t,e){return t.popularity>e.popularity?-1:t.popularity<e.popularity?1:0}),this.$store.commit("updateProducts",t)}},created:function(){this.filterProducts()}}},81:function(t,e,i){"use strict";var s=i(82),a=i(83),r=i(0),n=r(s.a,a.a,null,null,null);e.a=n.exports},82:function(t,e,i){"use strict";e.a={name:"items-list"}},83:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"items-grid"},[i("div",{staticClass:"row"},[t._t("default")],2)])},a=[];e.a={render:s,staticRenderFns:a}},84:function(t,e,i){"use strict";function s(t){i(85)}var a=i(86),r=i(87),n=i(0),o=s,c=n(a.a,r.a,o,"data-v-0490c997",null);e.a=c.exports},85:function(t,e){},86:function(t,e,i){"use strict";e.a={name:"item-grid",props:["image","title"]}},87:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col col-sm-4"},[i("div",{staticClass:"item item--grid"},[i("div",{staticClass:"item__image-wrapper"},[i("img",{staticClass:"item__image",attrs:{src:t.image}})]),t._v(" "),i("h2",{staticClass:"item__title"},[t._v("\n      "+t._s(t.title)+"\n    ")])])])},a=[];e.a={render:s,staticRenderFns:a}},88:function(t,e,i){"use strict";var s=i(89),a=i(90),r=i(0),n=r(s.a,a.a,null,null,null);e.a=n.exports},89:function(t,e,i){"use strict";e.a={name:"items-list"}},90:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"items-list"},[i("div",{staticClass:"row"},[t._t("default")],2)])},a=[];e.a={render:s,staticRenderFns:a}},91:function(t,e,i){"use strict";var s=i(92),a=i(93),r=i(0),n=r(s.a,a.a,null,null,null);e.a=n.exports},92:function(t,e,i){"use strict";e.a={name:"item-list",props:["image","title","description","tags"]}},93:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("div",{staticClass:"item item--list"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col col-sm-4"},[i("div",{staticClass:"item__image"},[i("img",{attrs:{src:t.image}})])]),t._v(" "),i("div",{staticClass:"col col-sm-4"},[i("h2",{staticClass:"item__title"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),i("div",{staticClass:"item__description"},[t._v("\n          "+t._s(t.description)+"\n        ")])]),t._v(" "),i("div",{staticClass:"col col-sm-4"},[i("div",{staticClass:"item__tags"},t._l(t.tags,function(e){return"openings"===e.name||"applications"===e.name?i("ul",{staticClass:"item__tags-group"},t._l(e.items,function(e){return i("li",{staticClass:"item__tag"},[t._v("\n              "+t._s(e)+"\n            ")])})):t._e()}))])])])])},a=[];e.a={render:s,staticRenderFns:a}},94:function(t,e,i){"use strict";var s=i(95),a=i(96),r=i(0),n=r(s.a,a.a,null,null,null);e.a=n.exports},95:function(t,e,i){"use strict";e.a={name:"filters"}},96:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"filters"})},a=[];e.a={render:s,staticRenderFns:a}},97:function(t,e,i){"use strict";var s=i(98),a=i(99),r=i(0),n=r(s.a,a.a,null,null,null);e.a=n.exports},98:function(t,e,i){"use strict";e.a={name:"settings"}},99:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"settings"})},a=[];e.a={render:s,staticRenderFns:a}}},[39]);
//# sourceMappingURL=app.13cb8326e88e88d6b3a6.js.map