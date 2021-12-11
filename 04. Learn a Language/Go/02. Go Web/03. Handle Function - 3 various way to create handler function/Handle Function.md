``` golang
package main

import (
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	// first way
	contact := func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Selamat datang di halaman kontak kami"))
	}
	// End first way

	mux.HandleFunc("/", home)
	mux.HandleFunc("/about", about)
	mux.HandleFunc("/contact", contact)

	// second way
	mux.HandleFunc("/profile", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Selamat datang di halaman proile kami"))
	})
	// end second way

	log.Println("Starting web on port 8080")

	err := http.ListenAndServe(":8080", mux)
	log.Fatal(err)
}

// third way
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
// end third way

```
