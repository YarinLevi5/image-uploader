let inputUpld = document.querySelector('#imgUpload');
let uploadedImg = document.querySelector('.uploaded-img');
let errMsg = document.querySelector('.errMsg');
let dragger = document.querySelector('.dragger');
let uploader = document.querySelector('.uploader');
let uploading = document.querySelector('.uploading');
let uploaded = document.querySelector('.uploaded');

function upload(file) {
    if (validFileType(file)) {
        uploader.classList.add('hide');
        uploading.classList.remove('hide');
        errMsg.classList.add('hide');
        setTimeout(() => {
            uploading.classList.add('hide');
            uploaded.classList.remove('hide');
            uploadedImg.src = URL.createObjectURL(file);
        }, 4000);

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