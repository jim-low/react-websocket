import { atom } from 'recoil'

interface User {
  name: string;
  loggedIn: boolean;
};

const userState = atom<User>({
  key: "isUserLoggedInState",
  default: {
    name: "",
    loggedIn: false
  }
})

export default userState
