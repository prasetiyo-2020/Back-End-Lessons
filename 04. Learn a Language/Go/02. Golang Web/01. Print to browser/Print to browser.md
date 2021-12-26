``` golang
package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/hello", helloHandler)
	log.Println("Starting web on port 8080")

	err := http.ListenAndServe(":8080", mux)
	log.Fatal(err)
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello Prasetiyo"))![Screenshot (508)](https://user-images.githubusercontent.com/84963363/141736867-6975de1e-6460-48ab-87d0-bf7b6a33f8b7.png)

}
```

```
$ go run main.go
2021/11/15 13:59:13 Starting web on port 8080
```

![Screenshot (509)](https://user-images.githubusercontent.com/84963363/141736987-e0d02f2a-ffd0-4434-b11d-fc5e35f99e81.png)

