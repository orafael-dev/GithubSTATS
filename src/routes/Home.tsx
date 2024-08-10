import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";
import User from "../components/User";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUSer = async(userName: string) => {

    const res = await fetch(`http://api.github.com/users/${userName}`)
    const data = await res.json()

    const { avatar_url, login, location, followers, following} = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setUser(userData)
  }
  return (
    <div>
      <Search loadUser={loadUSer}/>
      {user && <User {...user} />}
    </div>
  );
};

export default Home;
