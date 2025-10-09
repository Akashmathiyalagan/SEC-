const myData = [
    {
        name:"Dharaneesh",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Naveen",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Priya",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Priya",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Dharaneesh",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Naveen",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Priya",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Priya",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
]






















const con = document.getElementById('container');
for(let i=0;i<myData.length;i++)
{
    con.innerHTML+=`
    <div class='card'>
    <h1>${myData[i].name}</h1>
    <img src=${myData[i].image} height="100px" />
    </div>
    `
}
















fetch('https://fakestoreapi.com/products')
.then(res=>
   res.json()//converts json to js object
)
.then((data)=>{
    for(let i=0;i<data.length;i++)
{
    con.innerHTML+=`
    <div class='card'>
    <img src=${data[i].image} height="100px" />
    <h1>${data[i].id}</h1>
    </div>
    `
}    
})

.catch((err)=>{
    alert("error occured")
})





