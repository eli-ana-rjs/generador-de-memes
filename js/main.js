// Texto

// Declaracion de variables

const topText = document.getElementById('top-text');
const topImgText = document.getElementById('top-img-text');

const bottomText = document.getElementById('bottom-text');
const bottomImgText = document.getElementById('bottom-img-text');

const noUpperText = document.getElementById('no-upper-text');

const noBottomText = document.getElementById('no-bottom-text');

const fontType = document.getElementById('font-family');

const fontSize = document.getElementById('font-size');

const alignTextLeft = document.getElementById('align-text-left');
const alignTextCenter = document.getElementById('align-text-center');
const alignTextRight = document.getElementById('align-text-right');

const fontColor = document.getElementById('text-color');
const fontColorText = document.getElementById('font-color-text');

const backgroundColor = document.getElementById('background-color');
const backgroundColorText = document.getElementById('background-color-text');

const noBackgroundColor = document.getElementById('no-background-color');

const noOutline = document.getElementById('no-outline');
const clearOutline = document.getElementById('clear-outline');
const darkOutline = document.getElementById('dark-outline');

const spacing = document.getElementById('spacing');

const lineSpaicing = document.getElementById('line-spaicing');

// Imagen

// Declaracion de variables
const inputUrl = document.getElementById('input-url');
const memeImg = document.getElementById('meme-img');

const backgroundImgMeme = document.getElementById('background-img-meme');

const backgroundStyle = document.getElementById('background-style');

// Filtros 
const brightnees = document.getElementById('brightnees');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const blur = document.getElementById('blur');
const graysacle = document.getElementById('grayscale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturate = document.getElementById('saturated');
const negative = document.getElementById('negative');

const imgButton = document.getElementById('btn-img');
const textButton = document.getElementById('btn-text');

const btnCloseText = document.getElementById('btn-close-text');
const optionText = document.getElementById('option-text');
const btnCloseImg = document.getElementById('btn-close-img');
const optionImg = document.getElementById('option-img');

const btnLightMode = document.getElementById('btn-light-mode');
const btnDarkMode = document.getElementById('btn-dark-mode');

const memeDownload = document.getElementById('meme-download');
const btnDownload = document.getElementById('btn-download');

// Funciones

// Escribir texto en la parte superior imagen del meme

topText.addEventListener('keyup', () => {
    const topValue = topText.value;
    topImgText.innerText = topValue;
});

// Escribir texto en la parte inferior imagen del meme

bottomText.addEventListener('keyup', () => {
    const bottomValue = bottomText.value;
    bottomImgText.innerText = bottomValue;
});

// Sin texto superior

noUpperText.addEventListener('change', () => {
    if (noUpperText.checked) {

        topImgText.classList.add('disappear');

        ;
    } else {
        topImgText.classList.remove('disappear');
    }
});

// Sin texto superior

noBottomText.addEventListener('change', () => {
    if (noBottomText.checked) {

        bottomImgText.classList.add('disappear');
    } else {
        bottomImgText.classList.remove('disappear');
    }
});

// Elección del tipo de fuente

fontType.addEventListener('change', () => {
    const fontValue = fontType.value;
    topImgText.style.fontFamily = `${fontValue}`;
    bottomImgText.style.fontFamily = `${fontValue}`;
});

// fontType.addEventListener('change', () => {
//     const fontClass = fontType.value;
//     console.log(fontClass)
//     console.log(fontType)
//     topImgText.className = "";
//     bottomImgText.className = ""; // setea clas name como un string vacio
//     topImgText.classList.add(fontClass);
//     bottomImgText.classList.add(fontClass);
// });

// Elección del tamaño de la fuente

fontSize.addEventListener('input', () => {
    const fontSizeValue = fontSize.value;
    topImgText.style.fontSize = `${fontSizeValue}px`;
    bottomImgText.style.fontSize = `${fontSizeValue}px`;
});

// Alinear texto a la izquierda

alignTextLeft.addEventListener('click', () => {
    topImgText.style.textAlign = 'left';
    bottomImgText.style.textAlign = 'left';
});

// Alinear texto al centro

alignTextCenter.addEventListener('click', () => {
    topImgText.style.textAlign = 'center';
    bottomImgText.style.textAlign = 'center';
});

// Alinear texto a la derecha

alignTextRight.addEventListener('click', () => {
    topImgText.style.textAlign = 'right';
    bottomImgText.style.textAlign = 'right';
});

// Elegir el color de la letra

fontColor.addEventListener('input', () => {
    const textColorValue = fontColor.value;
    console.log(fontColor.value)
    topImgText.style.color = textColorValue;
    bottomImgText.style.color = textColorValue;
    fontColorText.innerHTML = textColorValue;
});

// Elegir el color del fondo donde va el texto

backgroundColor.addEventListener('input', () => {
    const backTextValue = backgroundColor.value;
    topImgText.style.backgroundColor = backTextValue;
    bottomImgText.style.backgroundColor = backTextValue;
    backgroundColorText.innerHTML = backTextValue;
});

// Fondo transparente

noBackgroundColor.addEventListener('change', () => {
    if (noBackgroundColor.checked) {
        topImgText.style.backgroundColor = 'transparent';
        topImgText.style.top = '0';
        topImgText.style.position = 'absolute';
        bottomImgText.style.backgroundColor = 'transparent';
        bottomImgText.style.top = '0';
        bottomImgText.style.position = 'absolute';
    } else {
        topImgText.style.backgroundColor = `${backgroundColor.value}`;
        topImgText.style.position = '';
        bottomImgText.style.backgroundColor = `${backgroundColor.value}`;
        bottomImgText.style.position = '';
    }
});

// Contorno de la letra

noOutline.addEventListener('click', () => {
    topImgText.style.webkitTextStroke = 'transparent';
    bottomImgText.style.webkitTextStroke = 'transparent';
});


clearOutline.addEventListener('click', () => {
    topImgText.style.webkitTextStroke = ' 0.5px white';
    bottomImgText.style.webkitTextStroke = ' 0.5px white';
});


darkOutline.addEventListener('click', () => {
    topImgText.style.webkitTextStroke = ' 0.5px white';
    bottomImgText.style.webkitTextStroke = ' 0.5px black';
});

// Espaciado

spacing.addEventListener('input', () => {
    const spacingText = spacing.value;
    topImgText.style.padding = `${spacingText}px`;
    bottomImgText.style.padding = `${spacingText}px`;
});

// Interlineado

lineSpaicing.addEventListener('change', () => {
    const lineSpaicingValue = lineSpaicing.value;
    topImgText.style.lineHeight = `${lineSpaicingValue}`;
    bottomImgText.style.lineHeight = `${lineSpaicingValue}`;
});



// URL de la imagen

inputUrl.addEventListener('keyup', (event) => {
    event.preventDefault();
    const inputUrlValue = inputUrl.value;
    memeImg.style.backgroundImage = `url("${inputUrlValue}"`;
    memeImg.style.backgroundRepeat = 'no-repeat';
    memeImg.style.backgroundPosition = 'center';
});

// Fondo de la imagen del meme

backgroundImgMeme.addEventListener('input', () => {
    const backImgMeme = backgroundImgMeme.value;
    memeImg.style.backgroundColor = backImgMeme;
    backImgMeme.innerHTML = backImgMeme;
});

// Estilos de fondos

backgroundStyle.addEventListener('change', () => {
    const styleValue = backgroundStyle.value;
    memeImg.style.backgroundBlendMode = styleValue;
});

// /////////////////////////////   Filtros

// Brillo

const finalFilter = () => {
    const brightneesValue = brightnees.value;
    const opacityValue = opacity.value;
    const contrastValue = contrast.value;
    const blurValue = blur.value;
    const grayscaleValue = grayscale.value;
    const sepiaValue = sepia.value;
    const hueValue = hue.value;
    const saturatedValue = saturate.value;
    const negativeValue = negative.value;
    // console.log(opacityValue);
    memeImg.style.filter = `brightness(${brightneesValue}) opacity(${opacityValue}) contrast(${contrastValue}%)  blur(${blurValue}px) grayscale(${grayscaleValue}%) sepia(${sepiaValue}%) hue-rotate(${hueValue}deg) saturate(${saturatedValue}%) invert(${negativeValue})`;
    //    console.log(`brightnees(${brightneesValue})`);
    //  console.log(memeImg)
};


brightnees.addEventListener('change', finalFilter);

opacity.addEventListener('change', finalFilter);

contrast.addEventListener('change', finalFilter);

blur.addEventListener('change', finalFilter);

grayscale.addEventListener('change', finalFilter);

sepia.addEventListener('change', finalFilter);

hue.addEventListener('change', finalFilter);

saturated.addEventListener('change', finalFilter);

negative.addEventListener('change', finalFilter);

// Restablecer filtros

const resetFilters = document.getElementById('reset-filters');

resetFilters.addEventListener('click', () => {
    brightneesvalue = '1';
    opacity.value = '1';
    contrast.value = '100';
    blur.value = '0';
    graysacle.value = '0';
    sepia.value = '0';
    hue.value = '0';
    saturated.value = '100';
    negative.value = '0';
    finalFilter();
});

// Cierre de la pestaña de opciones

// console.log(btnCloseText)

btnCloseText.addEventListener('click', () => {
    // console.log('cierra')
    optionText.classList.add('hide');
});

btnCloseImg.addEventListener('click', () => {
    // console.log('cierra')
    optionImg.classList.add('hide');
});


// Vincular cada boton del header con la pestaña correspondiente

imgButton.addEventListener('click', () => {

    optionImg.classList.remove('hide');
    optionText.classList.add('hide');
});

textButton.addEventListener('click', () => {
    optionText.classList.remove('hide');
    optionImg.classList.add('hide');
});

//Modo oscuro

const toggleMode = () => {
    const mode = document.body.classList.contains('dark-mode');
    if (!mode) {
        console.log('toggle to dark mode');
        btnDarkMode.classList.add('hide');
        btnLightMode.classList.remove('hide');
        document.body.classList.add('dark-mode');
    } else {
        console.log('toggle to light mode');
        btnLightMode.classList.add('hide');
        btnDarkMode.classList.remove('hide');
        document.body.classList.remove('dark-mode');
    }
}

btnDarkMode.addEventListener('click', toggleMode);

btnLightMode.addEventListener('click', toggleMode);

// Boton de descarga 

btnDownload.addEventListener('click', () => {
    domtoimage.toBlob(memeDownload)
        .then(function (blob) {
            saveAs(blob, 'meme.png');
        });
});

// Fijar pestaña de texto o imagen al body 

window.addEventListener('load', () => {
    console.log('funciona');
    console.log(window.innerWidth);
    if (window.innerWidth > 480) {
        optionImg.classList.remove('hide');
        optionText.classList.add('hide');
    }
});