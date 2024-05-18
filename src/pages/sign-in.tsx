import { Form, Formik } from "formik"
import * as Yup from 'yup';

import b2bitLogo from "../assets/b2bit-logo.png"
import { useAuth } from "../hooks/auth";
import { Button } from "../components/button";
import { Input } from "../components/input";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters long!')
    .required('Required'),
});

export function SignIn() {
  const { SignIn } = useAuth()

  return (
    <div className="bg-[#FAFAFA] h-screen flex items-center justify-center">
      <div className="bg-white bg-red px-5 py-8 w-full max-w-sm shadow-2xl rounded-2xl">

        <header className="flex justify-center">
          <img src={b2bitLogo}  className="h-28" alt="" />
        </header>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              SignIn(values)
            }}
          >
            {({ errors, touched, isValid }) => (
              <Form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    E-mail
                  </label>
                  
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="example@email.com"
                    required 
                  />

                  {errors.email && touched.email ? <span className="text-red-500 text-xs font-semibold">{errors.email}</span> : null}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>

                  <Input 
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="******"
                    required
                  />

                  {errors.password && touched.password ? <span className="text-red-500 text-xs font-semibold">{errors.password}</span> : null}
                </div>

                <Button
                  title="Sign in"
                  type="submit"
                  disabled={!isValid}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}