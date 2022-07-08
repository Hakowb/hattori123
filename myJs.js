





let myName = {
    name: 'Jacob',
    age: 19,
    gender: 'male',
    hobby: 'coding',
        faveDrinks: {
            cup1: 'water',
            cup2: 'soda',
            cup3: 'tea',
        },
    get fullInfo(){
        return `${this.name} ${this.age}`;
    }
};


let hattori = document.getElementById("xd");


hattori.addEventListener("hover", function(){
    alert('You clicked me');
})