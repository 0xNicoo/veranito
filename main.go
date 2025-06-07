package main

import (
	"html/template"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

var templates = template.Must(template.ParseGlob("templates/*.html"))

func main() {
	os.MkdirAll("uploads", os.ModePerm)

	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/upload", uploadHandler)
	http.Handle("/uploads/", http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads"))))

	http.ListenAndServe(":8080", nil)
}

func getImagePaths() []string {
	files, _ := os.ReadDir("uploads")
	paths := []string{}
	for _, file := range files {
		if !file.IsDir() {
			paths = append(paths, "/uploads/"+file.Name())
		}
	}
	return paths
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "index.html", getImagePaths())
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
		return
	}

	file, header, err := r.FormFile("image")
	if err != nil {
		http.Error(w, "No se pudo leer la imagen", http.StatusBadRequest)
		return
	}
	defer file.Close()

	out, err := os.Create(filepath.Join("uploads", header.Filename))
	if err != nil {
		http.Error(w, "No se pudo guardar la imagen", http.StatusInternalServerError)
		return
	}
	defer out.Close()

	io.Copy(out, file)

	// Devolvemos solo el bloque de la galería
	templates.ExecuteTemplate(w, "gallery.html", getImagePaths())
}
