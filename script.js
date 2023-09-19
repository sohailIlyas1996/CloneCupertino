// Import GSAP and ScrollTrigger libraries if you haven't already

// ScrollTrigger configuration
gsap.registerPlugin(ScrollTrigger);

// Select the fleft elements
const fleftElements = document.querySelectorAll('.fleftelem');

// Select the images in the fright section
const frightImages = document.querySelectorAll('#fright .images img');

// Create a timeline for the image animations
const imageAnimation = gsap.timeline({
  defaults: { duration: 0.5, ease: 'power2.out' },
});

// Animate the opacity of the images in the fright section
frightImages.forEach((image, index) => {
  imageAnimation.to(image, { opacity: index === 0 ? 1 : 0 }, `image${index}`);
});

// Update the timeline when scrolling through fleft elements
fleftElements.forEach((element, index) => {
  ScrollTrigger.create({
    trigger: element,
    start: 'top center',
    end: 'bottom center',
    animation: imageAnimation,
    scrub: true,
    markers: false, // Remove markers to hide scroll start and scroll end
  });
});
