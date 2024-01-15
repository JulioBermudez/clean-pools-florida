import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <hr />
      <Paragraph>
        Welcome to Clean Pools Florida, your premier destination for exceptional pool maintenance and cleaning services. We take pride in being the go-to pool care service for homeowners and businesses in Miramar, Pembroke Pines, Cooper City, and the surrounding areas.
      </Paragraph>
      <Paragraph>
        Our journey began with a simple yet profound mission – to provide unparalleled pool care solutions that enhance the beauty, safety, and functionality of your swimming pool. Clean Pools Florida is more than just a service; we are your partners in creating a pristine and inviting aquatic environment right in your backyard.
      </Paragraph>
      <Paragraph>
        At Clean Pools Florida, we understand that your pool is a valuable asset and a source of relaxation and enjoyment for you, your family, and friends. With this understanding, our team of highly skilled professionals is committed to delivering excellence in every aspect of pool maintenance and cleaning.
      </Paragraph>
      <Paragraph>
        Why choose Clean Pools Florida? We set ourselves apart through our unwavering commitment to quality, reliability, and customer satisfaction. Our comprehensive range of services includes regular pool cleaning, water testing, equipment maintenance, and repairs. We use state-of-the-art technology and industry-best practices to ensure your pool remains crystal clear and ready for use throughout the year.
      </Paragraph>
      <Paragraph>
        Living in Miramar, Pembroke Pines, or Cooper City brings its own joys, and we believe that a well-maintained pool should be one of them. Our tailored services cater to the unique needs of each client, ensuring that your pool receives the attention it deserves. We pride ourselves on being responsive and attentive to your specific requirements, providing a personalized approach that goes beyond the ordinary.
      </Paragraph>
      <Paragraph>
        Beyond our commitment to excellence in pool care, we are also dedicated to environmental sustainability. We employ eco-friendly practices and products to minimize our ecological footprint while maintaining the highest standards of cleanliness and hygiene.
      </Paragraph>
      <Paragraph>
        Clean Pools Florida is not just a service provider; we are your neighbors, friends, and partners in creating a pool oasis that reflects your lifestyle. Whether you're a homeowner looking to transform your backyard into a haven of tranquility or a business owner wanting to offer a pristine pool environment to your patrons, we have the expertise and passion to bring your vision to life.
      </Paragraph>
      <Paragraph>
        We invite you to experience the Clean Pools Florida difference. Join our community of satisfied clients who trust us with the care of their pools. Our commitment to excellence, personalized service, and environmental responsibility sets us apart in the pool care industry.
      </Paragraph>
      <Paragraph>
        Contact Clean Pools Florida today to schedule a consultation and discover how we can elevate your pool experience. Trust us to keep your pool clean, safe, and ready for enjoyment in Miramar, Pembroke Pines, Cooper City, and beyond.
      </Paragraph>
    </AboutContainer>
  );
};

export default AboutUs;
