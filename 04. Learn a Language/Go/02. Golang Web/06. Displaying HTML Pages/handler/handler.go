package handler

import (
	"html/template"
	"log"
	"net/http"
	"path"
	"strconv"
)

func Home(w http.ResponseWriter, r *http.Request) {
	log.Printf(r.URL.Path)

	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}

	tmpl, err := template.ParseFiles(path.Join("views", "index.html"))
	// Jika err tidak sama dengan benar-benar tidak ada, Artinya jika benar-benar ada error
	if err != nil {
		log.Println(err)
		http.Error(w, "Error is happening, keep calm", http.StatusInternalServerError)
		return
	}

	err = tmpl.Execute(w, nil)
	if err != nil {
		log.Println(err)
		http.Error(w, "Error is happening, keep calm", http.StatusInternalServerError)
		return
	}
}

func About(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Selamat datang di halaman tentang kami"))
}

func Product(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")
	idNumb, err := strconv.Atoi(id)

	if err != nil || idNumb < 1 {
		http.NotFound(w, r)
		return
	}

	w.Write([]byte("Selamat datang di halaman product kami"))

}
