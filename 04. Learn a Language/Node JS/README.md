## Instalasi
- Download Node.js di https://nodejs.org/en/download/ dan install
- Cek versi node ``` node -v ``` dan cek versi npm ``` npm -v ```
- Download MongoDB atau RDBMS

## Dokumentasi Node.js
- https://nodejs.org/en/docs/

## Membuat aplikasi baru
- Buat folder dan atur nama foldernya
- Buka VSCode, pada terminal jalankan perintah ``` $ npm init --yes ```, ini adalah command yang digunakan untuk membuat package.json, yang merupakan file konfigurasi npm. Informasi pengaturan paket npm dijabarkan didalam file package.json.

## Membuat Projek
- Pada terminal ketik ``` $ npm install express ``` untuk menginstall express
- Import express pada file app.js :page_with_curl:
```javascript
const express = require('express');
const app = express();
```

## Menginstall Embedded JavaScript atau ejs
- Pada terminal ketik ``` $ npm install ejs ```
- Maka sekarang kita bisa menggunakan format ejs sebagai ganti dari html, misalnya dari index.html :page_with_curl: menjadi index.ejs :page_with_curl:
- EJS memungkinkan kita untuk memasukan kode javascript pada struktur halaman
- Simbol ``` <% %> ``` digunakan untuk menetapkan variabel, contoh : ``` <% const item = {id: 4, name: 'tomat'} %> ```
- Simbol ``` <%= %> ``` digunakan untuk mencetak variabel yang akan ditampilkan, contoh : ``` <%= item.id %> ```, ``` <%= item.name %> ```

## Menjalankan Server
- Untuk menjalankan server tambahkan kode ``` app.listen(3000) ```
```javascript
const express = require('express');
const app = express();

app.listen(3000);
```
- Lalu pada terminal ketikan perintah ``` $ node app.js ```
- Agar tidak me-restart server secara manual, mari instal nodemon di terminal : ``` $ npm install nodemon ```, suatu paket npm yang dapat me-restart server secara otomatis saat ada perubahan dalam file.
- Pada windows : ``` .\\node_modules\\.bin\\nodemon app.js ```
![Capture](https://user-images.githubusercontent.com/84963363/133953699-af6eee10-3e2e-43a6-ae23-f9dc791b8398.PNG)
- Agar lebih mudah lagi, pada package.json ```"start": ".\\node_modules\\.bin\\nodemon app.js"```
![Capture](https://user-images.githubusercontent.com/84963363/133953604-6f1d82aa-f91b-4390-b5a5-e3274e8cd537.PNG)
- Jalankan command ``` npm run start ``` dan periksa apakah kamu bisa memulai server menggunakan nodemon.
![npm run start](https://user-images.githubusercontent.com/84963363/133953800-f843c9fe-1507-47ff-9f53-da4b321ddc01.png)



## Route
- Untuk menampilkan halaman maka diperlukan kode ``` app.get ``` , halaman biasanya terletak di folder ``` views ``` dengan format file .ejs
```javascript
const express = require('express');
const app = express();

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);
```

## CSS dan Gambar
- Style dan gambar disimpan di folder ``` public ``` :file_folder:
``` javascript
const express = require('express');
const app = express();

// Menspesifikasikan folder yang menyimpan file CSS dan gambar 
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);
```
- Untuk memuat style dan gambar untuk diaplikasikan file top.ejs :page_with_curl:, maka diperlukan kode berikut
``` html
<link rel="stylesheet" href="/css/style.css">
<img src="/images/top.png">
```

## Menampilkan HTML menggunakan forEach
- Pada file .ejs, definisikan variabel yang berupa array
``` javascript
<% const items = [
   {id: 1, name: 'kentang'},
   {id: 2, name: 'wortel'},
   {id: 3, name: 'bawang'}
]; %>
```
- Pada file .ejs :page_with_curl:, variabel items yang menggunakan ```forEach``` menerapkan fungsi yang ditentukan untuk setiap item dalam array tertentu secara individual
``` javascript
<% items.forEach((item) => { %>
<li>
  <span class="id-column"><%= item.id %></span>
  <span class="name-column"><%= item.name %></span>
</li>
<% }); %>
```

## Menambahkan Tautan Diantara Halaman
``` html
<a class="index-button" href="/index">Lihat daftar</a>
```


## Mengintegrasikan Database
- Untuk menghubungkan MySQL ke Node.js https://www.mysqltutorial.org/mysql-nodejs/connect/
- install paket mysql di terminal : ```$ npm install mysql```
- Import paket mysql pada file app.js :page_with_curl:
``` javascript
 const mysql = require('mysql');
 const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'app_list'
});
```

## Menggunakan Database
- Pada file app.js :page_with_curl:, atur route agar dapat mengakses data dari database
``` javascript
app.get('/index', (req, res) => {
  // Mengakses data dari database 
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      console.log(results);
      res.render('index.ejs');
    }
});
```

## Menampilkan Nilai yang Dipilih
``` javascript
app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      // Teruskan object sebagai argument ke-2 res.render
      res.render('index.ejs', {items: results});
    }
  );
});
```

## Mendapatkan Nilai Formulir
``` javascript
app.use(express.urlencoded({extended: false}));
```

## Menggunakan redirect (pengalihan)
``` javascript
res.redirect('/index')
```

## Refactory
``` javascript
<%- include('header'); %>
```

## Logout
``` javascript
req.session.destroy((error) => {
  res.redirect('/list');
});
```

## Mengalihkan Tampilan Menggunakan Status Login
- app.js :page_with_curl:
``` javascript
app.use((req, res, next) => {
    if (req.session.userId === undefined) {
        res.locals.username = 'Tamu';
        res.locals.isLoggedIn = false;
    } else {
        res.locals.username = req.session.username;
        res.locals.isLoggedIn = true;
    }
    next();
});
```

- header.ejs :page_with_curl:
``` html
<% if(locals.isLoggedIn){ %>
  <li><a href="/logout">Logout</a></li>
<% } else { %>
  <li><a href="/login">Login</a></li>
<% } %>
```

## Membatasi Akses pada Halaman
list.ejs
``` html
<ul class="list">
  <% articles.forEach((article) => { %>
    <li>
      <% if(article.category === 'limited'){ %>
        <i>MEMBER ONLY</i>
      <% } %>
      <h2><%= article.title %></h2>
      <p><%= article.summary %></p>
      <a href="/article/<%= article.id %>">Baca selengkapnya</a>
    </li>
  <% }) %>
</ul>
```

article.ejs
``` html
<div class="article">
  <% if(article.category === 'all'){ %>
  <h1><%= article.title %></h1>
  <p><%= article.content %></p>
<% } %>
  
<% if(article.category === 'limited'){ %>
  <i>MEMBER ONLY</i>
  <h1><%= article.title %></h1>
  <p><%= article.content %></p>
<% } %>
</div>
```
