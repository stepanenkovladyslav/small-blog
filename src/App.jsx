import "./App.css";
import React from "react";
import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout"
import BlogpostsPage from "./pages/BlogpostsPage"
import InformationPage from "./pages/InformationPage"
import ReviewsPage from "./pages/ReviewsPage"
import PostPage from "./pages/PostPage/PostPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<BlogpostsPage/>}/>
            <Route path="post/:id" element={<PostPage/>}/>
            <Route path='info' element={<InformationPage/>}/>
            <Route path='reviews' element={<ReviewsPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
  )
}
export default App;


/*

hooks + useMemo

3 - Начать попытки реализации модального окна
4 - Реализовать личный хук для пагинации
5 - Реализовать пагинацию постов и комметариев
6 - Сделать сокращения в пагинации вместе с кнопками перехода на слудующую страницу
7 - Если нет постов - удалили все со странички уведомить об этом 
*/



