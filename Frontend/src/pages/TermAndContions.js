import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
          <b>  Terms and Conditions for Mann Beauty Parlour & Products</b><br/>
These Terms and Conditions govern the use of Mann Beauty Parlour services and the purchase of our beauty products. By accessing our services or purchasing our products, you agree to these terms.<br/>

<b>Beauty Parlour Services</b><br/>
<b>Appointments & Cancellations</b><br/>
Appointments must be booked in advance via phone, website, or in person.<br/>
Cancellations must be made at least 24 hours before the scheduled appointment to avoid cancellation fees.<br/>
Late arrivals more than 15 minutes may result in service rescheduling or reduced service time.<br/>


<b>Service Satisfaction</b><br/>
If you are not satisfied with a service, you must report it within 24 hours for a possible correction.<br/>
No refunds will be provided for completed services.<br/>


<b>Health & Safety</b><br/>
Clients must inform us of any skin conditions, allergies, or medical concerns before receiving any treatment.<br/>
We have the right to refuse service if we believe a treatment may cause harm.<br/>


<b>Beauty Products</b><br/>
<b>Orders & Payments</b><br/>
All product prices are listed in indian and are subject to change without notice.<br/>
Full payment must be made at the time of purchase.<br/>
Products must be unused, unopened, and in original packaging to be eligible for returns within 7 days.<br/>
Used, opened, or personal care items lipsticks, mascaras, skincare cannot be returned for hygiene reasons.<br/>
Damaged or defective products must be reported within 48 hours for replacement.<br/>


<b>Liability & Disclaimer</b><br/>
Mann Beauty Parlour is not responsible for any allergic reactions or adverse effects caused by treatments or products.<br/>
We provide expert services, but results may vary from person to person.<br/>


<b>Privacy Policy</b><br/>
We respect customer privacy and will not share personal details with third parties without consent.<br/>
Payment information is securely processed, and we do not store credit card details.<br/>


<b>Amendments to Terms & Conditions</b><br/>
We reserve the right to update these terms at any time. Continued use of our services/products means you accept the revised terms.<br/>



            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;
