var favorites = JSON.parse(localStorage.getItem("favs"));
window.onload = () =>{

    displayFavorites();
};

var displayFavorites = () =>{
    id_parent.innerHTML = "";
    favorites.map(item =>{
        let person = new Person(id_parent,item.name, item.image, item.age, item.phone, item.cell, item.email, item.id, item.isFav );
        person.addFavToHtml();
    })  
}

var clearAllFavs = () =>{
    favorites = [];
    localStorage.setItem("favs", JSON.stringify(favorites));
    id_parent.innerHTML = "";
}

var removeFromFav = (_id) =>{
    for (var i = 0; i<favorites.length; i++){
        console.log(1);
        
    }
};