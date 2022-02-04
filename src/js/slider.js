
// --------------------------------------------------
//                        SLIDER 
// --------------------------------------------------

function Slide(){

    const Images = ["images/image-product-1-thumbnail.jpg","images/image-product-2-thumbnail.jpg","images/image-product-3-thumbnail.jpg","images/image-product-4-thumbnail.jpg"];
    const ImagesPrinc = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]
    const classpetDiv = ["mShow1","mShow2","mShow3","mShow4"]
    const classImg = ["thumb1","thumb2","thumb3","thumb4"];
    const Previous = document.querySelector('.SvgPre');
    const Next = document.querySelector('.SvgNext');
    let section = document.querySelector(".ShowImg");


    //COMPUTER

    let newDiv = document.createElement('div');
    let newDiv1 = document.createElement('div');
    let newDiv2 = document.createElement('div');
    let newDiv3 = document.createElement('div');
    let newDiv4 = document.createElement('div');
    let newDiv11 = document.createElement('div');
    const petDiv = [newDiv1,newDiv2,newDiv3,newDiv4];
    let newImg = document.createElement('img');
    let newImg1 = document.createElement('img');
    let newImg2 = document.createElement('img');
    let newImg3 = document.createElement('img');
    let newImg4 = document.createElement('img');
    const imgThumb = [newImg1,newImg2,newImg3,newImg4];


    newImg.src = "images/image-product-1.jpg";
    newImg.classList.add('ShowPrin');
    newDiv.appendChild(newImg);
    newDiv.classList.add('Show1');
    section.appendChild(newDiv);



    for (let i = 0; i < 4; i++) {
        
        imgThumb[i].src = Images[i];
        imgThumb[i].classList.add(classImg[i]);
        console.log(imgThumb[i]);
        petDiv[i].appendChild(imgThumb[i]);
        petDiv[i].classList.add(classpetDiv[i]);
        newDiv11.appendChild(petDiv[i]);

    }


    newDiv11.classList.add('Show2');
    section.appendChild(newDiv11);
    let index = 0;
    newDiv1.style.opacity = 0.2;

    // FLECHE PREVIOUS SLIDER
    Previous.addEventListener("click", () => {

        if(index === 0){

            newDiv1.style.opacity = 1;
            imgThumb[index].style.opacity = 1;
            index = index + 3;
            newImg.src = ImagesPrinc[index];
            imgThumb[index].style.opacity = 0.2;

        }

        else{

            newDiv1.style.opacity = 1;
            imgThumb[index].style.opacity = 1;
            index --;
            newImg.src = ImagesPrinc[index];
            imgThumb[index].style.opacity = 0.2;

        } 
    })

    // FLECHE NEXT SLIDER
    Next.addEventListener("click", () => {

        if(index === 3){

            newDiv1.style.opacity = 1;
            imgThumb[index].style.opacity = 1;
            index = index - 3;
            newImg.src = ImagesPrinc[index];
            imgThumb[index].style.opacity = 0.2;

        }

        else{

            newDiv1.style.opacity = 1;
            imgThumb[index].style.opacity = 1;
            index++;
            newImg.src = ImagesPrinc[index];
            imgThumb[index].style.opacity = 0.2;

        } 

    })


    // -----------------------------------------------
    //               SLIDER GEANT
    // -----------------------------------------------

    const asideShow = document.querySelector('.ShowAside');
    const imgPrin = document.querySelector('.ShowPrin');
    const classImgPrin = ["thumb1Prin","thumb2Prin","thumb3Prin","thumb4Prin"];
    const classpetDivPrin = ["mShow1Prin","mShow2Prin","mShow3Prin","mShow4Prin"]

    let newDivPrin = document.createElement('div');
    let newDiv1Prin = document.createElement('div');
    let newDiv2Prin = document.createElement('div');
    let newDiv3Prin = document.createElement('div');
    let newDiv4Prin = document.createElement('div');
    let newDiv11Prin = document.createElement('div');
    const petDivPrin = [newDiv1Prin,newDiv2Prin,newDiv3Prin,newDiv4Prin];
    let newImgPrin = document.createElement('img');
    let newImg1Prin = document.createElement('img');
    let newImg2Prin = document.createElement('img');
    let newImg3Prin = document.createElement('img');
    let newImg4Prin = document.createElement('img');
    const imgThumbPrin = [newImg1Prin,newImg2Prin,newImg3Prin,newImg4Prin];
    let backgroundAside = document.querySelector('.blabla');

    imgPrin.addEventListener("click", () => {

        backgroundAside.style.display = "block";
        let deleteButton = document.createElement('img');
        deleteButton.classList.add('deleteAside');
        deleteButton.src = 'images/icon-close.svg';
        let svgImgPrevious = document.createElement('img');
        svgImgPrevious.classList.add('PreviousPrin');
        svgImgPrevious.src = 'images/icon-previous.svg'
        let svgImgNext = document.createElement('img');
        svgImgNext.classList.add('NextPrin');
        svgImgNext.src = 'images/icon-next.svg'
        newImgPrin.src = "images/image-product-1.jpg";
        newImgPrin.classList.add('ShowPrinPrin');
        newDivPrin.appendChild(newImgPrin);
        newDivPrin.classList.add('Show1PrinPrin');
        asideShow.appendChild(newDivPrin);
        asideShow.appendChild(deleteButton);
        asideShow.appendChild(svgImgPrevious);
        asideShow.appendChild(svgImgNext);


        for (let i = 0; i < 4; i++) {
            
            imgThumbPrin[i].src = Images[i];
            imgThumbPrin[i].classList.add(classImgPrin[i]);
            petDivPrin[i].appendChild(imgThumbPrin[i]);
            petDivPrin[i].classList.add(classpetDivPrin[i]);
            newDiv11Prin.appendChild(petDivPrin[i]);

        }


        newDiv11Prin.classList.add('Show2Prin');
        asideShow.appendChild(newDiv11Prin);
        let index = 0;
        newDiv1Prin.style.opacity = 0.2;

    
        // FLECHE PREVIOUS SLIDER GEANT
        svgImgPrevious.addEventListener("click", () => {

            if(index === 0){

                newDiv1Prin.style.opacity = 1;
                imgThumbPrin[index].style.opacity = 1;
                index = index + 3;
                newImgPrin.src = ImagesPrinc[index];
                imgThumbPrin[index].style.opacity = 0.2;

            }

            else{

                newDiv1Prin.style.opacity = 1;
                imgThumbPrin[index].style.opacity = 1;
                index --;
                newImgPrin.src = ImagesPrinc[index];
                imgThumbPrin[index].style.opacity = 0.2;

            } 
        })

        // FLECHE NEXT SLIDER GEANT
        svgImgNext.addEventListener("click", () => {

            if(index === 3){

                newDiv1Prin.style.opacity = 1;
                imgThumbPrin[index].style.opacity = 1;
                index = index - 3;
                newImgPrin.src = ImagesPrinc[index];
                imgThumbPrin[index].style.opacity = 0.2;

            }

            else{

                newDiv1Prin.style.opacity = 1;
                imgThumbPrin[index].style.opacity = 1;
                index++;
                newImgPrin.src = ImagesPrinc[index];
                imgThumbPrin[index].style.opacity = 0.2;

            } 

        })

        // BOUTON DELETE SLIDER GEANT 
        deleteButton.addEventListener("click", () => {

            asideShow.removeChild(newDivPrin);
            asideShow.removeChild(newDiv11Prin);
            asideShow.removeChild(svgImgPrevious);
            asideShow.removeChild(svgImgNext);
            asideShow.removeChild(deleteButton);
            backgroundAside.style.display = "none";
            index = 0;

            newDiv1Prin.style.opacity = 0.3;
            newImg2Prin.style.opacity = 1;
            newImg3Prin.style.opacity = 1;
            newImg4Prin.style.opacity = 1;

        })

    })

    /*  
    // Litlle screen
        
    let index = 0;
    newImg.classList.add('showRoom');
    newImg.src = Images[index];
    section.appendChild(newImg);

    Previous.addEventListener("click", () => {

        if(index === 0){

            index = index + 3;
            newImg.src = Images[index];

        }

        else{

            index --;
            newImg.src = Images[index];

        } 
    })

    Next.addEventListener("click", () => {

        if(index === 3){

            index = index - 3;
            newImg.src = Images[index];

        }

        else{

            index++;
            newImg.src = Images[index];

        } 

    })*/
    
}

export { Slide }