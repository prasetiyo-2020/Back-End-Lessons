## Menjalankan Unit Test
- Untuk menjalankan unit test ``` $ go test ```
```
$ go test
PASS
ok      golangUnitTest/helper   0.666s
```

- Untuk menjalankan unit test dengan lebih detail ``` $ go test -v ```
```
$ go test -v
=== RUN   TestHelloWorld
--- PASS: TestHelloWorld (0.00s)
PASS
ok      golangUnitTest/helper   0.316s
```

- Memilih function yang ingin di running ``` $ go test -v run TestNamaFuction ```
```
$ go test -v -run=TestHelloWorldDiana
=== RUN   TestHelloWorldDiana
--- PASS: TestHelloWorldDiana (0.00s)
PASS
ok      golangUnitTest/helper   0.339s
```

- Menjalankan semua unit test dari top folder module ```go test -v ./... ```
```
Asus@Yosho-Prasetiyo MINGW64 ~/Desktop/golangUnitTest
$ go test -v ./...
?       golangUnitTest  [no test files]
=== RUN   TestHelloWorld
--- PASS: TestHelloWorld (0.00s)
=== RUN   TestHelloWorldDiana
--- PASS: TestHelloWorldDiana (0.00s)
PASS
ok      golangUnitTest/helper   0.305s
```
