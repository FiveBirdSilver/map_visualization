"use client"; //모듈이 클라이언트 번들의 일부로 간주
import { useEffect, useState } from "react";
import { useLogin } from "app/hooks/useLogin";
import { useRouter } from "next/navigation";

import Input from "app/components/elements/input";
import Button from "app/components/elements/list";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, isError, isSuccess } = useLogin();

  const handleOnSubmit = async () => {
    await mutate({ email, password });
  };

  useEffect(() => {
    if (isSuccess) router.push("/");
  }, [isSuccess]);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center gap-5">
        <Input
          label="이메일"
          id="emailInput"
          type="email"
          value={email}
          setState={setEmail}
          placeholder="이메일을 입력해주세요"
        />
        <Input
          label="비밀번호"
          id="passwordInput"
          type="password"
          value={password}
          setState={setPassword}
          placeholder="비밀번호를 입력해주세요"
        />
        <button onClick={handleOnSubmit} data-cy="loginBtn" className="w-full h-10 mt-5 text-white bg-black rounded">
          로그인
        </button>
      </div>
    </div>
  );
}
