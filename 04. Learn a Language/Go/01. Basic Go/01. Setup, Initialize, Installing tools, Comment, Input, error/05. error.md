## Common Errors
#### This problem occurs because there is more than one variable declared, the solution is to remove one of the declared variables.
``` golang
package main
import "fmt"
func main() {
	day := 15
	day := 20 // this line should be deleted
	fmt.Println(day)
}
```

```
$ go run .
> # example/hello
> .\hello.go:7:6: no new variables on left side of :=
```

#### This problem occurs because printing undefined variables, the solution is to print if the variable has been defined.
``` golang
package main
import "fmt"

func main() {
	fmt.Println(day) // this line should be deleted
	var day int = 15
	fmt.Println(day)
}
```

```
$ go run .
> # example/hello
> .\hello.go:6:14: undefined: day
```

#### This problem occurs because changing the contents of the variable in the wrong way.
``` golang
package main

import "fmt"

func main() {
	var day int = 15
	fmt.Println(day)
	day := 15 // this line should be 'day = 15'
}
```

```
$ go run .
> # example/hello
> .\hello.go:8:6: no new variables on left side of :=
```

#### This problem occurs because changing the contents of the variable in the wrong way.
``` golang
package main

import "fmt"

func main() {
	day := 15
	day = "Sunday" // this line should be int datatype
	fmt.Println(day)
}
```

```
$ go run .
> # example/hello
> .\hello.go:7:6: no new variables on left side of :=
```
