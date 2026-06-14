import './UsersAdmin.css';

const UsersAdmin = () => {
  const users = JSON.parse(localStorage.getItem('user'))
    ? [JSON.parse(localStorage.getItem('user'))]
    : [];

  return (
    <section className="users-admin p-10">
      <h1 className="text-5xl font-bold mb-8">Manage Users</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Customer</td>
            </tr>
          ))}
        </tbody>
      </table>

      {!users.length && <p className="text-zinc-400">No local users found.</p>}
    </section>
  );
};

export default UsersAdmin;
