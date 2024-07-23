import React from "react";
import Article from "./Article";


function ArticleList(props) {

    //posts = {props}

    //const posts = {props}
    //console.log(posts)

    //console.log(posts[1])
    //console.log(props)
    //posts = props
    //console.log(posts)

    /*
    const postsAll = posts.map((postObj) => {
        return <Article title = {postObj.title} date = {postObj.date} />
    })
    */
      
    

    return (
        <main>
          {props.posts.map((post, index) => (
            <Article
              key={index}
              title={post.title}
              date={post.date || "January 1, 1970"}
              preview={post.preview}
            />
          ))}
        </main>
      );

    // for Article Component(s)
    // title = {props.posts[0]};
    //const date = props.date;
    //const preview = props.preview;

    /*
    return (

        <main>
            <Article 
                title = {props.posts[0].title}
                date = {props.posts[0].date}
                preview = {props.posts[0].preview}
                />
            <Article 
                title = {props.posts[1].title}
                date = {props.posts[1].date}
                preview = {props.posts[1].preview}
            />
            <Article 
                title = {props.posts[2].title}
                date = {props.posts[2].date}
                preview = {props.posts[2].preview}
            />
        </main>

    
    );
    */
    
    
}

export default ArticleList;