# Адаптивная вёрстка двух страниц по макету

#### Макет находится здесь:
https://www.figma.com/file/NsD6GG3ZWD29ZWzkCMUkjU/Youtalk---Blog?t=uSFxX1tmP6DXIxIn-1

## Основные особенности вёрстки
<ol>
  <li>Стилизация при помощи препроцессора SCSS</li>
  <li>Наименование классов в соответствии с методологией БЭМ</li>
  <li>Использование базового JavaScript</li>
</ol>

### Подробности
<p>Данная вёрстка не полностью соответствует макету.</p>
<p>В связи с тем, что сам макет не является "pixel perfect", то и при вёрстке по нему не ставилась такая задача.</p>
<p>Макет состоит из двух страниц: blog.html и article.html.</p>
<p>Вёрстка адаптирована в том числе под ширину экрана в 1920px, в то время как дизайн макета предусматривает максимальную ширину экрана в 1440px.</p>
<p>Дизайн "подвала" при разной ширине экрана отличается от такового из дизайна макета, частично соответствуя актуальному <a href="https://youtalk.ru/">сайту</a> проекта YouTalk.</p>
<p>Осуществлён базовый "сброс" стилей для более предсказуемого поведения элементов на разных браузерах.</p>
<p>С этой же целью реализован перевод в условные единицы измерения rem и em.</p>

<p><strong>Прочие особенности, не предусмотренные дизайном макета:</strong></p>
<ol>
    <li>Реализация с помощью JavaScript всплывающего мобильного меню при нажатии на "бургер" кнопку.</li>
    <li>Изменение стилей некоторых кнопок и карточек при наведении курсора.</li>
    <li>Частично изменена цветовая палитра страниц с целью создания единого стиля.</li>
    <li>Реализована возможность перехода между страницами при нажатии на соответствующие ссылки.</li>
</ol>