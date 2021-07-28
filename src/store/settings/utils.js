export const changePassword = (user) => {
    return {
      ...user,
      password: user.password,
    };
  };
  
  export default {
    changePassword,
  };
  