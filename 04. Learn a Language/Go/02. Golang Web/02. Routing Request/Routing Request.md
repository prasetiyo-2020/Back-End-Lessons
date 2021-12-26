``` golang
package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", home)
	mux.HandleFunc("/about", about)
	log.Println("Starting web on port 8080")

	err := http.ListenAndServe(":8080", mux)
	log.Fatal(err)
}

func home(w http.ResponseWriter, r *http.Request) {
	log.Printf(r.URL.Path)

	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}

	w.Write([]byte("Selamat datang di halaman utama kami"))
}

func about(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Selamat datang di halaman tentang kami"))
}

```

```
$ go run main.go
2021/11/15 14:24:41 Starting web on port 8080
2021/11/15 14:24:48 /
2021/11/15 14:26:02 /prasetiyo
```

![Screenshot (510)](https://user-images.githubusercontent.com/84963363/141739762-67ddb024-14af-4250-ab4c-ea23f1f00d4e.png)
