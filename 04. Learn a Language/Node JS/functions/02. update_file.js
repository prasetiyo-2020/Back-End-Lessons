app.post('/update/:id', (req, res) => {
    const pekerjaan = req.body.pekerjaan;
    const tanggalMulai = req.body.tanggal_mulai;
    const tanggalBerakhir = req.body.tanggal_berakhir;
    const detailPekerjaan = req.body.detail_pekerjaan;
    connection.query(
        'UPDATE lists SET nama_pekerjaan = ?, tanggal_mulai = ?, tanggal_berakhir = ?, detail_pekerjaan = ? WHERE id = ?',
        [pekerjaan, tanggalMulai, tanggalBerakhir, detailPekerjaan, req.params.id],
        (error, results) => {
            res.redirect('/list');
        });
});
