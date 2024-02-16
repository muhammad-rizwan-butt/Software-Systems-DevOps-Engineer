import React from "react";
import { Layout } from "../../components/layout/layout";

const Index = () => {
  return (
    <div>
      <div className="terms__box">
        <div className="container">
          <h1 className="text-white fw-bold heading">Terms & Conditions</h1>
        </div>
      </div>
      <div className="container">
        <div className="mt-5 mb-4">
          <h2 className="text__heading">1. Introduction</h2>
          <p>
            Welcome to Siyaahat.pk. These Terms and Conditions represent a
            legally binding agreement that governs your use of our website and
            services. By utilizing our platform, you signify your unreserved
            acceptance of and adherence to these Terms. If you do not agree with
            these Terms, kindly refrain from using our services.
          </p>
          <h2 className="text__heading">2. Use of our Services</h2>
          <p>
            To access our services, you must be at least 18 years of age or the
            legal age of majority in your jurisdiction. By using our services,
            you commit to deploying them solely for lawful purposes and in
            strict compliance with all applicable local, state, and
            international laws and regulations.
          </p>
          <h2 className="text__heading">3. Booking Reservations</h2>
          <p>
            Our platform facilitates the search, comparison, and reservation of
            accommodations, transportation, and other related services. When
            making a reservation through our website, you acknowledge and accept
            the specific terms and conditions set forth by the respective
            third-party providers. We disclaim responsibility for the accuracy,
            completeness, or quality of information provided by these providers.
          </p>
          <h2 className="text__heading">4. User Accounts</h2>
          <p>
            Certain features of our website may necessitate the creation of a
            user account. You are solely responsible for safeguarding the
            confidentiality of your account information and for all activities
            conducted under your account. Any unauthorized use or access to your
            account should be reported immediately to us.
          </p>
          <h2 className="text__heading">5. User Content</h2>
          <p>
            In the course of using our services, you may have the opportunity to
            submit reviews, comments, and other user-generated content. You
            assume full responsibility for the content you submit and must
            adhere to our content guidelines. We retain the right to edit or
            remove any content at our discretion.
          </p>
          <h2 className="text__heading">6. Privacy Policy</h2>
          <p>
            Your interaction with our website is further regulated by our
            Privacy Policy, which outlines the procedures governing the
            collection, utilization, and protection of your personal
            information. We urge you to peruse the Privacy Policy to gain a
            comprehensive understanding of our data practices.
          </p>
          <h2 className="text__heading">7. Intellectual Property</h2>
          <p>
            All content featured on our website, encompassing text, graphics,
            logos, and software, is safeguarded by intellectual property laws.
            Usage, reproduction, or distribution of our content without our
            prior written consent is strictly prohibited.
          </p>
          <h2 className="text__heading">8. Limitation of Liability</h2>
          <p>
            We disclaim liability for any loss or damage incurred as a result of
            your use of our services, including indirect, consequential, or
            punitive damages. This includes losses stemming from reliance on
            information obtained through our website. We extend no express or
            implied warranties concerning the accuracy, reliability, or
            availability of our services.
          </p>
          <h2 className="text__heading">9. Termination</h2>
          <p>
            We reserve the unfettered right to terminate or suspend your access
            to our services at our discretion, for any reason, including
            non-compliance with these Terms.
          </p>
          <h2 className="text__heading">
            10. Reservation Refunds and Cancellations
          </h2>
          <p>
            We understand that plans can change. Therefore, it's important to
            note the specific policies related to reservations, cancellations,
            and refunds as follows:
            <ul>
              <li className="fw-semibold">a. Reservation Terms</li>
              <li>
                When you book accommodations, transportation, or other services
                through our website, you agree to the reservation terms and
                cancellation policies provided by the respective third-party
                providers. Please carefully review these terms before making any
                reservations.
              </li>
              <li className="fw-semibold">b. Cancellation </li>
              <li>
                Cancellation policies may vary based on the provider, and you
                are responsible for abiding by the specific terms and conditions
                associated with your reservation. Cancellation fees or penalties
                may apply, and they will be determined by the provider's
                policies.
              </li>
              <li className="fw-semibold">c. Refunds</li>
              <li>
                Refunds for canceled reservations, if applicable, will be
                processed in accordance with the cancellation policies set by
                the provider. It's essential to thoroughly understand these
                policies, as they may dictate the timing and amount of any
                potential refund.
              </li>
            </ul>
          </p>
          <h2 className="text__heading">11. Modification of Reservations</h2>
          <p>
            Requests for modifications to reservations, including changes to
            dates, rooms, or services, should be directed to the respective
            third-party provider. Changes are subject to availability and the
            provider's modification policies.
          </p>
          <h2 className="text__heading">12. Disputes and Chargebacks</h2>
          <p>
            If you encounter any disputes or concerns regarding charges,
            cancellations, or refunds, it is your responsibility to address them
            directly with the third-party provider. We are not liable for, and
            cannot mediate or resolve, such disputes. Chargebacks should be
            directed to your payment provider in accordance with their policies.
          </p>
          <h2 className="text__heading">13. Changes to Terms and Conditions</h2>
          <p>
            These Terms may be updated periodically. Any modifications shall
            become effective immediately upon posting. We encourage you to
            review these Terms on a regular basis.
          </p>
          <h2 className="text__heading">14. Contact Information</h2>
          <p>
            For inquiries or concerns pertaining to these Terms and Conditions,
            please do not hesitate to contact us at info@siyaahat.pk
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
