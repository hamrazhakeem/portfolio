import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-50 text-gray-950 font-sans">
          <Container>
            <Section className="bg-white my-10 px-8 py-6 rounded-lg shadow-md border border-gray-200">
              {/* Header with styling similar to your portfolio */}
              <div className="mb-6">
                <Heading className="text-2xl font-medium text-gray-900 mb-2">
                  New Portfolio Contact
                </Heading>
                <Text className="text-gray-600 mb-0">
                  You've received a new message from your portfolio website
                </Text>
              </div>
              
              {/* Message container with styling */}
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-gray-900 mb-6">
                <Text className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                  {message}
                </Text>
              </div>
              
              <Hr className="border-gray-200 my-6" />
              
              {/* Sender info with consistent styling */}
              <div>
                <Text className="text-gray-700 mb-1 font-medium">From:</Text>
                <Text className="text-gray-900">
                  <Link
                    href={`mailto:${senderEmail}`}
                    className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900"
                  >
                    {senderEmail}
                  </Link>
                </Text>
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Text className="text-sm text-gray-600 text-center">
                  © {new Date().getFullYear()} Hamraz Hakeem | Personal Portfolio
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}