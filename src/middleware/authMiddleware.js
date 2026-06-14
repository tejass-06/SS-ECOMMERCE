const authMiddleware = () => {
  const token = localStorage.getItem('token');

  return !!token;
};

export default authMiddleware;
