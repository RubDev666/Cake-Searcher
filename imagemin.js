import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';

await imagemin(['./images/**/*.{jpg,png}'], {
	destination: './dist',
    plugins: [
		imageminWebp({quality: 50}),
		/*imageminJpegtran(),
		imageminPngquant({
			quality: [0.3, 0.5]
		})*/
	]
});

console.log('Images optimized');

//en la terminal ejecutar - node imagemin.js