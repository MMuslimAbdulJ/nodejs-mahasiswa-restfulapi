## Register User

Request :

-   Method : POST
-   Endpoint : `api/register`
-   Header :
    -   Content-Type : application/json
    -   Accept : application/json
-   Body :

```json
{
    "username": "string, unique",
    "password": "string"
}
```

Response :

```json
{
    "message": "User registered successfully"
}
```

## Login User

Request :

-   Method : GET
-   Endpoint : `api/login`
-   Header :
    -   Content-Type : application/json
    -   Accept : application/json
-   Body :

```json
{
    "username": "string, unique",
    "password": "string"
}
```

Response :

```json
{
    "jwt_token": "string"
}
```

## Create Mahasiswa

Request :

-   Method : POST
-   Endpoint : `api/mahasiswa/{nim}`
-   Header :
    -   Content-Type : application/json
    -   Accept : application/json
-   Body :

```json
{
    "nim": "string, unique",
    "nama": "string",
    "fakultas": "string",
    "prodi": "string"
}
```

Response :

```json
{
    "data": {
        "nim": "string, unique",
        "nama": "string",
        "fakultas": "string",
        "prodi": "string"
    }
}
```

## Get All Mahasiswa

Request :

-   Method : GET
-   Endpoint : `api/mahasiswa`
-   Header :
    -   Accept : appliaction/json

Response :

```json
{
    "data": [
        {
            "nim": "string, unique",
            "nama": "string",
            "fakultas": "string",
            "prodi": "string"
        },
        {
            "nim": "string, unique",
            "nama": "string",
            "fakultas": "string",
            "prodi": "string"
        },
        ...
    ]
}
```

## Get Mahasiswa By NIM

Request :

-   Method : GET
-   Endpoint : `api/mahasiswa/{nim}`
-   Header :
    -   Accept : appliaction/json

Response :

```json
{
    "data": {
        "nim": "string, unique",
        "nama": "string",
        "fakultas": "string",
        "prodi": "string"
    }
}
```

## Update Mahasiswa

Request :

-   Method : PUT
-   Endpoint : `api/mahasiswa{nim}`
-   Header :
    -   Content-Type : application/json
    -   Accept : application/json
-   Body :

```json
{
    "nama": "string",
    "fakultas": "string",
    "prodi": "string"
}
```

Response :

```json
{
    "data": {
        "nim": "string, unique",
        "nama": "string",
        "fakultas": "string",
        "prodi": "string"
    }
}
```

## Delete Mahasiswa

Request :

-   Method : DELETE
-   Endpoint : `api/mahasiswa/{nim}`
-   Header :
    -   Accept : application/json

Response :

```text
No Content
```
