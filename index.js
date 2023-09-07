const validateUser = async () => {
  try {
    const result = await fetch("");
    const user = await result.json();
    return user;
  } catch (error) {
    return { error };
  }
};

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("Email Invalid!");
    return;
  }

  const result = await validateUser(email);
  if (result.error) {
    alert("Falha ao validar e-mail.");
    return;
  }

  localStorage.setItem("@WebApp:userEmail", result.email);
  localStorage.setItem("@WebApp:userName", result.name);
  localStorage.setItem("@WebApp:userId", result.id);
  window.open("./src/pages/home/index.html", "_self");
};
