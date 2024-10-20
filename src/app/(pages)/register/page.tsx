"use client";

import { useRegisterCustomerMutation } from "@/redux/features/auth/auth.api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
type TFormValues = typeof initialValues;
const validationSchema = Yup.object({
  firstName: Yup.string().required("* firstName is required"),
  lastName: Yup.string().required("* lastName is required"),
  email: Yup.string()
    .email("* Invalid email address")
    .required("* Email is required"),
  password: Yup.string().required("* Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "* Passwords must match")
    .required("* Confirm password is required"),
});
const CreateAccount = () => {
  const [register] = useRegisterCustomerMutation();

  const router = useRouter();

  const handleRegister = async (values: TFormValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const { data } = await register(values);
      if (!data) {
        return toast.error("Something went wrong");
      }
      if (!data.success) {
        return toast.error(data.message);
      }
      toast.success("Successfully registered", {
        description: "Now please login",
      });
      router.push("/login");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={"/images/auth.jpg"}
          alt="auth background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>
      <div className="relative z-10 bg-white p-[50px] max-w-xl shadow-md rounded-[12px]">
        <h2 className="font-bold mb-4 text-center text-primaryMat text-[35px]">
          Create an Account
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-primaryTxt text-[18px] font-[600]">
                  Your First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="mt-1 block w-full px-3 py-2 bg-gray-600 border border-borderColor rounded-md outline-none"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-primaryTxt text-[18px] font-[600]">
                  Your Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="mt-1 block w-full px-3 py-2 bg-gray-600 border border-borderColor rounded-md outline-none"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-primaryTxt text-[18px] font-[600]">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-600 border border-borderColor rounded-md outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-primaryTxt text-[18px] font-[600]">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 bg-gray-600 border border-borderColor rounded-md outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-primaryTxt  text-[18px] font-[600]">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="mt-1 block w-full px-3 py-2 bg-gray-600 border border-borderColor rounded-md outline-none"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primaryMat text-white py-[12px] hover:bg-green-600 rounded-[5px]"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-6 text-start">
          <p className="text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-primaryMat">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
