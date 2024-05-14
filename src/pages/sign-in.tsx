import { Field, Form, Formik } from "formik"
import * as Yup from 'yup';

import b2bitLogo from "../assets/b2bit-logo.png"

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters long!')
    .required('Required'),
});

export function SignIn() {
  return (
    <div className="bg-[#FAFAFA] h-screen flex items-center justify-center">
      <div className="bg-white bg-red px-5 py-8 w-full max-w-sm shadow-lg rounded-2xl">

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
              console.log(values)
            }}
          >
            {({ errors, touched, isValid }) => (
              <Form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    E-mail
                  </label>
                  <div className="mt-2">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="example@email.com"
                      required
                      className="block w-full rounded-md border-0 py-2 px-3 outline-none bg-zinc-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 text-sm sm:leading-6"
                    />
                  </div>
                  {errors.email && touched.email ? <span className="text-red-500 text-xs font-semibold">{errors.email}</span> : null}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="******"
                      required
                      className="block w-full rounded-md border-0 py-2 px-3 outline-none bg-zinc-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.password && touched.password ? <span className="text-red-500 text-xs font-semibold">{errors.password}</span> : null}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 disabled:bg-zinc-300 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}