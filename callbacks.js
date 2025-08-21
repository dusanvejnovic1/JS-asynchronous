const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];


// two "posts" on a "blog"
function getPosts(callback) {
    setTimeout(() => { //we use this function to set a delay
        let postTitles = ''; // this will declare a postTitles variable
        let blogSummary = ''; //thiss will declare a blogSummary variable that will store the There are X posts: title1, title2 string
        posts.forEach((post) => { // loop function that will loop through the posts variable/ can also use regular for loop
            postTitles += `, ${post.title}`; // this will add each post title to our new variable as it loops   
            blogSummary = `There are ${posts.length} posts: ${postTitles}`; //this will fill our string with the correct variable elements  

            ;
        })
        callback(blogSummary);
    }, 1000); // this is the delay we set in ms
} // this will return our postTitles
// what this will do is wait 1 second, then afterwards loop through the posts array and fetch us all the 
// post titles in a new constant var output, this is good because most of the time the element we want to fetch
// will not load instantly, so if we do this without the delay the function would fail or yield
// unwanted results

function addPost(titleNew, bodyNew) { // this will add a function to a new post with title = title and body = body
    if (titleNew && bodyNew){
    posts.push({ title: titleNew, body: bodyNew });
}
        else console.log('ERROR: title or body is empty, please enter both the post title and the post body');

};

// lets see if our function works 
// UPDATE: it doesnt because due to the delay postTitles const retuns empty instead we will create a callback function to call the post titles
// within getPosts then we will put the console function after this callback and finally we will call the function to log the result to our console

// console.log(getPosts().postTitles);

addPost ('Post Three', 'this is post three');
addPost ('Post Four');
addPost ('', 'This is post five');
addPost ();

getPosts((summary) => {
    console.log(summary)

});

//assignment to test what i learned
//**Objective:** Modify the existing code to add new features and improve its functionality.
//1. **Add a New Post Functionality:**  Create a new function called `addPost` that takes a `title` and a `body` as parameters. This function should add a new post to the `posts` array. // IMPLEMENTED SUCESSFULLY (add proper string formating later)
//2. **Display Post Count:** Modify the `getPosts` function to also return the total number of posts along with the titles. The output should look like this: There are X posts: Post One, Post Two // IMPLEMENTED SUCESSFULLY
//3. **Error Handling:** - Implement basic error handling in the `addPost` function. If the title or body is empty, log an error message to the console instead of adding the post. // IMPLEMENTED SUCESSFULLY
//4. **Test Your Code:**    - Call `addPost` multiple times with different titles and bodies, including cases where one or both are empty. Observe how your error handling works. // WORKS PERFECT