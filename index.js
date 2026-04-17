const imagePath = [
    'assets/IMG_19.JPG',
    'assets/IMG_9.JPG',
    'assets/IMG_12.JPG',
    'assets/IMG_16.JPG',
    'assets/IMG_14.JPG',
    'assets/IMG_17.JPG',
    'assets/IMG_15.JPG',
    'assets/IMG_4.JPG',
    'assets/IMG_5.JPG',
    'assets/IMG_2.JPG',
    'assets/IMG_7.JPG',
    'assets/IMG_8.JPG',
];

// Select the carousel inner container
const carouselInner = document.querySelector('.carousel-inner');

// Loop through the image paths and create carousel items
imagePath.forEach((imagePath, index) => {
    // Create a div for the carousel item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    
    // Add 'active' class to the first item
    if (index === 0) {
        carouselItem.classList.add('active');
    }

    // Create an img element
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.classList.add('d-block', 'w-100');
    imgElement.alt = `Slide ${index + 1}`;

    // Append the img to the carousel item
    carouselItem.appendChild(imgElement);

    // Append the carousel item to the carousel inner container
    carouselInner.appendChild(carouselItem);
});

