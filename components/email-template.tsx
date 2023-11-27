import React from 'react';

import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Heading,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormemailProps = {
  message: string;
  senderEmail: string;
};

function ContactFormEmail({ message, senderEmail }: ContactFormemailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from the portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className=" bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className=" leading-tight">
                Message sent from your porfolio
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sent by {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
