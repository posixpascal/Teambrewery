package main

import (
	"github.com/go-martini/martini"
)

func main(){
	m := martini.Classic();
	

	
	m.Use(martini.Static("client"))
	m.Use(martini.Static("client/app"))
	m.Run()
}