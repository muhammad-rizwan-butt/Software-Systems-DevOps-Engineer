import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import React from "react";
import { Layout } from "../../components/layout/layout";
import { Signup } from "../../components/ui/Signup";
import styles from "../../styles/register/register.module.scss";

const Index = () => {
  return (
    <>
      <div className={styles.main}>
        <section className={styles.signup}>
          <div className="container">
            <div className={styles.signup_content}>
              <div id="signup-form" className={styles.signup_form}>
                <h2 className={styles.form_title}>Create account</h2>
                <Signup />
              </div>
              <p className={styles.loginhere}>
                Have already an account ?{" "}
                <Link href="/login" className={styles.loginhere_link}>
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Index.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export default Index;
