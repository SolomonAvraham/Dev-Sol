const serverURL = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.API_URL;
  } else {
    return process.env.NEXT_PUBLIC_LOCAL_SERVER_URL;
  }
};

export default serverURL;
