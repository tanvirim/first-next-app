import React, { Suspense } from 'react';

import UserTable from './userTable';

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <div>users</div>

      <Suspense fallback={<p> Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
