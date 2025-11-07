import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
import './global.css'
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <div className='flex'>
          <Product/>
        <ProductDetails/>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  )
}

export default App
