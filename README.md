# Storelocator

Learning Angular by developing a storelocator.

## Getting started

### Prerequisites

* Docker >= 18.09.2 or nodejs >= 10.15.0 and npm >= 6.X

### Installing

1. Clone the repository    
    
2. Build and Start Docker container :

    ````
    $ docker build -t storelocator ./
    
    $ docker run -d --name storelocator_app -p 80:4200 -v `pwd`/:/var/www/html/app storelocator
         
    $ docker exec -it storelocator_app sh -c "cd front && ng serve --open --host 0.0.0.0"
   ````
   
3. Force stop and remove the container:
   
    ````
    $ docker rm -f storelocator_app