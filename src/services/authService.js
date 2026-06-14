/*
Future Backend

export const login =
async credentials => {
return axios.post(
"/api/auth/login",
credentials
);
};

*/

export const login = async (credentials) => {
  return {
    success: true,
    token: 'demo-token',
    user: {
      id: 1,
      name: 'Demo User',
      email: credentials.email,
    },
  };
};

export const logout = () => {
  localStorage.removeItem('token');

  localStorage.removeItem('user');
};
