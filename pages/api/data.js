const fetch = require("isomorphic-unfetch");

export default async function handler(req, res) {
  let user = await (await fetch("https://api.roxza.me/api/personal")).json();
  try {
    res.send({
      status: true,
      data: user.data,
    });
  } catch (e) {
    res.send({ status: false, data: null });
  }
}
