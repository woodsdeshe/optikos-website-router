import axios from 'axios';

export default {
    register(user) {
        return axios.post('/signup', user)
    },

    login(user) {
        return axios.post('/login', user)
      },
}