import './assets/style/base.css';
import image18 from './assets/image/18.png';
import image1 from './assets/image/1.jpeg';

let isAddImage = false;
function addImage2body() {
  const img = new Image();
  img.src = image18;

  img.onclick = function () {
    if (isAddImage) {
      return;
    }

    isAddImage = true;
    const image = new Image();
    image.src = image1;
    document.body.appendChild(image);
  };

  document.body.appendChild(img);
}

addImage2body();
