function getUserData() {
  try {
    const userData = localStorage.getItem("userData");
    if (typeof userData !== "object") {
      const parseUserData = JSON.parse(userData);
      return {
        user: parseUserData == null ? void 0 : parseUserData.user,
        token: parseUserData == null ? void 0 : parseUserData.token
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export { getUserData as g };
//# sourceMappingURL=getUserData.mjs.map
