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

package studydatalake

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class CodeGuruBranch extends Simulation {

  val httpProtocol = http
    .baseUrl(" https://4tmc5ucrwa.execute-api.us-west-2.amazonaws.com/prod") // Here is the root for all relative URLs

  val scn = scenario("CodeGuruBranch")
    .exec(
      http("findByTag")
        .get("/study/DynamoDB/findByTag?tag=RCU")
      )

  setUp(scn.inject(rampUsersPerSec(15) to(200) during(600 seconds)).protocols(httpProtocol))
}
