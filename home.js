const bar=document.getElementById("bar");
const nav=document.getElementById("navbar")
const close=document.getElementById("close");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        // console.log("hello")
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}







// ========home product script============================
// =======================================================


var arr=[
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiE5AqK5-hTcF9dvCGNYbEpPi92THtm50ee0kKqiJRg&usqp=CAU&ec=48665701",
        name:"yellow tshirt",
        mrp:550,
        price:400,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZIst-LBJsa-mQzPvnbX36lJ2xjI_nLUwxpK56bjvYQ&usqp=CAU&ec=48665701",
        name:"women top",
        mrp:890,
        price:780,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnaPv7GQHD4go0IZSOBXdUrd4nKFRweCLQ8ljzd2Y2w&usqp=CAU&ec=48665701",
        name:"mens shirt full sleves",
        mrp:600,
        price:358,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8VEm-VBckbKhDK_lRN6F7mUJX6k5heFXN-i4T7760Q&usqp=CAU&ec=48665701",
        name:"sareee for womens",
        mrp:550,
        price:400,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTccIEGeeJRvb9z0io9c2eMG7Jbaa1scuUoye8liFGQ&usqp=CAU&ec=48665701",
        name:"jeckets",
        mrp:5150,
        price:44400,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcUBpipaJS7hThFNH12yGph-uBjBqeKiiZxgztTGHCg&usqp=CAU&ec=48665701",
        name:"all time comfort",
        mrp:950,
        price:1400,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56BJ3pziT2xDuxUg96y_l1AMqNWNL4GSo8Zs9cqNMZA&usqp=CAU&ec=48665701",
        name:"new mans",
        mrp:800,
        price:1400,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEWOV7fkLt3fGUxEDcfazYO8g32BFrE06YwzloibfKw&usqp=CAU&ec=48665701",
        name:"kids specials",
        mrp:2510,
        price:4050,
         star1:"https://pngimg.com/d/star_PNG41474.png",
        star2:"https://pngimg.com/d/star_PNG41474.png",
        star3:"https://pngimg.com/d/star_PNG41474.png",
        star4:"https://pngimg.com/d/star_PNG41474.png",
        star5:"https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-half-yellow-icon.png",
                description:"Designed with jet-setting man in mind, the Travel Collection cloths, shirt, accessories shoes is lightweight, comfortable and crease resistant. The fabric has a natural memory designed to 'stretch' with movement of the body while retaining a sharp, lightweight structure. Featuring slim fit styling and a small collar, this shirt comes in an array of plain colours, some with regular cuffs and some with French cuffs."
    },
]
display(arr);

function display(arr){
     arr.map(function(elem){
        var div=document.createElement("div");
        div.setAttribute("class", "box")

        var img=document.createElement("img");
        img.setAttribute("src", elem.Image);
        img.setAttribute("class", "productImage")
        img.addEventListener("click", function(){
            redirect(elem);
        })

        var h3=document.createElement("h3")
        h3.setAttribute("class", "productName")
        h3.textContent=elem.name

        var pricebox=document.createElement("div")
        pricebox.setAttribute("class", "productprice")
        var mrp=document.createElement("p")
        mrp.setAttribute("class", "productmrp")
        mrp.textContent="$"+elem.mrp

        var price=document.createElement("p")
        price.setAttribute("class", "price")
        price.textContent="$"+elem.price

        var btn=document.createElement("button")
        btn.setAttribute("class", "addbtn")
        btn.textContent="Add to cart"
        btn.addEventListener("click", function(){
            cart(elem);
        });

        pricebox.append(mrp, price)
        div.append(img, h3, pricebox, btn)
        document.querySelector("#container").append(div)
     })
}

var cartDetails=JSON.parse(localStorage.getItem('cartDetails')) || [];
var count=JSON.parse(localStorage.getItem("countItems"))|| 0;
function cart(elem){
    cartDetails.push(elem);
    count++;
    localStorage.setItem("countItems", count);
    document.getElementById('count').textContent=count;
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails))
}

document.getElementById('count').textContent=count;






// =============product detail page js==============
var despro=[]
function redirect(elem){
    despro.push(elem)
    localStorage.setItem("des", JSON.stringify(despro));
    window.location.href="detail.html"
}


