import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.stream.ActorMaterializer
import akka.http.scaladsl.server.Directives._
import spray.json._
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport

import scala.concurrent.ExecutionContext
import scala.util.{Failure, Success}

final case class Name(name: String)

trait JsonSupport extends SprayJsonSupport with DefaultJsonProtocol {
  implicit val nameFormat = jsonFormat1(Name)
}

object Server extends App with JsonSupport {
  //Init
  val host = "0.0.0.0"
  val port = 9000


  implicit val system: ActorSystem = ActorSystem("nostromo")
  implicit val executor: ExecutionContext = system.dispatcher
  implicit val materializer: ActorMaterializer = ActorMaterializer()

  def route =
    get {
      pathEndOrSingleSlash {
        getFromResource("build/index.html")
      } ~ {
        getFromResourceDirectory("./build")
      }
    } ~
      path("hello") {
        get {
          println("Got GET")
          complete("Hello, World!")
        } ~
        post {
          println("Got POST")
          complete("U r fine")
          entity(as[Name]) {
              item => complete("OK. U r fine: " + item.name)
          }

        }
    } ~ path("test") {
      get {
        pathEndOrSingleSlash {
          getFromResource("prod/button.js")
      } ~ {
        getFromResourceDirectory("./prod")
      }
      }
    }

  val bindingFuture = Http().bindAndHandle(route, host, port)

  bindingFuture.onComplete {
    case Success(serverBinding) => println(s"listening to ${serverBinding.localAddress}")
    case Failure(error) => println(s"error: ${error.getMessage}")
  }

}
