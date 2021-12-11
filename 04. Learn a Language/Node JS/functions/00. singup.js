/*
  Penting: untuk mencoba kode singup silahkan masuk dengan link berikut dan gunakan data palsu sebagai inputan,
  https://blog-prasetiyo.herokuapp.com/signup
  Melakukan pemeriksaan terhadap :
  - Nama Pengguna Kosong
  - Email Kosong
  - Password Kosong
  - Email Duplikat
*/

app.post('/signup',
    (req, res, next) => {
        console.log('Pemeriksaan nilai input kosong');
        // const { username, email, password } = req.body;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const errors = [];
        if (username === '') {
            errors.push('Nama Pengguna kosong');
        }
        if (email === '') {
            errors.push('Email kosong');
        }
        if (password === '') {
            errors.push('Kata Sandi kosong');
        }
        if (errors.length > 0) {
            res.render('signup.ejs', {
                errors: errors
            });
        } else {
            next();
        }
    },
    (req, res, next) => {
        console.log('Pemeriksaan email duplikat');
        const email = req.body.email;
        const errors = [];
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (error, results) => {
                if (results.length > 0) {
                    errors.push('Gagal mendaftarkan pengguna');
                    res.render('signup.ejs', {
                        errors: errors
                    });
                } else {
                    next();
                }
            }
        );
    },
    (req, res) => {
        console.log('Pendaftaran');
        // const { username, email, password } = req.body;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        connection.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password],
            (error, results) => {
                req.session.userId = results.insertId;
                req.session.username = username;
                res.redirect('/list');
            }
        );
    }
);
