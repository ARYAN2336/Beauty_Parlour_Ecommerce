import React from 'react'
import aboutus from '../images/aboutus.jpg'
import Meta from '../components/Meta'

const About = () => {
  return (
    <>
   <Meta title={"About Us"} />
    <div className="row contactus ">
    <div className="col-md-6 ">
      <img
        src={aboutus}
        alt="contactus"
        style={{ width: "50%", }}
      />
    </div>
    <div className="col-md-4">
      <p className="text-justify mt-2">
      About Us – Mann Beauty Parlour 
Welcome to Mann Beauty Parlour, your ultimate destination for beauty and self-care. We are dedicated to providing premium beauty services and high-quality beauty products to enhance your natural glow and confidence.

Who We Are
At Mann Beauty Parlour Name, we believe that beauty is more than just appearance—it’s about feeling confident and radiant from within. With years of experience in the beauty industry, our expert professionals offer top-notch services tailored to your unique needs.

Our Services
We offer a wide range of beauty services, including:
💆‍♀️ Skincare Treatments – Facials, anti-aging treatments, skin rejuvenation
💇‍♀️ Hair Services – Haircuts, styling, coloring, and treatments
💅 Nail Care – Manicures, pedicures, nail extensions
💄 Makeup & Bridal Services – Professional makeup for special occasions
🧖‍♀️ Spa & Wellness – Massages, body treatments, and relaxation therapies


Visit Us Today!
Let us pamper you with the best beauty treatments and premium products. Whether you're looking for a relaxing spa day or high-quality beauty essentials, Mann Beauty Parlour Name is here to make you feel and look your best!

📍 Location: botad,india
📞 Contact: 7016655338
🌐 Website: Mann Beauty Parlour 
      </p>
    </div>
  </div>
  </>
  )
}

export default About