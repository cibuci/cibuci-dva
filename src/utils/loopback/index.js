import fetcher from './fetcher';

function parseJSON(response) {
  const { headers, json } = response;
  if (!headers.has('x-total-count')) {
    return {
      data: json,
    };
  } else {
    return {
      data: json,
      total: parseInt(headers.get('x-total-count').split('/').pop(), 10),
    };
  }
}

export default class LoopbackResource {
  constructor(name) {
    this.name = name;
  }

  getList(params) {
    const api = `/${this.name}`;
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {};
    query.where = { ...params.filter };
    if (params.include) query.include = params.include;
    if (params.fields) query.fields = { ...params.fields };
    if (field) query.order = [`${field} ${order}`];
    if (params.order) query.order = params.order;
    if (perPage > 0) {
      query.limit = perPage;
      if (page >= 0) {
        query.skip = (page - 1) * perPage;
      }
    }

    return fetcher(api, { query })
      .then(parseJSON);
  }

  getById(params) {
    const api = `/${this.name}/${params.id}`;
    return fetcher(api)
      .then(parseJSON);
  }

  findOne(params) {
    const api = `/${this.name}/findone`;
    const query = {
      where: { ...params.filter },
    };
    return fetcher(api, { query })
      .then(parseJSON);
  }

  getMany(params) {
    const api = `/${this.name}`;
    const listId = params.ids.map((id) => {
      return { id };
    });
    const query = {
      where: { or: listId },
    };
    return fetcher(api, { query })
      .then(parseJSON);
  }

  getManyReference(params) {
    const api = `/${this.name}`;
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {};
    query.where = { ...params.filter };
    query.where[params.target] = params.id;
    if (params.include) query.include = params.include;
    if (params.fields) query.fields = { ...params.fields };
    if (field) query.order = [`${field} ${order}`];
    if (params.order) query.order = params.order;
    if (perPage > 0) {
      query.limit = perPage;
      if (page >= 0) {
        query.skip = (page - 1) * perPage;
      }
    }

    return fetcher(api, { query })
      .then(parseJSON);
  }

  updateById(params) {
    const api = `/${this.name}/${params.id}`;
    return fetcher(api, { body: params.data }, 'PATCH')
      .then(parseJSON);
  }

  create(params) {
    const api = `/${this.name}`;
    return fetcher(api, { body: params.data }, 'POST')
      .then(parseJSON);
  }

  deleteById(params) {
    const api = `/${this.name}/${params.id}`;
    return fetcher(api, {}, 'DELETE')
      .then(parseJSON);
  }
}
