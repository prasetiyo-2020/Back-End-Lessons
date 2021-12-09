## PHP
### Print
``` php
echo 'Hello, world!';
// Output: Hello, world!
echo 7 * 2;
// Output: 14
echo 8 % 3
// Output: 2
```

## Dasar-dasar PHP
### Tipe data string dan numberic
``` php
echo 5 + 7;
// Output: 12
echo '5 + 7';
// Output: 5+7
```

### Variabel
``` php
$sayur = 'tomat';
echo $sayur;
// Output: tomat

$sum = 8+9;
echo $sum;
// Output: 17
```

### Memperbarui Variable
``` php
$x = 5;
$x = $x + 5
// $x += 5
echo $x;
// Output: 10
```

### Penggabungan String
``` php
$name = 'Prasetiyo';
echo "Halo, $name"
// Output: Halo Prasetiyo
```

## Statement Kondisional
### IF
``` php
$x = 10 * 10;
$y = 9 * 9;

if ($x > 90)
echo 'Variable $x lebih besar dari 90.';
// Output: Variable $x lebih besar dari 9800.

if ($y > 90)
echo 'Variable $y lebih besar dari 90.';
// Output: Tidak tercetak karena bernilai false
```

### Else
``` php
$age = 23;
if ($age >= 30) {
  echo 'Kamu berumur 30 tahun atau lebih.';
} else {
  echo 'Kamu berumur dibawah 30 tahun.';
}
// Output: Kamu berumur dibawah 30 tahun.
```

### Elseif
``` php
$age = 20;
if ($age >= 30) {
  echo 'Kamu berumur 30 tahun atau lebih.';
} elseif ($age >= 20) {
  echo 'Kamu berumur 20 tahun atau lebih.';
} else {
  echo 'Kamu berumur dibawah 20 tahun.';
}
// Kamu berumur 20 tahun atau lebih.
```

### // && dan ||
``` php
$x = 1071;
if ($x % 3 == 0 && $x % 7 == 0){
  echo 'x adalah kelipatan 3 dan kelipatan 7.';
} elseif ($x % 3 == 0) {
  echo 'x adalah kelipatan 3 tetapi bukan kelipatan 7.';
} elseif ($x % 7 == 0) {
  echo 'x adalah kelipatan 7 tetapi bukan kelipatan 3.';
} else {
  echo 'x bukan kelipatan 7 atau kelipatan 3.';
}
// Output: x adalah kelipatan 3 dan kelipatan 7.
```
### Switch
``` php
$num = 4;
$remainder = $num % 3;
switch($remainder) {
  case 0:
    echo 'Sangat beruntung!!';
    break;
  case 1:
    echo 'Beruntung!';
    break;
  case 2:
    echo 'Sedikit beruntung.';
    break;
  default:
    echo 'Tidak beruntung...';
    break;
}
// Output: Beruntung!
```

## Array
### Membuat Array
``` php
$buahs = ['Jambu', 'Semangka', 'Mangga'];
echo $buahs[0];
// Output : Jambu
```

### Menambah Array
``` php
$buahs = ['Jambu', 'Semangka', 'Mangga'];
$buahs[] = 'Apel';
//  Array $buah saat ini yaitu $buahs = ['Jambu', 'Semangka', 'Mangga', 'Apel'];
echo $buahs[3];

// Output : Apel
```
### Menghapus Array
```php
$buahs = ['Jambu', 'Semangka', 'Mangga'];
unset($buahs[0]);
echo $buahs[0];
// Undefined
```
## Array Associative
### Membuat Array Associative
``` php
$nilaiUjian = array (
    'html' => 80,
    'css' => 80,
    'javascript' => 70
);

echo $nilaiUjian['javascript'];
// Output: 70
```
### Menambah Array Associative
``` php
$nilaiUjian = array (
    'html' => 80,
    'css' => 80,
    'javascript' => 70
);

$nilaiUjian['nodejs'] = '85';
// Isi Array $nilaiUjian saat ini yaitu $nilaiUjian = array ('html' => 80, 'css' => 80, 'javascript' => 70, 'nodejs' => 85);
echo $nilaiUjian['nodejs'];
// Output: 85
```

### Mengubah Nilai Array Associative
``` php
$nilaiUjian = array (
    'html' => 80,
    'css' => 80,
    'javascript' => 70
);

$nilaiUjian['javascript'] += 20;
// Isi Array $nilaiUjian saat ini yaitu $nilaiUjian = array ('html' => 80, 'css' => 80, 'javascript' => 90);
echo $nilaiUjian['javascript'];
// Output: 90
```

### Menghapus Array Associative
``` php
$nilaiUjian = array (
    'html' => 80,
    'css' => 80,
    'javascript' => 70
);

unset($nilaiUjian['html']);
echo $nilaiUjian['html'];
// Output: Undefined
```

## Loop
### For
``` php
for ($i = 51; $i <= 100; $i++){
    echo $i.'<br>';
}
// Output: 51 hingga 100
```

### While
``` php
$i = 2;
while ($i <= 100){
  if($i % 2 == 0){
    echo $i.'<br>';
  }
  $i++;
}
// Output: Bilangan Genap dari angka 2 sampai 100
```

### Break
Statement break secara paksa akan mengakhiri loop dan digunakan dalam statement berulang seperti loop (for, while, foreach, dll). Statement break umumnya digunakan dalam kombinasi dengan statement conditional seperti statement if.

``` php
for ($i = 1; $i <= 1000; $i++) {
  if($i > 500) {
    break;
  }
  echo $i;
  echo '<br>';
}
// Output: 1 hingga 500
```

### Continue
Ketika statement break mengeluarkan kita dari loop, statement continue hanya melewatkan iterasi saat ini tetapi tetap melanjutkan loop. Statement continue juga bisa digunakan dalam statement iteratif seperti for, while,foreach, dll.

``` php
for ($i = 1; $i <= 100; $i++) {
  if($i % 3 == 0) {
    continue;
  }
  echo $i.'<br>';
}

// Output: 1 - 100 kecuali kelipatan 3, seperti 3, 6, 9 dan seterusnya.
```

### Foreach
Loop foreach melakukan iterasi pada array dengan index atau array associative secara berurutan dari nilai pertama.
``` php
$nilaiUjians = array ('html' => 90, 'css' => 90, 'javascript' => 80);

foreach($nilaiUjians as $nilaiUjian => $value){
  echo $nilaiUjian.' : '.$value.' ';
}
// Output : "html : 90 css : 90 javascript : 80"
```

## Function
### Built-in function
``` php
$str = 'prasetiyo';
echo strlen($str);
// Output: 9
```

``` php
$pelajarans = array('HTML', 'CSS', 'Javascript');
echo count($pelajarans);
// Output: 3
```

``` php
echo rand(1, 100);
// Output: Angka acak dari 1 hingga 100
```

### Function
``` php
function hello(){
  echo 'Hello, world!';
}

hello();
// Output: Hello, world!
```

``` php
function printRectangleArea($height, $width){
  echo $height * $width;
}
printRectangleArea(5, 10);
// Output: 50
```

### Return
``` php
function getCircleArea ($radius){
  return $radius * $radius * 3;
}

$circleArea = getCircleArea(5);
echo $circleArea;
// Output: 75
```

## Object-Oriented Programming
### Class dan Instance
``` php
// Class
class Menu {
  
}

// Instance
$soto = new Menu();
$kari = new Menu();
$mieAyam = new Menu();

```

### Property
Property adalah data yang dimiliki instance, dan method adalah function yang berhubungan dengan instance.
``` php
class Menu {
  public $name;
}

$soto = new Menu();
$kari = new Menu();

$soto -> name = 'Soto';
$kari -> name = 'Kari';

echo $soto -> name;
echo '<br>';
echo $kari -> name;

// Output: "Soto" dan "Kari"
```

### Method
Method adalah function yang dimiliki setiap instance.
``` php
class Menu {
  public function hello(){
    echo 'Saya adalah instance dari class Menu';
  }
}

$soto = new Menu();
$soto->hello();
// Output: Saya adalah instance dari class Menu
```

### $this
``` php
class Menu {
  public $name;
  public function hello(){
    echo "Saya adalah $this->name";
  }
}

$soto = new Menu();
$soto->name = 'Soto';
$soto->hello();
// Output: Saya adalah Soto
```

### Constructor

``` php
class Menu {
  public $name;
  public function __construct() {
    echo "Sebuah instance telah diciptakan.";
  }
}

$soto = new Menu();
// Output: Sebuah instance telah diciptakan.
```

### Constructor dan Property
Method __construct() dapat menerima argument.
``` php
class Menu {
  public $name;
  public function __construct($name) {
    // Menetapkan property "name" milik sebuah instance
    $this -> name = $name;
  }

  public function hello() {
    echo 'Saya adalah '.$this -> name;
  }
}

$soto = new Menu('Soto');
$soto -> hello();
// Output: Saya adalah Soto
```
