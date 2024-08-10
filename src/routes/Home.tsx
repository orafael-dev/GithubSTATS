import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUSer = async(userName: string) => {

    const res = await fetch(`http://api.github.com/users/${userName}`)
    const data = await res.json()
    console.log(data)
  }
  return (
    <div>
      <Search loadUser={loadUSer}/>
    </div>
  );
};

export default Home;
