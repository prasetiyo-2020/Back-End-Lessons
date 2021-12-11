app.post('/delete/:id', (req, res) => {
    connection.query(
        'DELETE FROM lists WHERE id=?',
        [req.params.id],
        (error, results) => {
            res.redirect('/list');
        }
    );
});
