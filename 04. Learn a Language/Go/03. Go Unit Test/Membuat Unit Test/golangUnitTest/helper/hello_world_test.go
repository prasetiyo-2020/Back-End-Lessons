package helper

import (
	"testing"
)

func TestHelloWorld(t *testing.T) {
	result := Hello("Prasetiyo")

	if result != "Hello Prasetiyo" {
		panic("Result is not 'Hello Prasetiyo'")
	}
}

func TestHelloWorldDiana(t *testing.T) {
	result := Hello("Diana")

	if result != "Hello Diana" {
		panic("Result is not 'Hello Diana'")
	}
}
