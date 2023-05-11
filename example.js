let ankitDetails={
    firstName:"ankit",
    lastName:"rawat"
}
function sayFullName(country, age){
    console.log(this.firstName+" "+this.lastName+" "+country+" "+age)
}
sayFullName.apply(ankitDetails, ['india', 20])