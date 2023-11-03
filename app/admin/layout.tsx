import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <aside className='w-64 bg-slate-300' style={{ height: '100vh' }}>
        <p>admin sidebar</p>
      </aside>
      <div> {children}</div>
    </div>
  );
};

export default AdminLayout;
