export const isAdmin = () => {
  const user = localStorage.getItem("user");

  if (user) {
    const email = JSON.parse(user).email;
    const password = JSON.parse(user).password;
    return email === "testAdmin@gmail.com" && password === "12345yuiopp";
  }
  return false;
};
