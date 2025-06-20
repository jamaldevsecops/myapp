# myapp

**Description**  
This project aims to demonstrate containerized static web pages using Docker. It includes three web interfaces (blue, green and yellow): a blue interface served at ```http://localhost:8081```, a green interface served at ```http://localhost:8082``` and a yellow interface served at ```http://localhost:8083```. Each interface displays a simple welcome message with a distinct background color to showcase Docker's ability to deploy multiple, isolated web applications.

## 1. Build the Blue Image
- Navigate to the blue directory:
```bash
cd blue
```
- Build the Docker image:
```bash
docker build -t jamaldevsecops/myapp:v1.1 -f Dockerfile-blue .
```

## 2. Build the Green Image
- Navigate to the green directory:
```bash
cd ../green
```
- Build the Docker image:
```bash
docker build -t jamaldevsecops/myapp:v1.2 -f Dockerfile-green .
```

## 3. Build the Yellow Image
- Navigate to the yellow directory:
```bash
cd ../yellow
```
- Build the Docker image:
```bash
docker build -t jamaldevsecops/myapp:v1.3 -f Dockerfile-yellow .
```

## 4. Run the Containers
- Run the blue interface container on port 8081:
```bash
docker run -d -p 8081:80 jamaldevsecops/myapp:v1.1
```
- Run the green interface container on port 8082:
```bash
docker run -d -p 8082:80 jamaldevsecops/myapp:v1.2
```
- Run the yellow interface container on port 8083:
```bash
docker run -d -p 8083:80 jamaldevsecops/myapp:v1.3
```


## 4. Access the Pages
- Open a browser and navigate to:
  - ```http://localhost:8081``` to see the blue interface.
  - ```http://localhost:8082``` to see the green interface.
  -  ```http://localhost:8083``` to see the yellow interface.
