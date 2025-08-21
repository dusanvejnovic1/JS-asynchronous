const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

//now we will learn about the async await 

function getPosts() {
    return new Promise((resolve) => { 
        setTimeout(() => { 
            let postTitles = posts.map(titles => titles.title).join(', ');
            let postSummary =`There are ${posts.length} posts: ${postTitles}`;
            resolve(postSummary);
            })
        }, 1000); 
    }

function addPost(titleNew, bodyNew) { // we will add a timeout to this function to simulate comunicating with the serve
    return new Promise((resolve, reject) =>{
    setTimeout(() => {         
        if (titleNew && bodyNew){
            posts.push({ title: titleNew, body: bodyNew });
            resolve ('Success')
        }
        else reject ('ERROR: title or body is empty, please enter both the post title and the post body')
    })
    }, 2500)
};

async function init() {
    await addPost('Post three', 'This is post three'); //this means the function will wait for add post to finish before initializing the rest of the coe

    getPosts().then(log => {console.log(log)}).catch(err => {console.log(err)});

    };; // we must use async function to declare an asynchronous function, we declare

    init();

    //PERFECT this is much cleaner then the other ways to introduce asynchronous functions