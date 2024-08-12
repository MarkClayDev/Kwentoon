const images = []; // This array should be populated with the paths to your uploaded images
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Example image paths, replace with actual image URLs
    images.push('path/to/image1.jpg');
    images.push('path/to/image2.jpg');
    // Add more images as needed

    const mangaImage = document.getElementById('manga-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function updateImage() {
        if (images.length > 0) {
            mangaImage.src = images[currentIndex];
        }
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Initial load
    updateImage();
});
