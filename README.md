# spin-360

spin-360 is a npm project.

If you want use it:

`npm install spin-360`

spin-360 360 derece detaylı resim gösterimi için geliştirilmiş ve geliştirilmektedir. spin-360 is 360 degree detailed image presentation plugin

360 derece ürün gösterimi ve özellikle e-ticaret siteleri için uygundur. This plugin is avalible for e-Commerce sites.

## API

$.spin360(options);

## Parametreler - Options

* `id`: Type (`String`) - 360 derece görselin gösterileceği alanın 'id' si. Default (`360Image`)
* `width`: Type (`Integer`) Görsel alanının genişliği Default (`500`)
* `height`: Type (`Integer`) - Görsel alanının yüksekliği Default (`500`)
* `datas`: Type (`Array`) - 360 derece gösterilmesi istenen nesnenin sıralı listesi.
* `imgClass`: Type (`String`) - Görsellerin alacağı class değeri. Default (`spin-image`)
* `lazyLoad`: Type (`boolean`) - Aktif olmayan görsellerin sayfaya yüklenmesini bekletir. Aktif olduktan sonra yükleyip, yüklenme zamanını dengeler. - Default(`true`)

## Kullanımı - Usage

İlk olarak 'Jquery' ve 'spin-360' scriptleri sayfaya dahil edilir.

```javascript
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="scripts/spin360.js"></script>
Daha sonra 360 derece görselimizin görüneceği alan oluşturulur.
```

```html
<div id="360Image"></div>
```

Son olarak spin-360 pluginimiz tetiklendikten sonra projemiz kullanılmaya hazırdır.

```javascript
window.sp = $.spin360({
    id: "360Image",
    width: 500,
    height: 500,
    imgClass: 'spin-image',
    datas: [
        "images/Tv/product01.jpg",
        "images/Tv/product02.jpg",
        "images/Tv/product03.jpg",
        "images/Tv/product04.jpg",
        "images/Tv/product05.jpg",
        "images/Tv/product06.jpg",
        "images/Tv/product07.jpg",
        "images/Tv/product08.jpg",
        "images/Tv/product09.jpg",
        "images/Tv/product10.jpg",
        "images/Tv/product11.jpg",
        "images/Tv/product12.jpg",
        "images/Tv/product13.jpg",
        "images/Tv/product14.jpg",
        "images/Tv/product15.jpg",
        "images/Tv/product16.jpg",
        "images/Tv/product17.jpg",
        "images/Tv/product18.jpg",
        "images/Tv/product19.jpg",
        "images/Tv/product20.jpg",
        "images/Tv/product21.jpg",
        "images/Tv/product22.jpg",
        "images/Tv/product23.jpg",
        "images/Tv/product24.jpg",
        "images/Tv/product25.jpg",
        "images/Tv/product26.jpg",
        "images/Tv/product27.jpg",
        "images/Tv/product28.jpg",
        "images/Tv/product29.jpg",
        "images/Tv/product30.jpg",
        "images/Tv/product31.jpg",
        "images/Tv/product32.jpg",
        "images/Tv/product33.jpg",
        "images/Tv/product34.jpg",
        "images/Tv/product35.jpg",
        "images/Tv/product36.jpg"
    ],
    lazyLoad: true
});
```

Projeyi çalıştırdıktan sonra durdurmak istiyorsanız:

window.sp.destroy();
## Authors

Hepsiburada
