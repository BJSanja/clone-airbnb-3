"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useregistermodel";
import Modal from "./modal";
import Heading from "../heading";
import Input from "../inputs/input";
import toast from "react-hot-toast";
import Button from "../button";
import { signIn } from "next-auth/react";
import LoginModal from "./loginmodal";
import useLoginModal from "@/app/hooks/useloginmodel";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();



  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("post went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle =useCallback(()=>{
    registerModal.onClose();
    loginModal.onOpen();
  },[registerModal,loginModal])
  

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="welcome to Airbnb" subtitle="Create an Account!" />
      <Input
        id="email"
        label=" Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label=" Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label=" Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div 
        className="mt-4 font-light text-center  text-neutral-500"
      >
        <p>Already have an account?
          <span 
            onClick={toggle} 
            className="cursor-pointer  text-neutral-800 hover:underline"
            > Log in</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;
