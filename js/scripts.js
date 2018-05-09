
function sumar5(val){
    return val+5;
}
sumar5();
console.log(sumar5(20));

function sumarL (valA,valB){
    return valA+valB;
}
sumarL(100,5);

function nombres (val1,val2){
    return val1+", "+val2;
}
nombres("Valen","Amenabar");

var users = [
{name:"Valen",
lastname:"Amenabar",
age:21,
city:"Rosario",
children:["Juan"]},
{name:"Ursula",
lastname:"Soer",
age:21,
city:"Rosario",
children:["Josefa","Pedro"]},
{name:"Milagro",
lastname:"Sala",
age:21,
city:"Rosario",
children:["Pablo"]},
{name:"Rei",
lastname:"Ayanami",
age:21,
city:"Rosario",
children:["Agustina"]},
{name:"Johan",
lastname:"Gomez",
age:21,
city:"Rosario",
children:["Imanol","Facundo"]}
]

function assamble(user){
    return user.lastname+" "+user.name+" vive en "+user.city;
}


function listUsersByAgeLimit (agelimit){
for (var i=0; i<users.length;i++){
    if (users[i].age <= agelimit){
    console.log(assamble(users[i]));
    }
}
}

var listUsers ={
    listAll: function(users){
        for (var i=0; i<users.length ; i++) {
            console.log (listUsers.assamble(users[i]))
        }
    },
    assamble: function(user){
        return "el usuario   " + user.Name + " " + "que vive en " + user.country + " "+ "trabaja de " + user.profile;
    },
    listByAgeLimit: function (users, age) {
        for (var i=0; i<users.length; i++) {
            if (users[i].age<age)
            console.log (listUsers.assamble (users[i]));
        }
    },
    users: [],
    setUsers: function (users) {
        listUsers.users = users
    }
}

