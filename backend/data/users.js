import bcryptjs from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@admin.pl',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Joe Bidden',
        email: 'admin@admin.pl',
        password: bcryptjs.hashSync('123456', 10)
    },
    {
        name: 'Donald Trump',
        email: 'admin@admin.pl',
        password: bcryptjs.hashSync('123456', 10)
    },
]

export default users