// Read_file 1
app.get('/list', (req, res) => {
    connection.query(
        "SELECT * FROM lists",
        (error, results) => {
            res.render("list.ejs", {
                lists: results
            });
        }
    );
});

// Read_file 2
app.get('/rincian/:id', (req, res) => {
    connection.query(
        'SELECT * FROM lists WHERE id=?',
        [req.params.id],
        (error, results) => {
            res.render('rincian.ejs', {
                list: results[0]
            });
        }
    );
});
