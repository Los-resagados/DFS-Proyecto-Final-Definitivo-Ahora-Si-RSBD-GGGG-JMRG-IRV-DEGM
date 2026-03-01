const users = [
  { username: "eggman", password: "Sage2022", role: "admin" },
    { username: "Ricardo", password: "4321", role: "admin" },
  { username: "neometalsonic", password: "metaloverlord", role: "admin" },

  { username: "infinite", password: "rubifantasma", role: "editor" },
  { username: "sage", password: "aiassistant", role: "editor" },
  { username: "tails", password: "mechanic", role: "editor" },

  { username: "metalsonic", password: "metal", role: "user" }
];
// 🔥 ESTO ES LO IMPORTANTE
if (!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify(users));
}