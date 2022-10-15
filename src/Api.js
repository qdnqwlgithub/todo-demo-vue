import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URI,
  timeout: 2000
});

const createApi = () => {

  instance.interceptors.request.use(async function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  return {

    // (C)reate
    createNew(text, completed) {
      return instance.post('/todos', {title: text, completed: completed,updateTime: new Date()})
    },

    // (R)ead
    getAll() {
      return instance.get('/todos', {
        transformResponse: [function (data) {
          return data ? JSON.parse(data)._embedded.todos : data;
        }]
      })
    },

    // (U)pdate
    updateForId(id, text, completed) {
      return instance.put('todos/' + id, {title: text, completed: completed,updateTime: new Date()})
    },

    // (D)elete
    removeForId(id) {
      return instance.delete('todos/' + id)
    }
  }
}

export default createApi
