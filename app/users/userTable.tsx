import Link from 'next/link';
import React, { use } from 'react';
import { sort } from 'fast-sort';

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {});
  const users: Users[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <Link href={'/users?sortOrder=name'}>Name</Link>
            </th>
            <th>
              <Link href={'/users?sortOrder=email'}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
