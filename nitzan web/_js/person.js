class Person {
    constructor(_parent, _name, _image, _age, _phone, _cell, _email) {
        this.parent = _parent;
        this.name = _name;
        this.image = _image;
        this.age = _age;
        this.phone = _phone;
        this.cell = _cell;
        this.email = _email;
    }

    addToHtml() {
        let newDiv = document.createElement("div");
        newDiv.className = "col-lg-4 p-2 border bg-light text-center border-secondary"
        this.parent.appendChild(newDiv);
        newDiv.innerHTML = `
                    <h3 class="mb-2">${this.name}</h3>
                    <img class="rounded-circle mb-2" src="${this.image}" alt="person image" width="150">
                    <div class="mb-2 div_age">Age: ${this.age}</div>
        `;
        let infoBtn = document.createElement("button");
        infoBtn.className = "btn-info mr-2";
        newDiv.appendChild(infoBtn);
        infoBtn.innerHTML = "More Info";

        let favBtn = document.createElement("button");
        favBtn.className = "btn-warning ml-2";
        newDiv.appendChild(favBtn);
        favBtn.innerHTML = "Add to Favotires"

        infoBtn.addEventListener("click", ()=>{
            newDiv.innerHTML = `
                    <h3 class="mb-2">${this.name}</h3>
                    <img class="rounded-circle mb-2" src="${this.image}" alt="person image" width="150">
                    <div class="mb-2 div_age">Age: ${this.age}</div>
                    <div>Phone:${this.phone}</div>
                    <div>Cell:${this.cell}</div>
                    <div>Email:${this.email}</div>
        `;
        this.addInfoButton(newDiv)

        let favBtn = document.createElement("button");
        favBtn.className = "btn-warning ml-2";
        newDiv.appendChild(favBtn);
        favBtn.innerHTML = "Add to Favotires"
        })

    };

    addInfoButton(newDiv){
        let infoBtn = document.createElement("button");
        infoBtn.className = "btn-info mr-2";
        newDiv.appendChild(infoBtn);
        infoBtn.innerHTML = "More Info";
    }
};