const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];


// two "posts" on a "blog"
function getPosts() {
    return new Promise((resolve) => { //instead of using callback functions, this time we will use Promise statement, this is how to declare a new promise it must include resolve and reject parametes
        setTimeout(() => { //we use this function to set a delay
            let postTitles = posts.map(titles => titles.title).join(', ');
            let postSummary =`There are ${posts.length} posts: ${postTitles}`;
            resolve(postSummary);
            })
        }, 1000); // this is the delay we set in ms
    }  // this 

 /* this will return our postTitles
what this will do is wait 1 second, then afterwards loop through the posts array and fetch us all the 
post titles in a new constant var output, this is good because most of the time the element we want to fetch
will not load instantly, so if we do this without the delay the function would fail or yield
unwanted results */

function addPost(titleNew, bodyNew) { // this will add a function to a new post with title = title and body = body
    return new Promise((resolve, reject) =>{
        if (titleNew && bodyNew){
            posts.push({ title: titleNew, body: bodyNew });
            resolve ('Success')
        }
        else reject ('ERROR: title or body is empty, please enter both the post title and the post body')
    })
};



/* // lets see if our function works 
UPDATE: it doesnt because due to the delay postTitles const retuns empty instead we will create a callback function to call the post titles
within getPosts then we will put the console function after this callback and finally we will call the function to log the result to our console

console.log(getPosts().postTitles); */

addPost('Post Three', 'this is post three')
.then(() => getPosts())
.then((summary) => console.log(summary))
.catch((error) => console.log(error));
getPosts()
.then(() => getPosts())
.then((summary) => console.log(summary))
.catch((error) => console.log(error));
addPost('Post Four')
.then(() => getPosts())
.then((summary) => console.log(summary))
.catch((error) => console.log(error));
addPost('', 'This is post five').catch()
.then(() => getPosts())
.then((summary) => console.log(summary))
.catch((error) => console.log(error));
addPost()
.then(() => getPosts())
.then((summary) => console.log(summary))
.catch((error) => console.log(error));

/* getPosts((summary) => {
    console.log(summary)

}); */


/* Assignment for promises 
Refactor getPosts to Return a Promise:

Change your getPosts function so that it returns a Promise instead of accepting a callback. 
The Promise should resolve after a delay (using setTimeout) and return a summary string like "There are X posts: Post One, Post Two".
Refactor addPost to Return a Promise:

DONE

Change your addPost function so that it returns a Promise.
The Promise should resolve if both title and body are provided and the post is successfully added.
If either title or body is missing, the Promise should reject with an appropriate error message.

DONE

Chaining Promises:

After adding a new post using addPost, chain a .then() call that retrieves the posts using your new Promise-based getPosts function.
Handle errors with .catch() so that any rejection from addPost or getPosts is shown in the console.
Testing:

Test your functions by:
Adding a valid post and displaying the result.
Attempting to add an invalid post (missing title or body) and catching the error.
Chaining multiple additions and displaying the final summary.
 */