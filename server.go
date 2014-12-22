package main

import (
	"net/http"
	"github.com/go-martini/martini"
)

func main(){
	m := martini.Classic();

	static := martini.Static("client", martini.StaticOptions{Fallback: "/index.html", Exclude: "/api/v"})
	m.NotFound(static, http.NotFound)

	m.Use(martini.Static("client"))
	m.Use(martini.Static("client/app"))
	m.Run()
}