import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Form/Input/Input";
import { Layout } from "../../components/Layout/Layout";
import styles from "./Register.module.scss";
import { Form, Formik } from "formik";
import { useState } from "react";

const registerInfos = {
  email: "",
  password: "",
};

export function Register() {
  const [login, setLogin] = useState(registerInfos);
  const { email, password } = login;

  const handleRegister = (): void => {};

  return (
    <Layout>
      <div className={styles.register}>
        <div className={styles.register_left}>
          <div className={styles.register_header}>
            <h2>Register Customers</h2>
            <p>If you have an account, sign in with your email address.</p>
            <Formik
              enableReinitialize
              initialValues={{
                email,
                password,
              }}
              onSubmit={() => {
                handleRegister();
              }}
            >
              {({ errors }) => (
                <Form>
                  <Input placeholder="" type="text" label="Email" />
                  <Input label="Password" />
                  <Button txt="Register" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className={styles.rigister_right}>
          <h1>New Customer?</h1>
          <p>Creating an account has many benefits: </p>
          <ul>
            <li>Check out faster</li>
            <li> Keep more tha n one address</li>
            <li>Track orders and more</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
