
const images = document.querySelectorAll('.img');
const containerIMG = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const equiz = document.querySelector('.bx.bx-x');

images.forEach(image=>{

    image.addEventListener('click', ()=>{
        containerIMG.classList.toggle('move');
        imageContainer.classList.toggle('show');
       addImage(image.getAttribute('src'), image.getAttribute('alt'));
       
        
    })
})

const addImage = (srcImage, altImg)=>{
    
    imageContainer.src = srcImage;
    copy.innerHTML = altImg;
}

equiz.addEventListener('click', ()=>{
    containerIMG.classList.toggle('move');
    imageContainer.classList.toggle('show');
   

})