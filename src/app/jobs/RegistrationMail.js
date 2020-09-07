import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Test <contact@test.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'User Register',
      html: `Hello, ${user.name}, Welcome to app`
    });
  },
};