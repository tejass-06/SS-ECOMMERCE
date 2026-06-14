const adminMiddleware = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user?.role === 'admin';
};

export default adminMiddleware;
