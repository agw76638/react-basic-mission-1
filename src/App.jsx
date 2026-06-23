import Card from './components/Card';
import ProductCard from './components/ProductCard';
const name = '무선 키보드';
const price = 39000;
const brand = 'EZTECH';

const products = [
  { id: 1, name: '무선 키보드', price: 39000, brand: 'EZTECH' },
  { id: 2, name: '무선 마우스', price: 29000, brand: 'EZTECH' },
  { id: 3, name: '모니터', price: 199000, brand: 'EZTECH' },
];

function App() {
  return (
    <>
      <Card name={name} price={price} brand={brand}></Card>
      <ProductCard products={products} />
    </>
  );
}

export default App;
