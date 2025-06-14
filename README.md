# Entrega 2 – Backend Digital Twin (Java + Spring Boot + H2)

## 🎯 Objetivo

Desenvolver um serviço REST que persiste leituras de sensores em banco H2 (modo “file”) e fornece endpoints para integração com o aplicativo frontend.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Java 17 ou superior
- Maven

### Comando para iniciar o backend
```bash
mvn spring-boot:run
```

---

## 🗃️ Localização do banco H2

O banco é salvo no modo **file**, e está localizado em:
```
./backend/data/readings.mv.db
```

---

## 📡 Endpoints disponíveis

| Método | Endpoint                   | Descrição                         |
|--------|----------------------------|-----------------------------------|
| POST   | `/api/readings`           | Cria uma nova leitura             |
| GET    | `/api/readings`           | Lista todas as leituras           |
| GET    | `/api/readings/{sensorId}`| Lista leituras de um sensor específico |

---

## 🧪 Exemplo de requisição `curl`

### Criar nova leitura:
```bash
curl -X POST http://localhost:8080/api/readings \
-H "Content-Type: application/json" \
-d '{
  "sensorId": "sensor01",
  "value": 42.5,
  "timestamp": "2025-06-12T22:48:00"
}'
```

### Buscar todas as leituras:
```bash
curl http://localhost:8080/api/readings
```

### Buscar leituras por sensor:
```bash
curl http://localhost:8080/api/readings/sensor01
```

---

## 🔐 CORS

CORS liberado globalmente para consumo pelo frontend:
```java
@CrossOrigin(origins = "*")
```

---

## 👨‍💻 Integrantes

| Nome completo          | RM        |
|------------------------|-----------|
| Pedro Martins| RM: 98663 |
| Murilo Pomin | RM: 99683 |
| Gabriel Taboada | RM: 97957 |
| Daniel Menezes | RM: 551398 |
| Luiz Augusto Melki | RM: 552053 |

---

## 📁 Estrutura do projeto

```
Festo_Digital_Twin/
├── backend/
│   ├── data/             # Arquivo do banco H2 (modo file)
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/example/digitaltwin/
│   │       │       ├── controller/ReadingController.java
│   │       │       ├── model/Reading.java
│   │       │       ├── repository/ReadingRepository.java
│   │       │       └── DigitalTwinBackendApplication.java
│   │       └── resources/application.properties
│   └── pom.xml
├── frontend/
└── README.md
```
---

✅ Projeto 100% funcional e testado com Postman.
