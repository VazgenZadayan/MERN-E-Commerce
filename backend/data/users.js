import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Vazgen Zadayan',
    email: 'vazgen@gmail.com',
    password: bcrypt.hashSync('Vazgen123', 10),
    isAdmin: true,
  },
  {
    name: 'Serega',
    email: 'serega@gmail.com',
    password: bcrypt.hashSync('Serega123', 10),
  },
  {
    name: 'Gev',
    email: 'gev@gmail.com',
    password: bcrypt.hashSync('Gev123', 10),
  },
];

export default users;
