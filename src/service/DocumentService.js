import api from '../client/api';

async function listAll({ orderBy }) {
  const params = {
    sort: orderBy.map((item) => `${item.field},${item.direction}`),
  };

  return api.get('/documents', { params });
}

export default {
  listAll,
};
