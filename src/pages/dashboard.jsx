import { useEffect, useState } from "react";
import axios from "axios";
import DashboardWidget from "components/dashboard/DashboardWidget";

const Dashboard = () => {
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState([0]);
  async function getProducts() {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    } catch (error) {}
  }
  async function getOrders() {
    try {
      const response = await axios.get("http://localhost:8000/orders");
      setOrders(response.data);
    } catch (error) {}
  }
  useEffect(() => {
    getProducts();
    getOrders();
  }, []);
  
  const successStatus = orders.filter((order) => order.status === 1);
  const orderPrice = successStatus.map((i) => i.price);
  const totalPrice = orderPrice.reduce((a, b) => {
    return a + b;
  }, 0);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد محصولات"
            icon="tshirt"
            value={products.length}
            color="bg-primary"
            testId="products-count"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="درآمد کل"
            icon="coins"
            value={totalPrice + " تومان"}
            color="bg-warning"
            testId="total-incomes"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد سفارشات موفق"
            icon="shopping-cart"
            value={successStatus.length}
            color="bg-danger"
            testId="successful-orders-count"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
