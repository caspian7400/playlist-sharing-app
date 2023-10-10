import Jimp from "jimp";

const getImage = async () => {
    const pogimage = await Jimp.read('https://picsum.photos/200/300');
    const image = pogimage.normalize();
    const uniqueColors = new Set();

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
        const r = image.bitmap.data[idx + 0];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];
        uniqueColors.add(JSON.stringify({r,g,b}));
    });
    console.log(uniqueColors.size);
}
getImage();