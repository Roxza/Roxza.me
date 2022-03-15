const { Webhook, EmbedBuilder } = require("discohook");
const webhook = new Webhook(process.env.webhook);

export default function handler(req, res) {
  const body = req.body;
  if (!body.name || !body.email || !body.message)
    return res.status(400).json({ status: false, error: "401" });

  let name = body.name,
    email = body.email,
    message = body.message;
  /* Discord Webhook Sender */

  webhook.setUsername("Postacı Güvercin");

  const embed = new EmbedBuilder()
    .setTitle("Roxza.me | Contact | ")
    .setAuthor("Roxza.me", "https://i.ibb.co/Dz9dzXh/a-520727597b10c633857c34a9039316ba.gif", "https://roxza.me")
    .addField("Name", name, true)
    .addField("Email", email, true)
    .addField("Message", message, true)
    .setColor("pink")
    .setTimestamp();

  webhook.send({ embeds: [embed] })
  .catch((error) => {
    res.status(400).json({status: false , error: "400"});
  })
  .then((response) => {
    res.status(200).json({status: true});
  })
}