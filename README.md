# nostromo
## Sample scala project
```
$ cd myfront
$ yarn build
cd ../LetsFly
$ sbt
> project letsfly
> compile
> docker:publishLocal

docker run -p 9000:9000 -it -d letsfly:0.1

curl localhost:9000/hello
```
