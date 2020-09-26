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

class EnhancedJava512Api extends Simulation {

  val httpProtocol = http
    .baseUrl("https://loywsxjqul.execute-api.us-east-1.amazonaws.com/prod") // Here is the root for all relative URLs

  val headers = Map("Authorization" -> "Bearer eyJraWQiOiI3WWg1MzhmZTJ0bDVoT3V2a1JhcFFyblY4VjlZRGZLSnYyY0QrT1Bod2VrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmYTdhM2U1My0zYWJjLTRiYWQtYTUxOC0xMTgxY2Q1YjIzMzYiLCJhdWQiOiIyNjBmM2JhMW01ZzJzNDd0NmNsZ3Nla3Z0YSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiIxNzE0NDYzMS01ZTM2LTQxOTEtYTk1Yi1iNGM4MDFkMzI2ODgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU5NjY1MzQyMywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfZHlYZnR2YkhuIiwiY29nbml0bzp1c2VybmFtZSI6InBsYXJlbnRpcyIsImV4cCI6MTU5NjY1NzAyMywiaWF0IjoxNTk2NjUzNDIzLCJlbWFpbCI6InBsYXJlbnRpc0BnbWFpbC5jb20ifQ.YrnBbDZ40usEe2GET3pG9TRb-fvbtXVak_KbqsT-hX3fZDTTFVndhnIvrKoqByTVBBd3_41Myiv5Gzg0kccUuLmK-W_LKbimlw3FSSutRz_kviA9RhcTikd-EfS1ndOA7n0z67Bte-_apLb2T568Z0VNp_gCpKCFgl2x8qTogDhmw0g5iRxs76V2dLsLlcEv1_4nWIjmmBxiKeiPm20u_vSJJvRsZnNN2PtH-pndcWqqeNKuiXMleWvVuZndo4t9EeHq_dgg3ov2p0qmVsH-WfGEMZKUMkltbW_WnOTpNoYpTKcC0gzofJvGYaWspdJn7iEEzW2cth59lZNa8RriPA")

  val scn = scenario("Scenario Name") // A scenario is a chain of requests and pauses
    .exec(
      http("request_1")
        .get("/study/DynamoDB/findByTag?tag=RCU")
        .headers(headers)
    )

  setUp(scn.inject(rampUsersPerSec(30) to(200) during(180 seconds)).protocols(httpProtocol))
}
