import React from 'react';

import UserTable from './userTable';

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <div>users</div>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
