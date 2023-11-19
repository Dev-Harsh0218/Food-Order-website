import axios from 'axios'

const addToCart = document.querySelectorAll('.add_btn');

function updateCart(item){
        axios.post('/update-cart',item).then(res =>{
            console.log(res)
        })
}

addToCart.forEach((btn) => {
  btn.addEventListener('click', (e)=>{
      let item=btn.dataset.item
      updateCart(item)
      console.log(item)
  });
});