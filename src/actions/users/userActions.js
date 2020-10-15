import axios from 'axios';

export const fetchUsers = () => axios.get('https://api.github.com/users');

export const fetchUser = userUrl => axios.get(userUrl);