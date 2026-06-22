import Card from './components/Card';
const name = '무선 키보드';
const price = 39000;
const brand = 'EZTECH';

function App() {
  return (
    <>
      <Card name={name} price={price} brand={brand}></Card>
    </>
  );
}

export default App;
