import faker from 'faker';

const mount = (el) => {
  let productsList = '';

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    productsList += `<div>${name}</div>`;
  }

  el.innerHTML = productsList;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el);
  }
}

export { mount };
