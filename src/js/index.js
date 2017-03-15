import Shake from './shake';
import data from './data';

class ShakeGame {

    constructor(options) {
        this.shakeTop = document.querySelector('.shake-top');
        this.shakeBottom = document.querySelector('.shake-bottom');
        this.shakeCard = document.querySelector('.shake-card');
        this.shakeSmallPhoto = document.querySelector('.shake-card-photo');
        this.sketch = this.shakeTop.querySelector('span');
        this.shakeInfo = document.querySelector('.shake-info');
        this.shake = new Shake({
            threshold: 15
        });
        this.randomSketch();
        this.audio = document.querySelector('.audio');
        document.addEventListener('WeixinJSBridgeReady', () => {
            this.audio.muted = true;
            this.audio.play();
            setTimeout(() => {
                this.audio.muted = false;
            }, 2000);
        }, false);
        this.shake.start();
        this.upDate();
        this.events();
    }

    randomSketch() {
        let names = ['妹子', '女票', '老婆', '老公', '男神', '男票', '知己', '红颜', '蓝颜'];
        let loop = () => {
            this.sketch.innerHTML = `找${names[Math.floor(Math.random() * names.length)]}`;
            setTimeout(loop, 300);
        }
        setTimeout(loop, 300);
    }

    // 请求数据
    upDate() {
        this.data = data;
    }

    // 打开天窗说亮话
    open() {
        this.audio.play();
        this.imgUrl = `url(${this.data[Math.floor(Math.random() * this.data.length)]})`;
        this.shakeTop.classList.add('translate');
        this.shakeBottom.classList.add('translate');
        document.body.style.backgroundImage = this.imgUrl
        this.shakeCard.style.opacity = 1;
        this.shakeSmallPhoto.style.backgroundImage = this.imgUrl;

        setTimeout(() => {
            this.shakeTop.classList.remove('translate');
            this.shakeBottom.classList.remove('translate');
        }, 2000);
    }

    showInfo() {
        this.shake.stop();
        this.shakeInfo.classList.add('show');
        this.shakeInfo.style.backgroundImage = this.imgUrl;
    }

    events() {
        this.shake.on('shake', this.open.bind(this));
        this.shakeCard.addEventListener('touchstart', () => {
            history.pushState({}, 'info', window.location.href + '#info');
            this.showInfo();
        });

        window.addEventListener('popstate', () => {
            if (window.location.hash !== 'info') {
                this.shakeInfo.classList.remove('show');
            }
        });
    }

}

let shakeGame = new ShakeGame({});
