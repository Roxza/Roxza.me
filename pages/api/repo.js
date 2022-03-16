const fetch = require("isomorphic-unfetch");

export default async function handler(req, res) {
  let roxza = await (
    await fetch("https://api.github.com/users/roxza/repos", {
      headers: {
        Authorization: "token " + process.env.github_key,
      },
    })
  ).json();

  let serity = await (
    await fetch("https://api.github.com/users/teamSerity/repos", {
      headers: {
        Authorization: "token " + process.env.github_key,
      },
    })
  ).json();
  try {
    res.send([...roxza, ...serity]);
  } catch (e) {
    res.send(null);
  }
}
