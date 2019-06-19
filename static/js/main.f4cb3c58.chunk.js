(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},36:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),i=a.n(c),s=a(2),o=a(3),l=a(5),u=a(4),p=a(6),m=a(69),h=a(71),f=a(70),d=a(9),v=a(7),E=a.n(v),g=a(12),b=a(33),y=a.n(b).a.create({baseURL:"https://api.themoviedb.org/3/"}),_="9f39dd9c4f8c9231614049d653d261d6",O=function(){return{type:"ITEMS_LOADING"}},N=a(68),j=(a(15),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addToFavorite=function(e){var t=JSON.parse(localStorage.getItem("favoriteMovies"))||[];-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("favoriteMovies",JSON.stringify(t))),console.log(JSON.parse(localStorage.getItem("favoriteMovies")))},a.addToWatchList=function(e){var t=JSON.parse(localStorage.getItem("watchList"))||[];-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("watchList",JSON.stringify(t))),console.log(JSON.parse(localStorage.getItem("watchList")))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movie-container"},this.props.data.map(function(t){return r.a.createElement("div",{className:"poster"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"visible"},r.a.createElement("div",{className:"add-btn"},r.a.createElement("i",{className:"fas fa-heart",onClick:function(){return e.addToFavorite(t.id+"")}}),r.a.createElement("i",{className:"far fa-eye",onClick:function(){return e.addToWatchList(t.id+"")}})),r.a.createElement("div",{className:"poster_details"},r.a.createElement("h2",null,t.title),r.a.createElement("h2",null,t.vote_average,"\xa0",r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement(N.a,{to:"/movie/details/".concat(t.id)},"Details ")))),r.a.createElement("div",{className:"poster_image"},r.a.createElement("img",{key:t.id,src:"".concat("https://image.tmdb.org/t/p/w342/").concat(t.poster_path),alt:"poster"})))}))}}]),t}(n.Component)),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cast-container"},this.props.data.filter(function(e,t){return t<8}).map(function(e){return r.a.createElement(N.a,{to:"/person/".concat(e.id)},r.a.createElement("span",{className:"cast-container_picture"},r.a.createElement("img",{key:e.id,className:"cast-container_picture",src:"".concat("https://image.tmdb.org/t/p/w45/").concat(e.profile_path),alt:"cast"})))}))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).fetch=function(){a.props.fetchMovieDetails(a.props.match.params.id),a.props.fetchSimilarMovies(a.props.match.params.id),a.props.fetchMovieCast(a.props.match.params.id),a.props.fetchMovieTrailer(a.props.match.params.id)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&(this.fetch(),window.scrollTo(0,0))}},{key:"componentWillMount",value:function(){this.fetch(),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return console.log(this.props.detail),null!==this.props.detail&&null!==this.props.similar&&null!==this.props.cast&&null!==this.props.trailer?r.a.createElement("div",null,r.a.createElement("section",{className:"movie-details-grid"},r.a.createElement("div",{className:"movie-details-grid_poster"},r.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w342/").concat(this.props.detail.poster_path)})),r.a.createElement("div",{className:"movie-details-grid_info"},r.a.createElement("h1",null,this.props.detail.title),r.a.createElement("h2",null,this.props.detail.tagline),r.a.createElement("h3",null,this.props.detail.vote_average," ",r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("span",{className:"right"},this.props.detail.spoken_languages[0].name," \xa0/\xa0",this.props.detail.runtime," minutes \xa0/ \xa0",this.props.detail.release_date)),r.a.createElement("h3",null,"Genres"),this.props.detail.genres.map(function(e){return r.a.createElement(N.a,{to:"/genre/".concat(e.id)},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 ",e.name))}),r.a.createElement("h3",null,"Overview"),r.a.createElement("h3",null,this.props.detail.overview," "),r.a.createElement("h3",null,"Cast"),r.a.createElement(w,{data:this.props.cast}),this.props.detail.hasOwnProperty("homepage")&&null!=this.props.detail.homepage?r.a.createElement("a",{className:"button",href:this.props.detail.homepage,target:"_blank"},r.a.createElement("i",{className:"fas fa-link"}),"\xa0 Website"):null,this.props.detail.hasOwnProperty("imdb_id")?r.a.createElement("a",{className:"button",href:"https://www.imdb.com/title/".concat(this.props.detail.imdb_id),target:"_blank"},r.a.createElement("i",{className:"fab fa-imdb"}),"\xa0IMDb"):null,this.props.detail.hasOwnProperty("trailer")?r.a.createElement("a",{className:"button",href:"https://www.youtube.com/watch?v=".concat(this.props.trailer[0].key),target:"_blank"},r.a.createElement("i",{className:"fab fa-youtube"}),"\xa0Trailer"):null,r.a.createElement("a",{className:"button back",onClick:function(){return e.props.history.goBack()}},r.a.createElement("i",{className:"fas fa-arrow-left"}),"\xa0Back"))),r.a.createElement("section",null,r.a.createElement("h1",null,"Similiar Movies"),r.a.createElement(j,{data:this.props.similar}))):null}}]),t}(n.Component),k=Object(d.b)(function(e){return{detail:e.movie.movieDetails,similar:e.movie.similarMovies,cast:e.movie.movieCast,trailer:e.movie.movieTrailer}},{fetchMovieDetails:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("movie/".concat(e,"?api_key=").concat(_,"&language=en-US&page=1"));case 2:n=t.sent,a({type:"FETCH_MOVIE",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchSimilarMovies:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("movie/".concat(e,"/similar?api_key=").concat(_,"&language=en-US&page=1"));case 2:n=t.sent,a({type:"FETCH_SIMILAR_MOVIES",payload:n.data.results});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchMovieCast:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("movie/".concat(e,"/videos?api_key=").concat(_,"&language=en-US"));case 2:n=t.sent,a({type:"FETCH_MOVIE_TRAILER",payload:n.data.results});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchMovieTrailer:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("movie/".concat(e,"/credits?api_key=").concat(_));case 2:n=t.sent,a({type:"FETCH_MOVIE_CAST",payload:n.data.cast});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(M),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).fetch=function(){a.props.fetchMoviesByGenre(a.props.match.params.genreID),a.props.fetchGenreList()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.match.params.genreID!==e.match.params.genreID&&this.fetch()}},{key:"componentWillMount",value:function(){this.fetch()}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return console.log(this.props.results),console.log(this.props.genreList),this.props.results.length>0&&this.props.genreList.length>0?r.a.createElement("div",null,this.props.genreList.filter(function(t){return t.id==e.props.match.params.genreID}).map(function(e){return r.a.createElement("h1",null,e.name,"\xa0Movies")}),r.a.createElement(j,{data:this.props.results})):null}}]),t}(n.Component),S=Object(d.b)(function(e){return{results:e.genre.results,genreList:e.genre.genreList}},{fetchMoviesByGenre:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("discover/movie?api_key=".concat(_,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=").concat(e));case 2:n=t.sent,a({type:"FETCH_MOVIES_BY_GENRE",payload:n.data.results});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchGenreList:function(){return function(){var e=Object(g.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("genre/movie/list?api_key=".concat(_,"&language=en-US"));case 2:a=e.sent,t({type:"FETCH_GENRE_LIST",payload:a.data.genres});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(T),C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchSearchResults(this.props.match.params.query)}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return console.log(this.props.results),this.props.results.length>0?r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Search Results For ",this.props.match.params.query),r.a.createElement(j,{data:this.props.results})):null}}]),t}(n.Component),A=Object(d.b)(function(e){return{results:e.search.searchResults}},{fetchSearchResults:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.length>1)){t.next=7;break}return t.next=3,y.get("search/movie?api_key=".concat(_,"&query=").concat(e,"&page=1"));case 3:n=t.sent,a({type:"FETCH_SEARCH_RESULTS",payload:n.data.results}),t.next=8;break;case 7:a({type:"FETCH_SEARCH_RESULTS",payload:null});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(C),I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("a",{href:"https://www.themoviedb.org/"},r.a.createElement("img",{src:"/MovieDB/logo.png",id:"logo"})),r.a.createElement("h3",{className:"pushedIn"},"Browse"),r.a.createElement("ul",{className:"menu_list "},r.a.createElement(N.a,{to:"/"},r.a.createElement("li",{className:"menu_list_item menu_list_button",onClick:this.props.changeToPopular},r.a.createElement("i",{className:"fas fa-heart"}),"\xa0Popular")),r.a.createElement(N.a,{to:"/HighestRated"},r.a.createElement("li",{className:"menu_list_item menu_list_button",onClick:this.props.changeToTopRated},r.a.createElement("i",{className:"far fa-chart-bar"}),"\xa0Highest Rated")),r.a.createElement(N.a,{to:"/NowPlaying"},r.a.createElement("li",{className:"menu_list_item menu_list_button",onClick:this.props.changeToNowPlaying},r.a.createElement("i",{className:"fas fa-play"})," \xa0Now Playing"))),r.a.createElement("h3",{className:"pushedIn"},"Genres"),r.a.createElement("ul",{className:"menu_list"},r.a.createElement(N.a,{to:"/genre/28"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Action")),r.a.createElement(N.a,{to:"/genre/12"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Adventure")),r.a.createElement(N.a,{to:"/genre/16"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Animation")),r.a.createElement(N.a,{to:"/genre/35"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Comedy")),r.a.createElement(N.a,{to:"/genre/80"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Crime")),r.a.createElement(N.a,{to:"/genre/99"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Documentary")),r.a.createElement(N.a,{to:"/genre/18"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Drama")),r.a.createElement(N.a,{to:"/genre/10751"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Family")),r.a.createElement(N.a,{to:"/genre/14"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Fantasy")),r.a.createElement(N.a,{to:"/genre/36"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 History")),r.a.createElement(N.a,{to:"/genre/27"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Horror")),r.a.createElement(N.a,{to:"/genre/10402"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Music")),r.a.createElement(N.a,{to:"/genre/9648"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Mystery")),r.a.createElement(N.a,{to:"/genre/10749"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Romance")),r.a.createElement(N.a,{to:"/genre/878"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Science Fiction")),r.a.createElement(N.a,{to:"/genre/10770"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 TV Movie")),r.a.createElement(N.a,{to:"/genre/53"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Thriller")),r.a.createElement(N.a,{to:"/genre/10752"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 War")),r.a.createElement(N.a,{to:"/genre/37"},r.a.createElement("li",{className:"menu_list_item menu_list_button"},r.a.createElement("i",{className:"far fa-dot-circle"}),"\xa0 Western"))))}}]),t}(n.Component),R=Object(d.b)(function(e){return{display:e.display.onMovieDisplay}},{changeToNowPlaying:function(){return{type:"NOW_PLAYING",payload:"NOW_PLAYING"}},changeToPopular:function(){return{type:"POPULAR",payload:"POPULAR"}},changeToTopRated:function(){return{type:"TOP_RATED",payload:"TOP_RATED"}}})(I),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentWillMount",value:function(){this.props.fetchPopularMovies()}},{key:"render",value:function(){return console.log(this.props.popularMovies),this.props.popularMovies.length>0?r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"Popular Movies"),r.a.createElement(j,{data:this.props.popularMovies})):null}}]),t}(n.Component),D=Object(d.b)(function(e){return{popularMovies:e.movie.popularMovies}},{fetchPopularMovies:function(){return function(){var e=Object(g.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("movie/popular?api_key=".concat(_,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"POPULAR_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(L),P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentWillMount",value:function(){this.props.fetchPlayingMovies()}},{key:"render",value:function(){return console.log(this.props.playingMovies),this.props.playingMovies.length>0?r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"Now Playing Movies"),r.a.createElement(j,{data:this.props.playingMovies})):null}}]),t}(n.Component),x=Object(d.b)(function(e){return{playingMovies:e.movie.playingMovies}},{fetchPlayingMovies:function(){return function(){var e=Object(g.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(O()),e.next=3,y.get("movie/now_playing?api_key=".concat(_,"&language=en-US&page=1"));case 3:a=e.sent,t({type:"PLAYING_MOVIES",payload:a.data.results});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(P),F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentWillMount",value:function(){this.props.fetchTopRatedMovies()}},{key:"render",value:function(){return console.log(this.props.highestRatedMovies),this.props.highestRatedMovies.length>0?r.a.createElement("section",null,r.a.createElement("h1",null,"Highest Rated Movies"),r.a.createElement(j,{data:this.props.highestRatedMovies})):null}}]),t}(n.Component),H=Object(d.b)(function(e){return{highestRatedMovies:e.movie.ratedMovies}},{fetchTopRatedMovies:function(){return function(){var e=Object(g.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("movie/top_rated?api_key=".concat(_,"&language=en-US&page=1"));case 2:a=e.sent,t({type:"RATED_MOVIES",payload:a.data.results});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(F),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).fetch=function(){a.props.fetchCastMemberDetails(a.props.match.params.id),a.props.fetchCastMemberAppearances(a.props.match.params.id)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&(this.fetch(),window.scrollTo(0,0))}},{key:"componentWillMount",value:function(){this.fetch(),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return console.log(this.props.detail),null!==this.props.detail&&null!==this.props.appearances?r.a.createElement("div",null,r.a.createElement("section",{className:"movie-details-grid"},r.a.createElement("div",{className:"movie-details-grid_poster"},r.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w342/").concat(this.props.detail.profile_path)})),r.a.createElement("div",{className:"movie-details-grid_info"},r.a.createElement("h1",null,this.props.detail.name),r.a.createElement("h2",null,"Biography"),r.a.createElement("h3",{style:{marginBottom:"2rem"}},this.props.detail.biography),this.props.detail.hasOwnProperty("imdb_id")?r.a.createElement("a",{className:"button",href:"https://www.imdb.com/name/".concat(this.props.detail.imdb_id),target:"_blank"},r.a.createElement("i",{className:"fab fa-imdb"}),"\xa0IMDb"):null,r.a.createElement("a",{className:"button back",onClick:function(){return e.props.history.goBack()}},r.a.createElement("i",{className:"fas fa-arrow-left"}),"\xa0Back"))),r.a.createElement("section",null,r.a.createElement("h1",null,"Appears In"),r.a.createElement(j,{data:this.props.appearances}))):null}}]),t}(n.Component),V=Object(d.b)(function(e){return{detail:e.cast.details,appearances:e.cast.movieAppearances}},{fetchCastMemberAppearances:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("person/".concat(e,"/movie_credits?api_key=").concat(_));case 2:n=t.sent,a({type:"FETCH_CASTMEMBER_APPEARANCES",payload:n.data.cast});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchCastMemberDetails:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("person/".concat(e,"?api_key=").concat(_));case 2:n=t.sent,a({type:"FETCH_CASTMEMBER_DETAILS",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(U),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchValue:""},a.handleSearchinput=function(e){a.setState({searchValue:e.target.value})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{action:"javascript:void(0);"},r.a.createElement("input",{onChange:this.handleSearchinput,type:"search"}),r.a.createElement(N.a,{to:"/search/results/".concat(this.state.searchValue)},r.a.createElement("i",{className:"fa fa-search"}))))}}]),t}(n.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"top_menu"},r.a.createElement(W,null),r.a.createElement(N.a,{to:"/favorites"},r.a.createElement("button",{className:"top-button"},"favorite movies")),r.a.createElement(N.a,{to:"/watchlist"},r.a.createElement("button",{className:"top-button"},"Watchlist")))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).fetch=function(){var e=JSON.parse(localStorage.getItem("favoriteMovies"))||[];a.props.fetchFavorites(e)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.match.path!==e.match.path&&(this.fetch(),window.scrollTo(0,0))}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("h1",null,"Favorite Movies"),this.props.favorites&&r.a.createElement(j,{data:this.props.favorites}))}}]),t}(n.Component),J=Object(d.b)(function(e){return{favorites:e.movie.favorites}},{fetchFavorites:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],Promise.all(e.map(function(e){return y.get("movie/".concat(e,"?api_key=").concat(_,"&language=en-US&page=1"))})).then(function(e){e.forEach(function(e){n.push(e.data)})}),a({type:"FETCH_FAVORITES",payload:n});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(G),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).fetch=function(){var e=JSON.parse(localStorage.getItem("watchList"))||[];a.props.fetchWatchList(e)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.match.path!==e.match.path&&(this.fetch(),window.scrollTo(0,0))}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("h1",null,"Watch List"),this.props.watchList&&r.a.createElement(j,{data:this.props.watchList}))}}]),t}(n.Component),q=Object(d.b)(function(e){return{watchList:e.movie.watchList}},{fetchWatchList:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],Promise.all(e.map(function(e){return y.get("movie/".concat(e,"?api_key=").concat(_,"&language=en-US&page=1"))})).then(function(e){e.forEach(function(e){n.push(e.data)})}),a({type:"FETCH_WATCHLIST",payload:n});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(Y),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/MovieDB/"},r.a.createElement("section",{className:"home-grid"},r.a.createElement("div",{className:"nav"},r.a.createElement(R,null)),r.a.createElement(h.a,null,r.a.createElement("div",{className:"content"},r.a.createElement(B,null),r.a.createElement(f.a,{exact:!0,path:"/",component:D}),r.a.createElement(f.a,{exact:!0,path:"/HighestRated",component:H}),r.a.createElement(f.a,{exact:!0,path:"/NowPlaying",component:x}),r.a.createElement(f.a,{exact:!0,path:"/movie/details/:id",component:k}),r.a.createElement(f.a,{exact:!0,path:"/favorites",component:J}),r.a.createElement(f.a,{exact:!0,path:"/watchlist",component:q}),r.a.createElement(f.a,{exact:!0,path:"/search/results/:query",component:A}),r.a.createElement(f.a,{exact:!0,path:"/genre/:genreID",component:S}),r.a.createElement(f.a,{exact:!0,path:"/person/:id",component:V})))))}}]),t}(n.Component),K=a(17),Q=a(8),X={playingMovies:[],popularMovies:[],ratedMovies:[],similarMovies:[],favorites:null,watchList:null,movieDetails:null,movieCast:null,movieTrailer:null,loading:!1},Z={results:[],genreList:[]},$={searchResults:[]},ee={details:null,movieAppearances:null},te={currentDisplay:"POPULAR"},ae=Object(K.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYING_MOVIES":return Object(Q.a)({},e,{playingMovies:t.payload,loading:!1});case"POPULAR_MOVIES":return Object(Q.a)({},e,{popularMovies:t.payload});case"RATED_MOVIES":return Object(Q.a)({},e,{ratedMovies:t.payload});case"FETCH_SIMILAR_MOVIES":return Object(Q.a)({},e,{similarMovies:t.payload});case"FETCH_MOVIE":return Object(Q.a)({},e,{movieDetails:t.payload});case"FETCH_MOVIE_CAST":return Object(Q.a)({},e,{movieCast:t.payload});case"FETCH_MOVIE_TRAILER":return Object(Q.a)({},e,{movieTrailer:t.payload});case"FETCH_FAVORITES":return Object(Q.a)({},e,{favorites:t.payload});case"FETCH_WATCHLIST":return Object(Q.a)({},e,{watchList:t.payload});case"ITEMS_LOADING":return Object(Q.a)({},e,{loading:!0});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH_RESULTS":return Object(Q.a)({},e,{searchResults:t.payload});default:return e}},display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POPULAR":case"TOP_RATED":case"NOW_PLAYING":return Object(Q.a)({},e,{currentDisplay:t.payload});default:return e}},genre:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIES_BY_GENRE":return Object(Q.a)({},e,{results:t.payload});case"FETCH_GENRE_LIST":return Object(Q.a)({},e,{genreList:t.payload});default:return e}},cast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CASTMEMBER_DETAILS":return Object(Q.a)({},e,{details:t.payload});case"FETCH_CASTMEMBER_APPEARANCES":return Object(Q.a)({},e,{movieAppearances:t.payload});default:return e}}}),ne=a(35),re=Object(K.d)(ae,Object(K.a)(ne.a));i.a.render(r.a.createElement(d.a,{store:re},r.a.createElement(z,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f4cb3c58.chunk.js.map