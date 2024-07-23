import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

//console.log(blogData);
//console.log(blogData.name);
//console.log(blogData.image)

function App() {

  // Header Component
  const name = blogData.name;

  // About Component
  const image = blogData.image;
  const about = blogData.about;
  //console.log(image)

  // ArticleList Component
  const posts = blogData.posts;
  //console.log(posts)

  // Article Component
  const title = blogData.title;
  const date = blogData.date;
  const preview = blogData.preview;


  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
