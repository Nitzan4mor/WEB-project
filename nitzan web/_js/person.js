class Person {
    constructor(_parent, _name, _image, _age, _phone, _cell, _email, _id, _isFav) {
        this.parent = _parent;
        this.name = _name;
        this.image = _image;
        this.age = _age;
        this.phone = _phone;
        this.cell = _cell;
        this.email = _email;
        this.id = _id;
        this.isFav = _isFav;
    }

    addToHtml() {
        let newDiv = document.createElement("div");
        newDiv.className = "col-lg-4 p-2 border bg-light text-center border-secondary"
        this.parent.appendChild(newDiv);
        this.addBasicInnerHtml(newDiv)
        let infoBtn = document.createElement("button");
        this.addButton(newDiv, infoBtn, "btn-info mr-2", "More Info");

        let favBtn = document.createElement("button");
        this.addButton(newDiv, favBtn, "btn-warning ml-2", "Add to Favotires")

        infoBtn.addEventListener("click", () => {
            newDiv.innerHTML += `
                    <div>Phone:${this.phone}</div>
                    <div>Cell:${this.cell}</div>
                    <div>Email:${this.email}</div>
        `;
            let lessInfoBtn = document.createElement("button");
            this.addButton(newDiv, lessInfoBtn, "btn-danger", "Less info");
            lessInfoBtn.addEventListener("click", () => {
                this.addBasicInnerHtml(newDiv)
                if (!this.isFav) {
                    this.addButton(newDiv, infoBtn, "btn-info mr-2", "More Info");
                    this.addButton(newDiv, favBtn, "btn-warning ml-2", "Add to Favotires")
                }else {
                    this.addButton(newDiv, infoBtn, "btn-info mr-2 h1", "More Info");
                }
            });
        });

        favBtn.addEventListener("click", () => {
            this.isFav = true;
            favorites.push(this);
            localStorage.setItem("favs", JSON.stringify(favorites));
            this.addBasicInnerHtml(newDiv)
            this.addButton(newDiv, infoBtn, "btn-info h1", "More Info");
        })

    };

    addBasicInnerHtml(newDiv) {
        newDiv.innerHTML = `
                    <h3 class="mb-2">${this.name}</h3>
                    <img class="rounded-circle mb-2" src="${this.image}" alt="person image" width="150">
                    <div class="mb-2 div_age">Age: ${this.age}</div>
        `;
    }

    addButton(_newDiv, _btn, _class, _text) {
        _btn.className = _class;
        _newDiv.appendChild(_btn);
        _btn.innerHTML = _text;
    }

    addFavToHtml() {
        let newDiv = document.createElement("div");
        newDiv.className = "col-lg-4 p-2 border bg-light text-center border-secondary"
        this.parent.appendChild(newDiv);
        this.addBasicInnerHtml(newDiv)
        let infoBtn = document.createElement("button");
        this.addButton(newDiv, infoBtn, "btn-info mr-2", "More Info");
        let favBtn = document.createElement("button");
        this.addButton(newDiv, favBtn, "btn-danger ml-2", "Remove From Favotires")

        infoBtn.addEventListener("click", () => {
            newDiv.innerHTML += `
                    <div>Phone:${this.phone}</div>
                    <div>Cell:${this.cell}</div>
                    <div>Email:${this.email}</div>
        `;
            let lessInfoBtn = document.createElement("button");
            this.addButton(newDiv, lessInfoBtn, "btn-danger", "Less info");
            lessInfoBtn.addEventListener("click", () => {
                this.addBasicInnerHtml(newDiv)
                this.addButton(newDiv, infoBtn, "btn-info mr-2", "More Info");
                this.addButton(newDiv, favBtn, "btn-danger ml-2", "Remove from Favotires")
            });
        });

        favBtn.addEventListener("click", () => {
            for (var i = 0; i < favorites.length; i++) {
                if (favorites[i].id == this.id) {
                    favorites.splice(i, 1);
                    localStorage.setItem("favs", JSON.stringify(favorites));
                    displayFavorites();
                }
            }
        })
    }

};

