let inputUpld = document.querySelector('#imgUpload');
let uploaded = document.querySelector('.uploaded-img');
let errMsg = document.querySelector('.errMsg');
let dragger = document.querySelector('.dragger');

inputUpld.addEventListener('change', () => {
    let file = inputUpld.files[0];
    if (validFileType(file)) {
        uploaded.src = URL.createObjectURL(inputUpld.files[0]);
        errMsg.classList.add('hide');
    } else {
        errMsg.classList.remove('hide');
    }
});


function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    console.log(ev);
}


const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];

function validFileType(file) {
    return fileTypes.includes(file.type);
}