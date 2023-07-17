import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Container from "./components/Container/Container";
import Payment from "./components/Payment/Payment";
import data from "./data.json";
import './App.css';

const App = () => {
  const [items, setItems] = useState(data);
  const [totalPrice, setTotalPrice] = useState(0);

  function calcTotal() {
    let total = 0;
    for (let item of items) {
      total += item.price * item.qty;
    }
    setTotalPrice(total);
  }


  const inc = (id) => {
    const updatedItems = [...items];
    const index = updatedItems.findIndex((i) => i.id === id);
    updatedItems[index].qty++;
    setItems(updatedItems);
    calcTotal();
  };

  const removeAll = () => {
    setItems([])
    setTotalPrice(0);
  };

  const remove = (id) => {
    let updatedItems = [...items];
    updatedItems = updatedItems.filter((i) => i.id !== id);
    setItems(updatedItems);
    let total = 0;
    for (let item of updatedItems) {
      total += item.price * item.qty;
    }
    setTotalPrice(total);
  };

  const dec = (id) => {
    const updatedItems = [...items];
    const index = updatedItems.findIndex((i) => i.id === id);
    if (updatedItems[index].qty > 0) updatedItems[index].qty--;
    setItems(updatedItems);
    calcTotal();
  };

  return (
    <Container>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Cart items={items} onInc={inc} onDec={dec} subtotal={totalPrice} remove={remove} removeAll={removeAll}/>
        </div>
        <div className="col-12 col-lg-6" id="pay">
          <Payment />
        </div>
      </div>
    </Container>
  );
};

export default App;
