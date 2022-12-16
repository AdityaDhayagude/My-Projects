const http = new easyHTTP;

// //GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err,posts)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log(posts);
//   }

//   console.log(posts);
// });

// //GET SINGLE POSTS
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err,posts)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log(posts);
//   }

//   console.log(posts);
// });

// CREATE DATA 
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//CREATE POST 
http.post('http://jsonplaceholder.typicode.com/posts',data,
function(err,post)
{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log(post);
  }
});