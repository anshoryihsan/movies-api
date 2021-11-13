# menggunakan api

- alamat url api : https://answebresapimovies.herokuapp.com/api/v1
ada 2 fungsi endpoin yang disediakan

1. mencari filem berdasarkan nama
   - method:GET
   - endpoint:/search?name=
   - keterangan parameter: name -> judul filem.

2. melihat detail dari filem yang diinginkan
   - method:GET
   - endpoint:/detail?imdbID=
   - keterangan parameter: imdbID -> id dari filem

# Cara install dan menjalankan poject

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

# database project

```
~$ CREATE DATABASE localdata;

~$ USE localdata;

~$ CREATE TABLE localdata.log (
      id INT auto_increment NOT NULL,
      created_at varchar(100) DEFAULT 'current_timestamp()' NULL,
      endpoint varchar(100) NULL,
      CONSTRAINT NewTable_PK PRIMARY KEY (id)
   )
```

note:api yang sudah di deploy ada sedikit masalah di dabase karena menggunakan public dabase db4free sehingga lama untuk mengaksessnya.
