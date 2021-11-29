let inputUpld = document.querySelector('#imgUpload');
let uploaded = document.querySelector('.uploaded-img');
inputUpld.addEventListener('change', () => {
    let file = inputUpld.files[0];
    if (validFileType(file)) {
        uploaded.src = URL.createObjectURL(inputUpld.files[0]);
    } else {
        console.log("not img");
    }
});



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