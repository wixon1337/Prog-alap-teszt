const osszeadas = (a, b) => {
  return a + b;
};

const kivonas = (a, b) => {
  return a - b;
};

const szorzas = (a, b) => {
  return a * b;
};

const osztas = (a, b) => {
  if (b === 0) {
    console.log('Nullával nem osztunk.');
  } else {
    return a / b;
  }
};

module.exports = {
  osszeadas,
  kivonas,
  szorzas,
  osztas
};
