const bgImages = ['1.jpg', '2.jpg', '3.jpg']
const selectedImg = bgImages[Math.floor(Math.random()*bgImages.length)]
const bgImage = document.createElement("img");
const bgImageUrl = `img/${selectedImg}`
bgImage.classList.add('hidden')
bgImage.src = bgImageUrl
document.body.style.backgroundImage = `url(${bgImageUrl})`
console.log(`url(${bgImageUrl})`)
document.body.appendChild(bgImage);
