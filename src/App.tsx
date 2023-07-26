import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutePages from './routes';
import GlobalStyled from './styles/GlobalStyled';
import ResetCSS from './styles/ResetCSS';

function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyled />
      <RoutePages />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;

