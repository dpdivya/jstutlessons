// // localStorage.setItem("","");
// // localStorage.getItem("","");
// // localStorage.removeItem("","");
// // localStorage.clear("","");
// // localStorage.key("","");

// // localStorage.setItem("id", "0")//strigg ayitt anu kodukendah
// // localStorage.setItem("token", "abc");
// // localStorage.setItem("name", "ptron");

// // localStorage.removeItem("id")//id remove cheyan, value illakl null kitum

// // console.log(localStorage.key(0))
// // localStorage.clear()//complete detsils remove cheyn

// // document.write(localStorage.getItem("id"))//line num 7 comnt cheythalum value kitum
// // document.write(localStorage.getItem("name"))//line num 7 comnt cheythalum value kitum



// const obj = {
//     id: 0,
//     name: "ptron",
// };

// localStorage.setItem("id",obj); //engne set avila localstorage il, bcoz string matram anu local storage accept cheyu.

// //strigify() use cheythu string lek convert chyum
// localStorage.setItem("data", JSON.stringify(obj));//data	{"id":0,"name":"ptron"} engne kitum
// localStorage.removeItem("id")//id remove cheyam

// // document.write(localStorage.getItem("data"));

// console.log(JSON.parse(localStorage.getItem("data")))

//login logout

const input = document.querySelector("input");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");
const h1 = document.querySelector("h1");
loginBtn.onclick=()=> {
    if(input.value) {
        localStorage.setItem("token",input.value);
        h1.innerText = "Welcome, " + localStorage.getItem("token");
    }
}
let tokenVal = localStorage.getItem("token");
if(localStorage.getItem("token")) {
	h1.innerText = "Welcome, " +tokenVal;
}

logoutBtn.onclick=()=> {
    localStorage.clear();
    location.reload();
}