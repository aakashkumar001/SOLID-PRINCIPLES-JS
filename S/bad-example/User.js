import EmailSender from "./EmailSender.js";
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  register() {
    // Register user logic
    // ...

    // Send email notification
    const emailSender = new EmailSender();
    emailSender.sendEmail("Welcome to our platform!", this.email);
  }
}

// Usage
const user = new User("john_doe", "john.doe@example.com");
user.register();
