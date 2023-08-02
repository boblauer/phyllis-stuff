const glob = require('glob');
const imageSize = require('image-size')

const images = glob.sync(__dirname + '/../public/images/*.webp');

images.map((image) => {
  return image.split('/').pop()
}).sort((image1, image2) => {
  console.log({ image1, image2 });
  const [image1Number] = image1.match(/\d+[.\s]/);
  const [image21Number] = image2.match(/\d+[.\s]/);

  return parseInt(image1Number) - parseInt(image21Number);
}).forEach((img) => {
  const size = imageSize(__dirname + `/../public/images/${img}`);
  console.log(size.height)
});
