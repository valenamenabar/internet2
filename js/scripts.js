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
for (var i=0; i<users.lenght;i++){
    console.log(users[i].name + " " + users[i].lastname + " " + "tiene" + " " +users[i].children + " " + "hijxs");
}
