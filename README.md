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
$ cd ..
$ docker run -p 9000:9000 -it -d letsfly:0.1
$ cd qa
$ cucumber features/nostromo.feature
$ curl localhost:9000/hello

