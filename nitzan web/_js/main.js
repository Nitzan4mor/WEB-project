 var favorites;

window.onload = () => {

    if(localStorage.getItem("favs")){
        favorites =  JSON.parse(localStorage.getItem("favs"));
    }else {
        favorites = [];
    }
    doRestApi()
};

var doRestApi = () =>{
    // let myUrl = "https://liverpool-squad-nodejs-mongo.herokuapp.com/";
    let myUrl = "https://randomuser.me/api/?results=12"
    fetch(myUrl)
    .then(resp=> resp.json())
    .then(json_data =>{
        // console.log(json_data.results);
        createPersons(json_data.results);
        
    })
    .catch((error) => {
        console.error('Error:', error);
      });
};

var createPersons = (_ar) =>{
    id_parent.innerHTML = "";
    _ar.map(item => {
        let person = new Person(id_parent,item.name.first + " " + item.name.last, item.picture.large, item.dob.age, item.phone, item.cell, item.email, item.login.uuid, false);
        person.addToHtml();
        console.log(person.id);
        
    })
};


