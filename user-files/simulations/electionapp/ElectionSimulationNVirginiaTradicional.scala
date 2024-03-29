/*
 * Copyright 2011-2019 GatlingCorp (https://gatling.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package electionapp

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class ElectionSimulationNVirginiaTradicional extends Simulation {

  val feederCandidates = csv("candidates.csv").random
  val feederPartitionsKeys = Iterator.continually(Map("pk" -> (Random.alphanumeric.take(20).mkString)))


  val httpProtocol = http
    .baseUrl("https://5fchwpfdq1.execute-api.us-east-1.amazonaws.com")

  val scn = scenario("Running a Election")
    .feed(feederCandidates)
    .feed(feederPartitionsKeys)
    .exec(
      http("Vote")
        .post("/vote")
        .body(StringBody("""{ "Data": "${candidate}", "pk": "${pk}" }"""))
        .asJson)

  setUp(scn.inject(rampUsersPerSec(100) to(100) during(300 seconds)).protocols(httpProtocol))
}