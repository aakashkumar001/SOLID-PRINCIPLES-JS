import EmailSender from './EmailSender.js';
import User from './User.js';

class UserService {
  registerUser(user) {
    // Register user logic
    console.log(`Registering user: ${user.username}`);

    // Optionally, notify user via email
    const emailSender = new EmailSender();
    emailSender.sendEmail("Welcome to our platform!", user.email);
  }
}

export default UserService;
