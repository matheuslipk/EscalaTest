import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unimed.coop.br/unimed/v3/unimeds/',
});
