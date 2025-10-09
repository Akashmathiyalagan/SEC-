const myData = [
    {
        name:"Akash",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Prasanna",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Aditya",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Saran",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Aishwarya",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Sobika",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Priyadharasan",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
    {
        name:"Priyadharshini",
        image:"https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg"
    },
]





const con = document.getElementById('container');
for(let i=0;i<myData.length;i++)
{
    con.innerHTML+=`
    <div class='card'>
    <img src=${myData[i].image} height="100px" />
    <p>${myData[i].name}</p>
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
    <p>${data[i].id}</p>
    </div>
    `
}    
})

.catch((err)=>{
    alert("error occured")
})





