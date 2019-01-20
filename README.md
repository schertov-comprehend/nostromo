# nostromo
Sample scala project

sbt docker:publishLocal
docker run -p 9000:9000 -it -d letsfly:0.1
curl localhost:9000/hello
