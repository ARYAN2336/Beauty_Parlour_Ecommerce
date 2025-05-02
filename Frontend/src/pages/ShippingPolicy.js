import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shippingg Pplicy"} />
      <BreadCrumb title="Shippingg Pplicy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
           <b>Shipping Policy for Mann Beauty Parlour & Products</b> <br/>  
            At Mann Beauty Parlour Name, we ensure safe and timely delivery of beauty products to our customers. Please review our shipping policy below.<br/>  


          <b>Shipping for Beauty Products</b>  <br/>  
<b>Order Processing</b><br/>  
Orders are processed within 1-2 business days (excluding weekends & holidays).<br/>  
You will receive an order confirmation email once your purchase is placed.<br/>  
Tracking details will be shared once your order is shipped.<br/>  
<b>Shipping Time & Charges</b><br/>  
Standard Shipping: 5-7 business days ($X or free for orders above $X).<br/>  
Express Shipping: 2-3 business days ($X extra charge).<br/>  
Same-Day Delivery: Available for local orders placed before 12 PM ($X extra charge).<br/>  
<b>International Shipping</b><br/>  
Currently, we ship only within [india].<br/>  
International orders may be subject to custom duties and taxes, which are the customer’s responsibility.<br/>  

<b>Shipping for Beauty Parlour Services</b><br/>  
If you have booked a home service (salon at home), our professionals will arrive within the scheduled time.<br/>  
Any delay due to unforeseen circumstances will be communicated in advance.<br/>  

<b>Order Issues & Returns</b><br/>  
If your order is delayed or lost, please contact our support at [aryanmunjpara17@gmai;.com/7016655338].<br/>  
If you receive a damaged or incorrect product, notify us within 48 hours for a replacement.<br/>  



            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
