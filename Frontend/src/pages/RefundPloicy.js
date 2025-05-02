import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">

           <b>Refund Policy for Services Mann Beauty Parlour</b> <br />
No Refunds on Services:<br />
 Once a service has been provided haircuts, facials, waxing, etc., refunds will not be issued.<br />
Service Satisfaction: If you are dissatisfied with a service, you must inform us within 24-48 hours. We offer a free correction where possible, but no refunds.<br />
Appointment Cancellations:<br />
Cancellations must be made at least 24 hours in advance to avoid a cancellation fee.<br />
Deposits for pre-booked services are non-refundable, but they can be rescheduled once.<br />
Refund Policy for Products<br />
Returns & Exchanges:<br />
Products must be unused, unopened, and in original packaging to be eligible for a return.<br />
Returns must be made within 7 days of purchase with a valid receipt.<br />
Non-Refundable Items:<br />
Opened or used products due to hygiene reasons.<br />
Personal care items lipsticks, mascaras, skincare, etc..<br />
Sale or discounted items.<br />
Defective or Damaged Products:<br />
If you receive a defective or damaged product, contact us within 48 hours for an exchange.<br />
Refund Policy for Gift Cards & Prepaid Packages<br />
Gift cards and prepaid services are non-refundable and non-transferable.<br />
If you wish to change a prepaid service, the amount may be used as a credit towards another service.<br />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPloicy;
