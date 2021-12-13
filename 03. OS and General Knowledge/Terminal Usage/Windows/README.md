# Terminal Usage
## Current Place
Perintah ini digunakan untuk mengetahui dimana saat ini kita berada, perintah ini menunjukan path dari awal hingga saat ini kita berada. Perintah yang digunakan yaitu ``` $ pwd ```
<br><br>
![Screenshot (708)](https://user-images.githubusercontent.com/84963363/145703879-3e3e4e4f-ed15-408e-947b-1a5bff8cb1b8.png)

## Change Directory
1. Melakukan perpindahan dari direktori saat ini ke direktori yang ada didalamnya dengan perintah ``` $ cd "name_directory" ```
<br><br>
![Screenshot (705)](https://user-images.githubusercontent.com/84963363/145703633-56f77260-f398-4c8e-91b5-6e6e35989027.png)

2. Perintah ini juga bisa digunakan jika kita ingin masuk ke sub-sub folder yang ingin kita masuki yaitu dengan menambahkan "/" setelah folder yang dituju sebelumnya, jadi perintahnya seperti ini ``` $ cd "name_directory/name_directory" ```
<br><br>
![Screenshot (718)](https://user-images.githubusercontent.com/84963363/145704711-a36731a0-846a-45aa-bfde-3c7017e41e61.png)

3. Perintah ini juga bisa digunakan jika kita ingin pindah ke sub folder sebelumnya yang ingin kita masuki yaitu dengan menuliskan "cd .." jadi perintahnya seperti ini ``` $ cd .. ```
<br><br>
![Screenshot (709)](https://user-images.githubusercontent.com/84963363/145704058-98296b66-c721-4df6-b66c-f59e1d88ced1.png)

4. Bisa juga pindah ke folder sebelum-sebelumnya dengan perintah ``` $ cd ../.. ```
<br><br>
![Screenshot (719)](https://user-images.githubusercontent.com/84963363/145705085-913c37d7-0760-4d31-81c1-977ac82dc398.png)


## Listing Directory
Listing Directory ini digunakan untuk menampilkan isi dari sebuah folder, perintah yang digunakan yaitu ``` $ ls ```
<br><br>
![Screenshot (706)](https://user-images.githubusercontent.com/84963363/145703715-e5aa998b-2029-4708-829e-3caffe35fda2.png)


## Create File
Perintah ini digunakan untuk membuat sebuah file melalui perintah di terminal. Perintah yang digunakan yaitu ``` touch "file_name.extension"```
<br><br>
![145703830-1890b031-e1e8-4a84-9c13-979112361c85](https://user-images.githubusercontent.com/84963363/145704483-883d2061-6df9-4433-b464-d39c63b14426.png)

## Copy/Duplicate File and Folder
1. <b>Copy File.</b> Untuk mengcopy sebuah file, kita bisa menggunakan perintah ``` $ cp file_name new_filename ``` di terminal
<br><br>
![Screenshot (710)](https://user-images.githubusercontent.com/84963363/145704136-886ebd53-c3af-4e2c-9d7c-c7fd914928b5.png)

2. <b>Copy/Duplicate Folder.</b> Kita bisa juga mengcopy sebuah folder beserta isinya dengan perintah ``` $ cp -r directory_name new_directoryname ```
<br><br>
![Screenshot (711)](https://user-images.githubusercontent.com/84963363/145704365-316431dd-2ca7-467f-8eba-20aa5f0346c7.png)

## Update/Rename File Name and Directory Name
1. <b>Update/Rename File Name.</b> Untuk mengupdate nama file, bisa menggunakan perintah ``` $ mv file_name new_file_name ```
<br><br>
![Screenshot (714)](https://user-images.githubusercontent.com/84963363/145704393-fa856bfe-1df0-4bc1-ad76-0f9eec4f6df1.png)


2. <b>Update/Rename Folder Name.</b> Untuk mengupdate nama folder, bisa menggunakan perintah ``` $ mv folder_name new_folder_name ```
<br><br>
![Screenshot (715)](https://user-images.githubusercontent.com/84963363/145704397-09990287-c995-40a8-81bb-dc9e62f9beaa.png)

## Delete/Remove File and Folder
1. <b>Delete/Remove File.</b> Untuk menghapus sebuah file kita bisa menggunakan perintah ``` rm file_name ```
<br><br>
![Screenshot (712)](https://user-images.githubusercontent.com/84963363/145704372-281eefc0-8f6e-4204-9614-b2563a4c6d1e.png)

2. <b>Delete/Remove Folder.</b> Untuk menghapus sebuah folder kita bisa menggunakan perintah ``` rm -r folder_name ```
<br><br>
![Screenshot (713)](https://user-images.githubusercontent.com/84963363/145704378-4f4dcba4-8b47-4114-b209-8970cd38210a.png)


## Move/Change File Location and Directory Location
1. <b>Move/Change File Location</b>. Untuk memindahkan sebuah file bisa menggunakan perintah ``` $ mv file_name directory_name ```
<br><br>
![Screenshot (716)](https://user-images.githubusercontent.com/84963363/145704410-809567e3-120b-4330-b744-29b536ee0072.png)

2. <b>Move/Change Folder Location</b>. Untuk memindahkan sebuah folder bisa menggunakan perintah ``` $ mv folder_name folder_name ```
![Screenshot (720)](https://user-images.githubusercontent.com/84963363/145705610-93f25a67-4399-4e22-9ea0-49e23f689ef3.png)


## Open files


## Copy a file to another directory

Read File : ```cat "file_name.extenson ```

## Perintah
- [ ] man <perintah> untuk meilhat panduan
- [ ] <perintah> –help untuk panduan ringkas
- [ ] sudo untuk super user
- [x] ls untuk melihat direktori
- [x] cd untuk masuk ke direktori
- [ ] mkdir <nama folder> untuk membuat folder
- [x] pwd untuk melihat direktori aktif
- [ ] vim untuk membuka text editor
- [x] cp <asal> <tujuan> untuk menyalin file
- [x] mv <asal> <tujuan> untuk memindahkan folder
- [x] rm <file> untuk menghapus file
- [ ] find <nama file> untuk mencari file
- [ ] history untuk melihat riwayat
- [ ] cat untuk melihat isi file
- [ ] echo untuk menampilkan baris teks
- [ ] grep untuk mencari kata
- [ ] wc untuk menampilkan baris baru
- [ ] sort untuk mengurutkan
- [ ] chmod untuk mengganti hak akses
- [ ] chown mengganti hak milik
- [ ] su untuk mengganti user id
- [ ] passwd untuk mengganti password
- [ ] who untuk menampilkan user
- [ ] ps untuk menampilkan snapshot
- [ ] kill untuk menghentikan program
- [ ] tar untuk mengumpulkan file
- [ ] zip untuk mengkompres file
- [ ] unzip untuk mengekstrak file
- [ ] ssh untuk akses jarak jauh
- [ ] scp untuk menyalin file
- [ ] fdisk untuk menampilkan partisi
- [ ] mount untuk melampirkan file
- [ ] umount untuk melakukan unmount
- [ ] du untuk menampilkan ukuran file
- [ ] df untuk menampilkan disk space
- [ ] quota menampilkan sisa disk space
- [ ] reboot untuk mulai ulang
- [ ] poweroff untuk mematikan
- [ ] gedit untuk membuka editor teks
- [ ] kate untuk membuka teks editor
- [ ] bg membuat proses background
- [ ] fg <id program> membuat proses foreground
- [ ] jobs <id program> menampilkan identitas proses
- [ ] sed untuk melakukan filter teks
- [ ] awk untuk memindahkan teks
- [ ] locate untuk mencari file
- [ ] ifconfig untuk melihat ip
- [ ] date untuk menampilkan tanggal
- [ ] nano merubah teks editor
- [ ] top melihat proses secara urut
- [x] clear membersihkan terminal
- [ ] dpkg -i <namapackage>.deb instalasi paket
- [ ] uname melihat versi kernel
- [ ] * untuk mencantumkan deskripsi
