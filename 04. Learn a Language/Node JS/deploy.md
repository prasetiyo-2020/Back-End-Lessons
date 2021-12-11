# Deploy Node.js

## 1. Heroku
1. Create Heroku Account https://www.heroku.com/
2. Pergi ke Dashboard https://dashboard.heroku.com/apps
![Screenshot (381)](https://user-images.githubusercontent.com/84963363/137065726-7751c858-43e2-4511-a7a1-16a71758e277.png)
3. Install Heroku CLI https://devcenter.heroku.com/articles/heroku-command-line
![Screenshot (324)](https://user-images.githubusercontent.com/84963363/137067194-090bb642-8a52-40ef-a2ee-a5d494d3bf0d.png)
4. Buka Command Prompt dalu masukan perintah ``` heroku --version ``` untuk memeriksa apakah sudah terinstall sekaligus melihat versi dari heroku
```
$ heroku --version
» Warning: heroku update available from 7.53.0 to 7.59.0.
heroku/7.53.0 win32-x64 node-v12.21.0
```

5. Masukan perintah ``` heroku login ``` untuk login dan terhubung dengan create app yang telah dibuat
```
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
> Opening browser to https://cli-auth.heroku.com/auth/cli/browser/e6106c6b-a779-41eb-818e-8906f8fed922?requestor=SFMyNTY.g2gDbQAAAA0zNi42OC4yMzkuMjU0bgYAwOv5d3wBYgABUYA.ja9iVwsckKDDJ33HohxVucsljKSj-EaPpGoW2bhDyiY
> Logging in... done
> Logged in as prasetiyo2020@yahoo.com
```
Halaman berikut ini otomatis terbuka saat memasukan perintah ``` heroku login ``` yang artinya kita telah terhubung
![Screenshot (383)](https://user-images.githubusercontent.com/84963363/137069453-dc83d7a9-bfe4-46bb-a098-c5fabbce7a70.png)

6. Pindah ke folder tempat aplikasi tersimpan
```
$ cd my-project/
```

7. Jadikan folder sebagai repositori lokal
```
$ git init
> Initialized empty Git repository in C:/path/<your app folder>/.git
```
8. Jadikan repositori terhubung dengan remote git heroku
```
$ heroku git:remote -a <nama-app>
> set git remote heroku to https://git.heroku.com/<your-app>.git
```

## 2. Pengaturan agar aplikasi dapat berjalan di hosting
📃 app.js
``` javascript
const connection = mysql.createConnection({
    host: 'db4free.net' || localhost,
    user: 'prasetiyo' || root,
    password: '<your password>',
    database: 'prasetiyo_blog' || blog
});
```

``` javascript
app.listen(process.env.PORT || 3000);
```

📃 .gitignore
``` gitignore
node_modules
package-lock.json
```

📃 package.json
``` json
  "scripts": {
    "start": "node app.js"
  }
```
