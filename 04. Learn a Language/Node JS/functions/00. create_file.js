
// Function add_file 1
app.post('/create', (req, res) => {
    const pekerjaan = req.body.pekerjaan;
    const tanggalMulai = req.body.tanggal_mulai;
    const tanggalBerakhir = req.body.tanggal_berakhir;
    const detailPekerjaan = req.body.detail_pekerjaan;
    const gambar = req.body.gambar;
    connection.query(
        'INSERT INTO lists (nama_pekerjaan, tanggal_mulai, tanggal_berakhir, detail_pekerjaan, gambar) VALUES (?, ?, ?, ?, ?)',
        [pekerjaan, tanggalMulai, tanggalBerakhir, detailPekerjaan, gambar],
        (error, results) => {
            res.redirect('/list');
        }
    );
});

// Function add_file 2
app.post('/create', (req, res) => {
    const {pekerjaan, tanggalMulai, tanggalBerakhir, detailPekerjaan, gambar} = req.body;
    connection.query(
        'INSERT INTO lists (nama_pekerjaan, tanggal_mulai, tanggal_berakhir, detail_pekerjaan, gambar) VALUES (?, ?, ?, ?, ?)',
        [pekerjaan, tanggalMulai, tanggalBerakhir, detailPekerjaan, gambar],
        (error, results) => {
            res.redirect('/list');
        }
    );
});
