import Shake from './shake';

let shake = new Shake({
    threshold: 15
});

shake.start();

let num = 0;
let contain = document.querySelector('.console');

shake.on('shake', (x, y, z) => {
    num++;
    contain.innerHTML = `恭喜你获得了${num}个妹子`;
});
