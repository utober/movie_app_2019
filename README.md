# ReactJS강좌 - Movie App 2019

## 기본설정
- [install] nodejs
- node -v
- npm -v
- npm install npx -g
- [update] npm install -g npm
- [install] vscode
- [install] git ==> http://git-scm.com
- git --version
- npx create-react-app react_movie_app
- package.json
- npm start

## Github
- git init  --> Initialized empty git repository in ~~.git
- git remote add origin https://github.com/utober/movie_app_2019
- git add .
- git commit -m "#1.0 Creating first React App"
- git push origin master

## 강좌...
- npm i prop-types  :: import PropTypes from "prop-types";
- 

## Component Life Cycle
* Mounting
  - constructor() : javascript에서 class를 만들때 호출
  - render()  : setState 호출시...
  - componentDidmount() : component가 render() 되었을 때 호출.
* Updating
  - shouldComponentUpdate() : update를 할지 결정
  - render()
  - componentDidUpdate()
* Unmounting
  - componentWillUnmount()

## 강좌...
- fetch() ==> Axios 사용
- npm install axios
- api ===> YTS API(https://yts.lt :: movie torrent data 이용) : URL 주기적 변경
- (대체주소) https://yts-proxy.now.sh/list_movies.json?sort_by=rating

## 웹에 올리기
- npm i gh-pages  
  + :: github의 github page를 도메인에 나타나게 해줌 
  + :: github에서 project 이름을 가져오는 방식
  + package.json 파일 내용 추가
    * ... "homepage": "https://utober.github.io/movie_app_2019" ...
    * ... "scripts": {... "deploy": "gh-pages -d build", "predeploy": "npm run build"}

## 라우팅
- npm install react-router-dom
- HashRouter / BrowserRouter
- Link to
- Navigation
- route
- route props
- 