import React from "react";
import { Layout } from "../../components/layout/layout";

const Index = () => {
  return (
    <div>
      <div className="privacy__box">
        <div className="container">
          <h1 className="text-white fw-bold heading">Privacy Policy</h1>
        </div>
      </div>
      <div className="container">
        <div className="mt-5 mb-4">
          <h2 className="text__heading">1. Introduction</h2>
          <p>
            Welcome to Siyaahat.pk. We place the highest value on safeguarding
            your privacy and ensuring the utmost security of your personal
            information. This Privacy Policy is designed to provide a
            comprehensive understanding of how we collect, utilize, disclose,
            and protect your personal data. By engaging with our website, you
            explicitly consent to the practices elucidated herein.
          </p>
          <h2 className="text__heading">2. Information We Collect</h2>
          <p>
            We collect a range of information, which may encompass the following
            categories:
            <ul>
              <li className="fw-semibold">a. Personal Information:</li>
              <li>
                In the course of making reservations or engaging with our
                services, we gather personal data such as your name, email
                address, phone number, and other contact details.
              </li>
              <li className="fw-semibold">b. Payment Information: </li>
              <li>
                To facilitate secure transactions and process payments for
                reservations and services, we collect payment information,
                including credit card numbers or other pertinent payment
                details.
              </li>
              <li className="fw-semibold">c. Usage Information:</li>
              <li>
                In our quest to enhance your user experience and for analytical
                purposes, we capture data on your interactions with our website,
                including your IP address, browser type, and the specific pages
                you visit.
              </li>
              <li className="fw-semibold">
                d. Cookies and Similar Technologies:
              </li>
              <li>
                To gain insights into your browsing habits, we employ cookies
                and similar tracking technologies. You have the capacity to
                manage your cookie preferences through your browser settings.
              </li>
            </ul>
          </p>
          <h2 className="text__heading">3. How We Use Your Information</h2>
          <p>
            We utilize the information collected for an array of discernible
            purposes, including but not limited to:
            <ul>
              <li className="fw-semibold">
                a. Providing and Personalizing Our Services:
              </li>
              <li>
                Your data is leveraged to facilitate the reservation process,
                enhance your experience, and offer tailored recommendations.
              </li>
              <li className="fw-semibold">b. Communication:</li>
              <li>
                We may contact you for transactional purposes, including
                reservation confirmations, updates, and responses to customer
                service inquiries.
              </li>
              <li className="fw-semibold">c. Marketing and Promotions:</li>
              <li>
                With your explicit consent, we may employ your information for
                the purpose of disseminating promotional materials, newsletters,
                and updates.
              </li>
            </ul>
          </p>
          <h2 className="text__heading">4. Sharing Your Information</h2>
          <p>
            We may share your information in compliance with the following
            scenarios:
            <ul>
              <li className="fw-semibold">a. With Third-Party Providers:</li>
              <li>
                Your data is shared with third-party service providers who play
                a pivotal role in the seamless operation of our website. This
                may encompass payment processors, customer service providers,
                and marketing collaborators.
              </li>
              <li className="fw-semibold">b. Legal Requirements:</li>
              <li>
                Your information may be disclosed to ensure adherence to legal
                obligations, to respond to lawful requests, and to safeguard the
                rights and interests of both our organization and third parties.
              </li>
            </ul>
          </p>
          <h2 className="text__heading">5. Your Rights</h2>
          <p>
            With regard to your personal information, you possess certain
            rights, including:
            <ul>
              <li className="fw-semibold">a. Access:</li>
              <li>
                You have the prerogative to request access to the personal
                information we retain about you.
              </li>
              <li className="fw-semibold">b. Correction:</li>
              <li>
                You may request rectifications to inaccuracies in your personal
                information.
              </li>
              <li className="fw-semibold">c. Withdrawal of Consent:</li>
              <li>
                In instances where you have consented to receive marketing
                materials, you reserve the right to withdraw this consent at any
                time.
              </li>
              <li className="fw-semibold">d. Deletion:</li>
              <li>
                Subject to legal obligations, you may request the deletion of
                your personal information.
              </li>
            </ul>
          </p>
          <h2 className="text__heading">6. Security</h2>
          <p>
            We adhere to the highest standards of security to protect your
            personal information from unauthorized access or disclosure.
            Nevertheless, it is important to note that no online data
            transmission or storage method can be entirely impervious to
            security breaches.
          </p>
          <h2 className="text__heading">7. Third-Party Links</h2>
          <p>
            Our website may comprise links to third-party websites or services.
            We bear no responsibility for the privacy practices of these
            third-party entities and strongly encourage you to peruse their
            privacy policies.
          </p>
          <h2 className="text__heading">8. Changes to this Privacy Policy</h2>
          <p>
            This Privacy Policy may be subject to updates when deemed necessary.
            Any alterations will be promptly posted on this page along with
            their effective date.
          </p>
          <h2 className="text__heading">9. Contact Us</h2>
          <p>
            For any inquiries or concerns regarding our Privacy Policy or the
            management of your personal information, do not hesitate to reach
            out to us at info@siyaahat.pk.
          </p>
        </div>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
