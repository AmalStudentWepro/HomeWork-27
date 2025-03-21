const img = document.querySelector('.image'); 
const priceText = document.querySelector('.info span'); 
const colorText = document.querySelector('.info a'); 
const colorBtns = document.querySelectorAll('.buttons button'); 
const storageBtns = document.querySelectorAll('.option h1'); 

let basePrice = 1999; 

const images = {
    white: "https://brostore.uz/cdn/shop/files/4_c48f241b-ea94-4f3f-bbeb-2a3be4200c76.png?v=1700301793",
    "space gray": "https://my-store.by/wp-content/uploads/2022/03/mbp14-spacegray-select-202110.jpg"
};

colorBtns.forEach(btn => {
    btn.onclick = () => {
        let color = btn.innerText.toLowerCase(); 
        if (images[color]) {
            img.style.backgroundImage = `url(${images[color]})`; 
        }
        colorText.innerText = btn.innerText; 

        colorBtns.forEach(b => b.classList.remove("active")); 
        btn.classList.add("active");
    };
});

storageBtns.forEach(btn => {
    btn.onclick = () => {
        let extraPrice = +btn.dataset.price; 
        let totalPrice = basePrice + extraPrice; 
        priceText.innerText = `$${totalPrice.toLocaleString()}`; 

        storageBtns.forEach(b => b.parentElement.classList.remove("active")); 
        btn.parentElement.classList.add("active");
    };
});
