# DIFF
- Perintah git diff akan membandingkan perubahan yang baru saja dilakukan dengan revisi/commit terakhir.
- Melihat Perbandingan Perubahan yang Dilakukan pada Revisi
```
$ git diff ae2d3667fc29b78eca4a1c9e4bf63827c5e89bc0
> diff --git a/Tugas Kuliah.txt b/Tugas Kuliah.txt
> index a5fbfa4..9733a81 100644
--- a/Tugas Kuliah.txt
+++ b/Tugas Kuliah.txt
@@ -1,6 +1,3 @@
 Tugas Kuliah :
-
 - Membuat Database Simpan-Pinjam
-- Membuat Database Perpustakaan
-- Membuat Database Akademik
-- Membuat ERD
\ No newline at end of file
+- Membuat Database Perpustakaan
\ No newline at end of file
```

Melihat Perbandingan pada File
```
git diff index.html
```

Melihat Perbandingan antar Revisi/Commit
```
git diff <nomer commit> <nomer commit>
```
```
$ git diff ae2d3667fc29b78eca4a1c9e4bf63827c5e89bc0 37d26344781e70b2f46e8276249ed8c28f
30dd0
> diff --git a/Tugas Kuliah.txt b/Tugas Kuliah.txt
> index a5fbfa4..dee0396 100644
--- a/Tugas Kuliah.txt
+++ b/Tugas Kuliah.txt
@@ -2,5 +2,4 @@ Tugas Kuliah :

 - Membuat Database Simpan-Pinjam
 - Membuat Database Perpustakaan
-- Membuat Database Akademik
-- Membuat ERD
\ No newline at end of file
+- Membuat Database Akademik
\ No newline at end of file
```

Perbandingan Antar Cabang (Branch)
```
git diff <nama cabang> <nama cabang>
```
