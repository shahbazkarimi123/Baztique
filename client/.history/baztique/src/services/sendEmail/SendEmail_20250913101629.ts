export const sendEmail = async ()=>{
    const response = await axios.post("http://localhost:8080/api/email/send", {
  to: "user@example.com",
  subject: "Hello from React + Spring",
  text: "This is a test email!"
});
}