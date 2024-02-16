import React from "react";
import styles from "../../styles/login/login.module.scss";

// import { AxiosError } from "axios";
import { Layout } from "../../components/layout/layout";
import { Login } from "../../components/ui/Login";

const Index = () => {
  return (
    <>
      <div className={styles.limiter}>
        <div className="container">
          <div className={styles.container_login100}>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
