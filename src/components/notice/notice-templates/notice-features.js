import {features} from "../../../constants/features";

export const getNoticeFeatures = () => {
  return `<fieldset class="ad-form__element ad-form__element--wide features">
      <legend>Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер</legend>
      ${features
        .map((feature) => {
          const {value, title} = feature;
          return `<input type="checkbox" name="features" value="${value}" id="feature-${value}" class="feature__checkbox visually-hidden">
              <label class="feature feature--${value}" for="feature-${value}">${title}</label>`;
        })
        .join(`\n`)}
    </fieldset>`;
};
