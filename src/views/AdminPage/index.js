import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout';
import AdminContent from './component';

const AdminPage = () => {
  const roleInfo = useSelector(state => state.role.roleState);
  const navigate = useNavigate();
  const permission = roleInfo?.data?.Role;

  useEffect(() => {
    if (!permission) {
      return;
    } else if (permission !== "admin") {
      navigate("/404")
    } else {
      navigate("/admin")
    }
  }, [navigate, permission]);

  return (
    <Layout title="Rikai - Management Articles">
      <AdminContent/>
    </Layout>
  )
}

export default AdminPage