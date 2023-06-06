async function LOGIN(request, reply) {
  response.send({message: "success"});
  try {
    let body = request.body;    
    const userName = body.user_name.toUpperCase();
    let password = body.password;
    if (
      (userName === 'A' && password === "M12")
      (userName === 'B' && password === "M23")
      (userName === 'C' && password === "M34")
     ){
      return reply.code(200).send({ success: true, message: "login success"});
     }    
    else 
    {
      return reply.code(400).send({ status: "error", message: 'Invalid User Name or Password'});
    }
      return;
  }
catch (error) {
  return reply.code(400).send(error)
};
}
module.exports = { LOGIN };