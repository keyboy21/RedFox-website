import MainLayout from '../../components/MainLayout.js';
import router from 'next/router';

export default function Id() {
 
  return (
    <MainLayout>
      <h1>{router.query.id}</h1>
    </MainLayout>
  )
}
