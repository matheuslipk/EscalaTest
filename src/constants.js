export const cores = {
  primaria: '#7159c1',
  secundaria: '#77f',
  textPrimary: '#dde',
  textSecundary: '#444',
  textTerciaria: '#999',
  background: '#6DD5FA',
  backgroundInput: '#7159c144',
  borderTable: '#ccc',
  success: '#0f0',
  info: '#55a',
};

export const tamanhos = {
  alturaHeader: '60px',
  widthDrawer: '300px',
  widthMin: '650px',
  widthMed: '1100px',
  widthMax: '1350px',
};

export const zIndex = {
  prioridadeMedia: 10,
  header: 20,
  drawer: 30,
  modal: 100,
};

export const f = {
  formatPrice: (num) => `R$ ${Number.parseFloat(num, 10).toFixed(2)}`,
};
