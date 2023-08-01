//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = "https://www.course-api.com/react-tours-project";

// console.log(fetch(url))

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// const dataBox = document.querySelector("#data-box");

// const getTours = async () => {
//   try {
//     const resp = await fetch(url)
//     const data = await  resp.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }
// console.log(getTours().then())

// My test
// const getToursJose = async () =>{
//   try{
//     const response =  await fetch(url)
//     const data = await response.json()
//     console.log(data)
//     data.map(tour=>{
//       console.log(tour)
//       dataBox.innerHTML += `
//       <h2>${tour.name}</h2>
//       <p>${tour.info}</p>
//       `
//     })
//     return data
//   }catch (error) {
//     console.log(error)
//     // return error
//   }
// }
// getToursJose()

// const getAllTours = () => {
//   fetch(url)
//   .then(response=>response.json())
//   .then(tours=>  {
//     tours.map(tour=>{
//       console.log(tour)
//       dataBox.innerHTML += `
//       <h2>${tour.name}</h2>
//       <p>${tour.info}</p>
//       `
//     })
//   })

//   getAllTours()
// }

const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const postsBox = document.querySelector("#posts-box");

const getPosts = async () => {
  try {
    const response = await fetch(urlPosts);
    const posts = await response.json();
    console.log(posts);
    posts.map((post) => {
      postsBox.innerHTML += `
      <h2>${post.title}</h2>
      <p>${post.body}</p>   
      <button id=${post.id} onClick=deletePost(${post.id})>Delete</button>  
      <button id=${post.id} onClick=updatePost(${post.id})>Update</button>  
      `;
    });
  } catch (error) {
    console.log(error);
  }
};

getPosts();

const submitBtn = document.querySelector("#submit-btn");

const createPost = async (e) => {
  console.log("works");
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  console.log(title);
  e.preventDefault();
  try {
    const response = await fetch(urlPosts, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, body: body }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
submitBtn.addEventListener("click", createPost);

const deletePost = async (id) => {
  // console.log(`${urlPosts}/${id}`)
  try {
    const response = await fetch(`${urlPosts}/${id}`, {
      method: "DELETE",
    });
    // const data = await response.json();
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (id, title = "Jose") => {
  try {
    const response = await fetch(`${urlPosts}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, title: title, body: body }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
