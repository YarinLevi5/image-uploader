let inputUpld = document.querySelector('#imgUpload');
let uploaded = document.querySelector('.uploaded-img');
let errMsg = document.querySelector('.errMsg');
let dragger = document.querySelector('.dragger');

function upload(file) {
    if (validFileType(file)) {
        uploaded.src = URL.createObjectURL(file);
        errMsg.classList.add('hide');
    } else {
        errMsg.classList.remove('hide');
    }
};

inputUpld.addEventListener('change', () => {
    let file = inputUpld.files[0];
    upload(file);
})

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    let file = ev.dataTransfer.files[0];
    upload(file);
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