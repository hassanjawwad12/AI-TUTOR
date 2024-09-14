import { Route, Routes } from 'react-router-dom';
import Landing from './landing/pages/Page';
import AuthRoutes from './auth/Routes';
import DashWrapper from './dashboard/Wrapper';
import DashRoutes from './dashboard/Routes';
import AuthWrapper from './auth/Wrapper';

function App() {

  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route 
        path='/auth/*'
        element={
          <AuthWrapper>
            <AuthRoutes />
          </AuthWrapper>
        }
      >
      </Route>
      <Route 
        path="/dashboard/*"
        element={
          <>
            <DashWrapper>
              <DashRoutes />
            </DashWrapper>
          </>
        }
      />
    </Routes>
  )
}

export default App
