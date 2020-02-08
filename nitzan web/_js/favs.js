var fabs = JSON.parse(localStorage.getItem("favs"));
window.onload = () =>{

    id_parent.innerHTML = "";
    fabs.map(item =>{
        let person = new Person(id_parent,item.name, item.image, item.age, item.phone, item.cell, item.email);
        person.addFavToHtml();
        
    })
    
    
    
    

   
    
    
};