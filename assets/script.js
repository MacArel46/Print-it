const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft = document.getElementById("arr-left");
const arrowRight = document.getElementById("arr-right");
const numberOfimages = slides.length;
const banner = document.querySelector('#banner');
const dots = document.querySelector('.dots');



//console.log(numberOfimages);


arrowLeft.addEventListener("click",(e)=>{
	currentImage--; 
	if (currentImage < 0 ) {
		currentImage = numberOfimages - 1;
	}
		
	displayBanner(currentImage);
	

	
});

arrowRight.addEventListener("click",(e)=>{
	currentImage++; 
	
	//quand on clique 
	//console.log(e.target);
	if (currentImage >= numberOfimages) {
		currentImage = 0;
	}
	displayBanner(currentImage);
});

/* boucle : suivant le nombre d'elements dans le tableau  créer une boucle qui insere dans dots 
autant de div dot qu'il y a d'élément dans le tableau */
for (let i = 0; i < slides.length; i++) {
	dots.insertAdjacentHTML("beforeend", '<div class="dot"></div>');
	}

const displayBanner = (numImage = 0) => {
	//console.log(numImage);
	const banner = document.querySelector('#banner');


	/* A FAIRE : si mon imgBanner n'existe pas (!=) je la crée avec l'id imgBanner et sinon si elle existe je la cible (id) 
	et je change la valeur de l'attribut (src) (get setattribute) 
	banner.insertAdjacentHTML("afterbegin",`<img id="imgBanner" src="assets/images/slideshow/${slides[numImage].image}" >`)*/

    if (!document.querySelector('#imgBanner')) {
        banner.insertAdjacentHTML("afterbegin",`<img id="imgBanner" src="assets/images/slideshow/${slides[numImage].image}" >`);
        
    } else {
        let imgBanner = banner.firstElementChild;
		//console.log(imgBanner)
		imgBanner.setAttribute('src', `assets/images/slideshow/${slides[numImage].image}`);
    }

	// remplir leparagraphe : - cibler le paragraphe - innerHTML : insérer le contenu qu'il y a dans le tableau slides[numImage].tagline
    const tagLine = banner.querySelector('p');
    tagLine.innerHTML = slides[numImage].tagLine;
	
	
	//recuperer toutes les dots (queryselectorall) (faire un console.log pour voir si bien ciblé) 
	// but : récupérer un tableau identique à celui d'en haut (index 0 1 2 3 )
	// si numImage == index de mon tableau dots je vais ajouter à ma dot une classe dotselected sinon je supprime la classe à ma dot, le tout dans une boucle
	// boucle foreach : 2 paramètres nomtableau.foreach(dot, index) 
		
	const dotList = document.querySelectorAll('.dot'); 
	// récupération des 4 "dot"
	console.log(dotList);

	// ajout de "dot_selected" quand l'image correspond à l'index sinon suppression
		dotList.forEach((dot, index) => {
	//console.log(index);

		if (numImage === index) {  
			console.log(index);
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
	
	return numImage;

}
let currentImage = displayBanner();
 
