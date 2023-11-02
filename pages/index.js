import { useEffect, useState } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  async function getUser(username) {
    const fet = await fetch(`https://api.github.com/users/${username}`);
    const resp = await fet.json();
    const user = resp;
    setUserInfo({ ...user });
    console.log(resp);
  }
  const [userInfo, setUserInfo] = useState({});
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    getUser(userInput);
    console.log(userInfo);
  }, [userInput]);
  return (
    <div className="card">
      <Form onUserInput={setUserInput} />
      <UserCard
        name={userInfo.name}
        userName={userInfo.login}
        img={userInfo.avatar_url}
      />
    </div>
  );
}
