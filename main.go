package main

import (
	"html/template"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

var templates = template.Must(template.ParseFiles(
	"templates/index.html",
	"templates/campeones.html",
	"templates/header.html",
))

type Campeon struct {
	Semana      int
	Dias        string
	Nombre      string
	Motivo      string
	Campeonatos int
}

func main() {
	os.MkdirAll("uploads", os.ModePerm)

	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/upload", uploadHandler)
	http.HandleFunc("/campeones", campeonesHandler)
	http.Handle("/uploads/", http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads"))))
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

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

func campeonesHandler(w http.ResponseWriter, r *http.Request) {
	campeones := []Campeon{
		{1, "28/04/2025 - 04/05/2025", "Sebastian Gonzalez Tello", "Por peruano", 1},
		{2, "05/05/2025 - 11/05/2025", "Emiliano Rios", "Cronograma", 1},
		{3, "12/05/2025 - 18/05/2025", "Rafael Eguren", "Por cabra", 1},
		{4, "19/05/2025 - 25/05/2025", "Juan Ignacio Frangolini", "Pegó laburo", 1},
		{5, "26/05/2025 - 01/06/2025", "Victoria Miranda", "Recibida", 1},
		{6, "02/06/2025 - 08/06/2025", "Tomas Pipolo", "Se votó solo", 1},
		{7, "09/06/2025 - 15/06/2025", "Nicolas Morales", "Justicia divina", 1},
	}
	templates.ExecuteTemplate(w, "campeones.html", campeones)
}
