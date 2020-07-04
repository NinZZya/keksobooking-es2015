import AbstractComponent from './abstract-component';

const createPinsTemplate = () => {
  return (
    `<div class="map__pins">
      <div class="map__overlay">
        <h2 class="map__title">И снова Токио!</h2>
      </div>
    </div>`
  );
};


export default class PinsComponent extends AbstractComponent {
  getTemplate() {
    return createPinsTemplate();
  }
}
