let z=0

let request=new XMLHttpRequest()
request.open("GET","https://jsonplaceholder.typicode.com/users")
request.responseType='json'
request.send()
request.onload=function(){
let users=request.response
for(i=0;i<users.length;i++){
    let cont= `<button onclick="test(${z})">${users[i].name}</button>` 
    
    document.getElementById('users').innerHTML+=cont
    z++
}
}



function test(z){
    document.getElementById('post').innerHTML=''
    let acc=new XMLHttpRequest()
    acc.open("GET","https://jsonplaceholder.typicode.com/posts")
    acc.responseType='json'
    acc.send()
    acc.onload=function clk(){
        let posts=acc.response
        for(j=1;j<posts.length;j++){
    if(z+1==posts[j].userId){ 
            
            let content=`<span>${posts[j].title}</span> `
            
            document.getElementById('post').innerHTML+=content
    } 
        }
    }
    
}