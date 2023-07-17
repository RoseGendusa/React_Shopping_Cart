import CCImage from "../../assets/cc.png";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="Payment">
      <div className="row">
        <div className="col-6">
          <p> Current credit card</p>
          <img src={CCImage} alt="credit card" />
        </div>
        <div className="col-6">
          <p> Add new credit card</p>
          <div className="empty-card">
            <i class="fa-light fa-plus" onClick={()=>{
                    document.getElementById('upload').click()
                }}></i>
               <input type="file" id="upload" />
          </div>
        </div>
      </div>
      <form>

        <label htmlFor="name">Name of card holder</label>
        <input type="text" id="name" />
        <label htmlFor="number">Credit card number</label>
        <input type="text" id="number" />

        <div className="row">
            <div className="col-6">
                <label htmlFor="expire">Expiration</label>
                <input type="date" id="expire"/>
            </div>

            <div className="col-6">
                <label htmlFor="cvv">CVV <i class="fa-sharp fa-solid fa-circle-info"  ></i></label>
                <input type="text" id="cvv"/>
            </div>
        </div>

        <div className="buttons">
            <button>Make a payment</button>
            <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
