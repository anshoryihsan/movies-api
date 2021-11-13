# menggunakan api

alamat url api :
ada 2 fungsi endpoin yang disediakan

1. mencari filem berdasarkan nama
   method:GET
   endpoint:/search?name=
   keterangan parameter: name -> judul filem.

2. melihat detail dari filem yang diinginkan
   method:GET
   endpoint:/detail?imdbID=
   keterangan parameter: imdbID -> id dari filem

# Cara install dan menjalankan

Download projek:

```
~$ git clone https://github.com/anshoryihsan/movies-api.git
~$ cd movies-api
~$ npm install
```

Jalankan project:

```
~$ npm start
```

# mengsiapkan database

```
CREATE DATABASE localdata;
```
