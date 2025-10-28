let itemContainerElement= document.querySelector('.all-item-container');
//item to be added in bag will be array 
let bagitems ;//=[];
function onload()
{//retrive from localstorage
    let bagitemstr=localStorage.getItem('bagitem');
    bagitems=bagitemstr?JSON.parse(bagitemstr):[];
display_items_on_home();
displaybagcount(); 

}
onload();


function addtobag(item_id)
{
bagitems.push(item_id);
//ADD ITEM TO LOCALSTORAGE TO KEEP COUNT
localStorage.setItem('bagitem',JSON.stringify(bagitems));
 displaybagcount();
}
//to display on bag count
function displaybagcount()
{
    let bagitemcountelement=document.querySelector('.bag-item-count');
    if(bagitems.length>0)
    {
       bagitemcountelement.innerText=bagitems.length;
       bagitemcountelement.style.visibility='visible' ;
    }
    else{
        bagitemcountelement.style.visibility='hidden';
    }
    
}

function display_items_on_home(){

const item=[
    {item_id:'101',
    item_image:'images/w1.webp',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
     {item_id:'102',
    item_image:'images/w4.webp',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
     {item_id:'103',
    item_image:'images/w5.webp',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
     {item_id:'104',
    item_image:'images/w6.webp',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
{item_id:'105',
    item_image:'images/w2.webp',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'106',
    item_image:'images/w3.webp',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'107',
    item_image:'images/w8.jpeg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
      {item_id:'108',
    item_image:'images/w9.jpeg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },

      {item_id:'109',
    item_image:'images/w10.jpeg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'110',
    item_image:'images/w15.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'111',
    item_image:'images/w1.webp',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'112',
    item_image:'images/w17.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'113',
    item_image:'images/w11.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'114',
    item_image:'images/w12.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'115',
    item_image:'images/w13.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'116',
    item_image:'images/w14.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'117',
    item_image:'images/w15.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'118',
    item_image:'images/w16.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    {item_id:'119',
    item_image:'images/w17.jpg',
    rating:{
    stars:4.5,
    no_review:1.3,},
company_name:'tanishq',
item_name:'gold plated jhumkas',
current_price:606,
original_price:1045,
discount:42,
    },
    ];

    let innerHtml='';
    item.forEach(item =>{
innerHtml+=` <div class="item-container">
            <img src="${item.item_image}" alt="img" class="item-img">
            <div class="rating">${item.rating.stars} ⭐| ${item.rating.no_review}K</div>
            <div class="company-name-inside-item">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price"> ${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                 <span class="discount">${item.discount}% OFF </span>
           </div>
            <button class="btn-add-bag" onclick="addtobag(${item.item_id})">Add to Bag</button>
        </div>`;
    })
itemContainerElement.innerHTML=innerHtml;
}
